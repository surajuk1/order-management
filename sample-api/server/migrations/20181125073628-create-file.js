'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      org_name: {
        type: Sequelize.STRING(120),
        allowNull: true,
      },
      enc_url: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      storage_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parent_directory: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      file_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      file_size: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue: 'A',
      },
      is_contact: {
        type: Sequelize.CHAR(1),
        defaultValue: 'N',
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
    return queryInterface.dropTable('files');
  }
};