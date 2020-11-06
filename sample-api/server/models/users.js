'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
      user_id:{
        type:DataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      full_name: {
        type:DataTypes.STRING,
        allowNull:false,
      },
      user_name: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      reg_type: {
        type:DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type:DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mobile_country_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      account_type:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5,
      },
      profile_pic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile_pic_thumb: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      account_balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      subscription_plan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      plan_period: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      plan_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      plan_start_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
  },{
    underscored: true,
    freezeTableName: true,
    tableName: 'users'
  });

  Users.associate = (models) => {
    // associations can be defined here
  };
  return Users;
};