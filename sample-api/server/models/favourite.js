'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favourite = sequelize.define('favourite', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    folder_file_id: {
    	type: DataTypes.BIGINT,
		allowNull: false,
    },
    type: {
    	type: DataTypes.BIGINT,
		allowNull: false,
    },
    user_id: {
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
    tableName: 'favourite'
  });
  Favourite.associate = function(models) {
    // associations can be defined here
  };
  return Favourite;
};