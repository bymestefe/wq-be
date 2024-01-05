module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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
    hooks: {
      beforeValidate: (user) => {
        user.username = user.username.toLowerCase();
        user.email = user.email.toLowerCase();
      },
    },
  });

  return User;
};