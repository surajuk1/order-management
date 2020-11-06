'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      invoice_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      payment_currency_code: {
        allowNull: true,
        type: Sequelize.CHAR(5)
      },
      amount: {
        allowNull: true,
        type: Sequelize.DECIMAL(13,2)
      },
      payable_amount: {
        allowNull: true,
        type: Sequelize.DECIMAL(13,2)
      },
      payment_merchant_reference: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_status: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      payment_checkout_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_result_ndc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_result_buildnumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_result_code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_result_description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_date_time: {
        allowNull: true,
        type: Sequelize.DATE
      },
      payment_user_comment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_bank_response_checkout: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      payment_bank_response_complete: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payment');
  }
};
