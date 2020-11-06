module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('clients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      
    },
    client_secret: {
      type: DataTypes.STRING,
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
    tableName: 'clients'
  });

  Client.associate = (models) => {
    // associations can be defined here

  };
 

  return Client;
};