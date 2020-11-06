'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      org_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      enc_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storage_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent_directory: {
        type: DataTypes.BIGINT,
      },
      file_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file_size: {
        type: DataTypes.BIGINT
      },
      status: {
        type: DataTypes.CHAR,
        defaultValue: 'A',
      },
      is_contact: {
        type: DataTypes.CHAR,
        defaultValue: 'N',
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
    tableName: 'files'
  });
  File.associate = function(models) {
    // associations can be defined here
  };
  return File;
};