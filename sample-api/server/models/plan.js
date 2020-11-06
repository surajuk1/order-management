'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('plan', {
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      plan_byte: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      plan_byte_text: {
        allowNull: false,
        type: DataTypes.STRING
      },
      plan_amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(50,2)
      },
      plan_discount: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
  },{
    underscored: true,
    freezeTableName: true,
    tableName: 'plan'
  });

  Plan.associate = (models) => {
    // associations can be defined here
  };
  return Plan;
};