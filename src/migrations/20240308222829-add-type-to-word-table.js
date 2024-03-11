module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.addColumn('words', 'type', {
			type: Sequelize.STRING,
			allowNull: true,
		}),
	down: (queryInterface, Sequelize) =>
		queryInterface.removeColumn('words', 'type'),
};
  