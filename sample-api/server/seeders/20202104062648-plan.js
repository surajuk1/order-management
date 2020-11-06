module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('plan', [{
        title: 'Free Plan',
        description: '10 GB Storage Space',
        plan_byte:10000000000,
        plan_byte_text:'10 GB',
        plan_amount:0.00,
        plan_discount:0,
        status: 1
      },
      {
        title: 'Paid Plan',
        description: '100 GB Storage Space',
        plan_byte:100000000000,
        plan_byte_text:'100 GB',
        plan_amount:25.00,
        plan_discount:0,
        status: 1
      },
      {
        title: 'Paid Plan',
        description: '200 GB Storage Space',
        plan_byte:200000000000,
        plan_byte_text:'200 GB',
        plan_amount:30.00,
        plan_discount:0,
        status: 1
      },
      {
        title: 'Paid Plan',
        description: '500 GB Storage Space',
        plan_byte:500000000000,
        plan_byte_text:'500 GB',
        plan_amount:50.00,
        plan_discount:0,
        status: 1
      },
      {
        title: 'Paid Plan',
        description: '1 TB Storage Space',
        plan_byte:10000000000000,
        plan_byte_text:'1 TB',
        plan_amount:90.00,
        plan_discount:0,
        status: 1
      }
      ], 
      {
        underscored: true,
        freezeTableName: true,
        tableName: 'plan'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('plan', null, {});
  }
};