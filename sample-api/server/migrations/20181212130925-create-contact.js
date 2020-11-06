'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      file_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      thumbnailpath: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      hasThumbnail: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      phonenumbers: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      note: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      recordid: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      jobtitle: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      rawcontactid: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      familyname: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      middlename: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      prefix: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      suffix: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      company: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      givenname: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      department: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      check: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue: 'A',
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
    return queryInterface.dropTable('contact');
  }
};