module.exports = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define('refresh_tokens', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
     allowNull: false,
     unique: true,
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
    tableName: 'refresh_tokens'
  });

  RefreshToken.associate = (models) => {
    // associations can be defined here

  };
 

  return RefreshToken;
};