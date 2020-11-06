'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('payment', {
      user_id: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      invoice_id: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      payment_currency_code: {
        allowNull: true,
        type: DataTypes.CHAR(5)
      },
      amount: {
        allowNull: true,
        type: DataTypes.DECIMAL(13,3)
      },
      payable_amount: {
        allowNull: true,
        type: DataTypes.DECIMAL(13,3)
      },
      payment_merchant_reference: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_url: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_status: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      payment_checkout_id: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_result_ndc: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_result_buildnumber: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_result_code: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_result_description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_date_time: {
        allowNull: true,
        type: DataTypes.DATE
      },
      payment_user_comment: {
        allowNull: true,
        type: DataTypes.STRING
      },
      payment_bank_response_checkout: {
        allowNull: true,
        type: DataTypes.JSONB
      },
      payment_bank_response_complete: {
        allowNull: true,
        type: DataTypes.JSONB
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
    tableName: 'payment'
  });
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};
