'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
      ref_id: {
        allowNull: true,
        type: DataTypes.STRING(255)
      },
      user_id: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      date_from: {
        allowNull: false,
        type: DataTypes.DATE
      },
      date_to: {
        allowNull: false,
        type: DataTypes.DATE
      },
      amount: {
        allowNull: true,
        type: DataTypes.DECIMAL(13,3)
      },
      pay_due_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      pay_due_amount: {
        allowNull: true,
        type: DataTypes.DECIMAL(13,3)
      },
      paid_status: {
        allowNull: true,
        type: DataTypes.SMALLINT
      },
      payment_date_time: {
        allowNull: true,
        type: DataTypes.DATE
      },
      usage: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      payment_response: {
        allowNull: true,
        type: DataTypes.JSONB
      },
      created_at: {
		allowNull: false,
		type: DataTypes.DATE
	  },
	   updated_at: {
		allowNull: false,
		type: DataTypes.DATE
	  },
	},{
  	underscored: true,
    freezeTableName: true,
    tableName: 'invoice'
  });
  Invoice.associate = function(models) {
    // associations can be defined here
  };
  return Invoice;
};