module.exports = {
	up: (queryInterface, Sequelize) =>
	  queryInterface.createTable('words', {
		id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  primaryKey: true,
		  autoIncrement: true,
		},
		word: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		definition: {
		  type: Sequelize.TEXT,
		},
		startswith: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		spanish_translation: {
		  type: Sequelize.STRING,
		},
		french_translation: {
		  type: Sequelize.STRING,
		},
		german_translation: {
		  type: Sequelize.STRING,
		},
		italian_translation: {
		  type: Sequelize.STRING,
		},
		portuguese_translation: {
		  type: Sequelize.STRING,
		},
		level: {
		  type: Sequelize.INTEGER,
		  allowNull: true,
		},
		created_at: {
		  type: Sequelize.DATE,
		  defaultValue: Sequelize.fn('NOW'),
		  allowNull: false,
		},
		updated_at: {
		  type: Sequelize.DATE,
		  defaultValue: Sequelize.fn('NOW'),
		  allowNull: false,
		},
	  }),
	down: (queryInterface /* , Sequelize */) =>
	  queryInterface.dropTable('words'),
  };
  