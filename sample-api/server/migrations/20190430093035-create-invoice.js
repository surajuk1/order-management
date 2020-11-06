'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ref_id: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      date_from: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_to: {
        allowNull: false,
        type: Sequelize.DATE
      },
      amount: {
        allowNull: true,
        type: Sequelize.DECIMAL(13,2)
      },
      pay_due_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pay_due_amount: {
        allowNull: true,
        type: Sequelize.DECIMAL(13,2)
      },
      paid_status: {
        allowNull: true,
        type: Sequelize.SMALLINT
      },
      payment_date_time: {
        allowNull: true,
        type: Sequelize.DATE
      },
      usage: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      payment_response: {
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
    return queryInterface.dropTable('invoices');
  }
};