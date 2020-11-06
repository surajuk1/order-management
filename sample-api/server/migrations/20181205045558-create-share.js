'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('share', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      folder_file_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      share_type: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      share_email: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      share_users: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      share_period: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      share_link: {
        type: Sequelize.STRING(120),
        allowNull: true,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      share_status: {
        type: Sequelize.CHAR(1),
        defaultValue: 'A',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('share');
  }
};