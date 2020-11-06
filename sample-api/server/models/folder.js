'use strict';
module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define('folders', {
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
      enc_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      parent: {
        type: DataTypes.BIGINT,
      },
      category: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.CHAR,
        defaultValue: 'A',
      },
      ref: {
        type: DataTypes.BIGINT,
        allowNull: true,
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
    tableName: 'folders'
  });
  Folder.associate = function(models) {
    // associations can be defined here
  };
  return Folder;
};