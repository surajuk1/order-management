
// const AccessToken = require('../models').access_tokens;
// const RefreshToken = require('../models').refresh_tokens;
const bcrypt = require('bcrypt');
const Joi = require('joi');
const constants = require('./../config/constants');
const config = require('./../config/config');
const responses = require('./../helpers/responses');
var UserAccess = require('./../middleware/access');
const dbmongoose = require('../mongomodels');
var jwt = require('jsonwebtoken');
const moment = require('moment');
const Orders = require('../mongomodels/order.js');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const self = module.exports = {

  async list_order(req,res){
      let user_name = req.query.user_name ? parseInt(req.query.user_name) : '';
      let product_name = req.query.product_name ? parseInt(req.query.product_name) : '';
      let searchby = req.query.product_name ? parseInt(req.query.searchby) : '';

      var from_date ='';
      var to_date ='';
      if(searchby == 2) {
        var from_date = moment().subtract(7, 'days').format('YYYY-MM-DD');
        var to_date = moment().format('YYYY-MM-DD');
      } else if(searchby == 3) {
        var from_date = moment().format('YYYY-MM-DD');
        var to_date = moment().format('YYYY-MM-DD');
      }




      var whereStatement = {}

     if(user_name!='')
      {
       whereStatement.$and = [{
          $or: [
                {
                  user_name: {
                    $ilike: '%' + user_name + '%'
                 }
                },]     
        }]
      }

     if(product_name!='')
      {
       whereStatement.$and = [{
          $or: [
                {
                  product_name: {
                    $ilike: '%' + product_name + '%'
                 }
                },]     
        }]
      }
   
    if(from_date!='' && to_date!='')
    {

       whereStatement.$and = [{
         created_at : {
         $gte: from_date,
         $lte: to_date,   
        }  
      }]

    }

      const resultObj = Orders.findAll({
        where: whereStatement
      })


      if(resultObj) {
        return res.json({
          status:true,
          data: resultObj,
        });
      }

  },

  async add_order(req,res){
    try {
      const orderSchema = Joi.object({
        product_id: Joi.integer().required(),
        user_id: Joi.integer().required(),
        quantity: Joi.integer().required()
      });

      const ret = Joi.validate(req.body, userSchema, {
        // return an error if body has an unrecognised property
        allowUnknown: false,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
      });

      if (ret.error) {
        return res.status(constants.response_codes.error).json(responses.errorMsg(ret.error.details[0].context.label.toString(), ret.error.details[0].message.toString()));
      }

      const product_id = req.body.product_id;
      const user_id = req.body.user_id;
      const quantity = req.body.quantity;


      //Start mongooses db 
      const newOrder = {
        product_id:product_id,
        user_id:user_id,
        quantity:quantity,
        created_at:moment().format('YYYY-MM-DD'),
      };

      // Create
      const OrdersDB = new Orders(newOrder);
      OrdersDB.save();
      console.log(OrdersDB);
      //End mongooses db

      if(OrdersDB.isNew) {
        return res.json({
          status:true,
          success: "order_added_success",
          message: "Successfully Order Added",
        });
      } else {
        return res.json({
          status:false,
          success: "order_added_failed",
          message: "Failed to Add Order",
        });       
      }

    } catch (error) {
      console.error(error);
    }
  },


  async edit_order(req,res){
    try {
      const orderSchema = Joi.object({
        order_id: Joi.integer().required(),
        quantity: Joi.integer().required()
      });

      const ret = Joi.validate(req.body, userSchema, {
        // return an error if body has an unrecognised property
        allowUnknown: false,
        // return all errors a payload contains, not just the first one Joi finds
        abortEarly: false
      });

      if (ret.error) {
        return res.status(constants.response_codes.error).json(responses.errorMsg(ret.error.details[0].context.label.toString(), ret.error.details[0].message.toString()));
      }

      const order_id = req.body.order_id;
      const quantity = req.body.quantity;


      //Start mongooses db 
      const updateOrder = {
        quantity:quantity,
        updated_at:moment().format('YYYY-MM-DD'),
      };

      Orders.update(
        updateOrder,
        { where: { order_id: order_id } }
      ).then(result =>{
        res.json({
          status:true,
          success: "order_update_success",
          message: "Successfully Order update",
        });
      }
      )
      .catch(err => {
        res.json({
          status:true,
          success: "order_update_failed",
          message: "Update Failed",
        });
      }
      )


    } catch (error) {
      console.error(error);
    }
  },

}

    
  