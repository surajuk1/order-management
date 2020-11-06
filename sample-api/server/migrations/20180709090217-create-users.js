module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        unique: true,
      },
      full_name: {
        type:Sequelize.STRING(100),
        allowNull:true,
      },
      user_name: {
        type:Sequelize.STRING(120),
        allowNull: false,
        unique: true,
      },
      reg_type: {
        type:Sequelize.STRING(10),
        allowNull: true,
      },
      email: {
        type:Sequelize.STRING(100),
        allowNull: true,
       // unique: true,
      },
      password: {
        type:Sequelize.STRING(150),
        allowNull: false,
      },
      // dob: {
      //   type: Sequelize.DATE,
      //   allowNull: true,
      // },
      gender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      mobile_country_code: {
        type: Sequelize.STRING(5),
        allowNull: true,
      },
      mobile: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      account_type:{
        type:Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5,
      },
      profile_pic: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      profile_pic_thumb: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      account_balance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      subscription_plan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('users'),
};

