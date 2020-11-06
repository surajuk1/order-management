'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('contact', {
      file_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      thumbnailpath: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      hasThumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phonenumbers: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      note: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      recordid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobtitle: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      rawcontactid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      familyname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middlename: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      prefix: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      suffix: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      company: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      givenname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      check: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.CHAR(1),
        defaultValue: 'A',
      },
      created_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
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
    tableName: 'contact'
  });
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};