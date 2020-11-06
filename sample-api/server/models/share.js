'use strict';
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('share', {
    folder_file_id: {
    	type: DataTypes.BIGINT,
		allowNull: false,
    },
    type: {
    	type: DataTypes.SMALLINT,
		allowNull: false,
    },
    share_type: {
    	type: DataTypes.CHAR,
		allowNull: false,
    },
    share_users: {
    	type: DataTypes.STRING,
		allowNull: true,
    },
    share_period: {
    	type: DataTypes.STRING,
		allowNull: true,
    },
    share_link: {
    	type: DataTypes.STRING,
		allowNull: true,
    },
    share_email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    share_status: {
    	type: DataTypes.CHAR,
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
    tableName: 'share'
  });
  Share.associate = function(models) {
    // associations can be defined here
  };
  return Share;
};