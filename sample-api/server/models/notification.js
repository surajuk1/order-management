'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('notification', {
      ref_id: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      type: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      view_status: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        },
      }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'notification'
      });
    Notification.associate = function(models) {
      // associations can be defined here
    };
    return Notification;
};
