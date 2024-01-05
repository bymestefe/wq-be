const { checkPassword } = require('../utils/passHelper');
const TokenHelper = require('../utils/tokenGenerator');
const { getUserByIdentifier } = require('../services/user.service');

async function login(identifier, password) {

    const user = await getUserByIdentifier(identifier);

    if (!user) {
        return Promise.reject(new Error('User not found!'));
    }

    const isPasswordMatch = await checkPassword(password, user.password);

    if (!isPasswordMatch) {
        return Promise.reject(new Error('Invalid password!'));
    }

    user.tokens = {
        access_token: TokenHelper.generateAccessToken(),
        refresh_token: TokenHelper.generateRefreshToken()
    }
    
	delete user.password;

	return user;
}


module.exports = {
    login,
}