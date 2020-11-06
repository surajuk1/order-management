'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn(
				'users',
				'plan_period',
				{
					type: Sequelize.TEXT,
					allowNull: true,
				},
			),
			queryInterface.addColumn(
				'users',
				'plan_id',
				{
					type: Sequelize.INTEGER,
					defaultValue: 1,
					allowNull: false,
				},
			),
			queryInterface.addColumn(
				'users',
				'plan_start_date',
				{
					type: Sequelize.DATE,
					allowNull: true,
				},
			)
		]); 
	},
	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn(
				'users',
				'plan_period',
				{
					type: Sequelize.TEXT,
					allowNull: true,
				},
			),
			queryInterface.addColumn(
				'users',
				'plan_id',
				{
					type: Sequelize.INTEGER,
					defaultValue: 1,
					allowNull: false,
				},
			),
			queryInterface.addColumn(
				'users',
				'plan_start_date',
				{
					type: Sequelize.DATE,
					allowNull: true,
				},
			)
		]);
	}
};