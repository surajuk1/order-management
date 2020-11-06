
var constants = require('./../config/constants');
var config = require('./../config/config');
//var knex = require('knex')(config.dbConnection);
var knex = '';
var moment = require('moment');
var request = require('request');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var now = moment().format(constants.date_format);
var responses = require('./../helpers/responses');
const md5 = require('md5');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;


function generateToken(user,device, next) {
    
    var token = jwt.sign({ user_id: user.id, user_name: user.username }, config.login_secrets, { expiresIn: config.token_expires_in });
    
    var data = {access_token:token};

    if (user) {
        saveRefreshToken(user,device, function(err, refresh_token) {
            if (err) return next(err);
            saveAccessToken(user,device,data, function(err, access_token) {
                if (err) return next(err);
                user.id = md5(user.id);
                data = {
                    access_token: token,
                    token_type: config.token_type,
                    refresh_token: refresh_token,
                    user: user
                };

                return next(null, data);

            });

        });

    } else
        return next(null, data);
        
}

function saveRefreshToken(user,device, next) {
    var refresh_token = crypto.randomBytes(40).toString('hex');
    var expires_in = moment().add(config.refresh_token_expires_in, 'minutes').format(constants.date_format);

    const newRefreshToken = {
      user_id:user.id,
      device_type: device.device_type,
      device_token: device.device_token,
      token: refresh_token,
    };

    RefreshToken.create(newRefreshToken).then(function(data){
        next(null, data.token);
    })
    .catch(err => {
        return next(err.toString());
    });
}



function saveAccessToken(user,device,data, next) {

    const newAccessToken = {
      user_id:user.id,
      device_type: device.device_type,
      device_token: device.device_token,
      token: data.access_token,
    };

    AccessToken.create(newAccessToken).then(function(data){
        next(null, data.access_token);
    })
    .catch(err => {
        console.log(err.toString());
        return next(err.toString());
    });
}

function istokenexpired(bearertoken,next) {

    var token = bearertoken.replace("Bearer","").trim();

    User.findOne({
        where: {
          status:'E',
        },
        attributes: ['id','user_temp_id','username'],
        include: [
           {model: AccessToken,required:true,where:{token: token},attributes: ['id']},
        ],
    }).then(function(data) {
        next(null, data);  
    })
    .catch(err => {
        return next(err.toString());
    });

}
function isuseractive(data,next) {

    User.findOne({
        where: {
          id: data.user_id,
          status: 'E',
        }
    }).then(function(data) {
        next(null, data);  
    })
    .catch(err => {
        return next(err.toString());
    });
}


function verify(input, key, method, type, signature) {
  if(type === "hmac") {
    return (signature === sign(input, key, method, type));
  }

  else {
    throw new Error('Algorithm type not recognized');
  }
}



function isAvailableRefreshToken(refreshToken, next) {
    knex('refresh_tokens').select('user_id').where({ 'refresh_token': refreshToken }).where('expires_in', '>', knex.raw('NOW()')).limit(1).then(function(data) {
        next(null, (data.length > 0 ? data[0] : []));
    }).catch(function(err) {
        return next(err.toString());
    });
}

function clearExpiredRefreshTokens(next) {
    knex('refresh_tokens').where('expires_in', '<', knex.raw('NOW()')).delete().then(function(data) {
        next();
    }).catch(function(err) {
        return next(err.toString());
    });
}

module.exports = {
    generateToken: generateToken,
    isAvailableRefreshToken: isAvailableRefreshToken,
    saveRefreshToken: saveRefreshToken,
    saveAccessToken:saveAccessToken,
    istokenexpired:istokenexpired,
    isuseractive:isuseractive,
    clearExpiredRefreshTokens: clearExpiredRefreshTokens,
};
