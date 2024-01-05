const dbRepo = require('../models')
const User = dbRepo['wq'].user

const UserRepository = {

    getByFields: async (fields) => {
        const user = await User.findOne({
          where: fields,
        })
        .then((resultEntity) => resultEntity.get({ plain: true }));;
        return user;
    },

    insert: async (fullname, username, email, password) => {
        try {
            const result = await User.create({
                fullname,
                username, 
                email, 
                password, 
            })
            .then((resultEntity) => resultEntity.get({ plain: true }));

            return result
        } catch (error) {
            return Promise.reject(error);
        }
    },

    update: async (id, updatedFields) => {
        try {
          const user = await User.findByPk(id);
    
          if (!user) {
            return Promise.reject(new Error('User not found'));
          }

          const result = await user.update(updatedFields);
          return result;
          
        } catch (error) {
          return Promise.reject(error);
        }
      },
}

module.exports = UserRepository