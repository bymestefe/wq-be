//const httpStatus = require('http-status')
const { createUser } = require('../services/user.service');
const { login } = require('../services/auth.service');
const respHelper = require('../utils/responseHelper');

const signUp = async (req, res) => {
    try {
        const { fullname, username, email, password } = req.body
        let result  = await createUser( fullname, username, email, password );
        return respHelper.created(res, result, 'User created succesfully');
       
    } catch (error) {
        return respHelper.conflict(res,error.message);
    }
}

const signIn = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        const user = await login(identifier, password);
        
        return respHelper.success(res, user, 'User signed in successfully');
    } catch (error) {
        return respHelper.unauthorized(res, error.message);
    }
};

module.exports = {
    signUp,
    signIn,
}