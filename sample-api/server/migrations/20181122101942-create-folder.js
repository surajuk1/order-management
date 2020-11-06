'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('folders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      enc_url: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(120),
        allowNull: true,
      },
      parent: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      category: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue: 'A',
      },
      id: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      ref: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      created_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
        // references:{
        //   model: "users",
        //   key: "id"
        // }
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
    return queryInterface.dropTable('folders');
  }
};