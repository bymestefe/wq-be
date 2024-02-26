module.exports = {
	up: (queryInterface, Sequelize) =>
	  queryInterface.createTable('words', {
		id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  primaryKey: true,
		  autoIncrement: true,
		},
		english_word: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  unique: true,
		},
		explanation: {
		  type: Sequelize.TEXT,
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
		  allowNull: false,
		},
		startswith: {
		  type: Sequelize.STRING,
		  allowNull: false,
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
  