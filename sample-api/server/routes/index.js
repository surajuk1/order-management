const moment = require('moment');
const express = require('express');
//const oauth2 = require('../middleware/auth/oauth2');
//const oauth2admin = require('../middleware/auth/oauth2admin');
const passport = require('passport');
//const isAuthenticated =passport.authenticate('bearer', { session: false });
const config = require('../config/config');

var cron = require('node-cron');
var UserAccess = require('./../middleware/access');

const constants = require('./../config/constants');


const orderController = require('../controllers').order;


//const resetpswdController = require('../controllers').reset_password;

const responses = require('./../helpers/responses');

var jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');


function authenticateUser(req, res, next, isAuth, cb) {

    var bearerToken = req.headers.authorization;
    var uid = req.headers.uid;

    if (!bearerToken) {
        if (isAuth)
            return cb('invalid_token');
        else
            return next();
    }

    var token = bearerToken.split(' ')[1];

    if (!token) return cb('invalid_token');


    
    jwt.verify(token, config.login_secrets, function(err, decoded) {
        if (!decoded) return cb('invalid_token');
        
          //recheck istoken available
          UserAccess.istokenexpired(uid,bearerToken, function(err, data) {
             if (err || !data) return cb('inactive_account');

              // UserAccess.isuseractive(uid,bearerToken, function(err, data) {
              //   if (err || !data) return cb('invalid_token');

                  req.user_id = decoded.user_id;

                  cb(null);

              // });


            // req.user_id = decoded.user_id;

            // cb(null);
          });
        //cb(null);

    });
}

function isAuthenticated(req, res, next) {

    console.log(req.method);

    authenticateUser(req, res, next, true, function(err, data) {
        if (err) return res.status(constants.response_codes.unauthorized).json(responses.errorMsg(err, lang.error[err]));

        else
            next();
    });
}




module.exports = (router) => {
 
  const version = '';  

  router.post(version+'/order',orderController.add_order);
  router.put(version+'/order',orderController.edit_order);
  router.get(version+'/order',orderController.list_order);

  router.use(version, (req, res) => res.status(200).send({
    message: 'Welcome to the SAMPLE API!!!!!!!!!!!!!!!!!!!',
  }));
};