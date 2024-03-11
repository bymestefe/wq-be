module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define('word', {
      english_word: DataTypes.STRING,
      explanation: DataTypes.STRING,
      spanish_translation: DataTypes.STRING,
      french_translation: DataTypes.STRING,
      german_translation: DataTypes.STRING,
      italian_translation: DataTypes.STRING,
      portuguese_translation: DataTypes.STRING,
      turkish_translation: DataTypes.STRING,
      level: DataTypes.INTEGER,
      startswith: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
        allowNull: false,
      },
    }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    return Word;
  };