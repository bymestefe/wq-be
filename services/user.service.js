const { hashPassword } = require('../utils/passHelper');
const TokenHelper = require('../utils/tokenGenerator');
const UserRepository = require('../repositories/user.repo');

const createUser = async (fullname, username, email, password) => {

        password = await hashPassword(password);

        tokens = {
            access_token: TokenHelper.generateAccessToken(),
            refresh_token: TokenHelper.generateRefreshToken()
        }

        existingEmailUser = await getUserByEmail(email);
        if (existingEmailUser) {
            return Promise.reject(new Error('There is a user with this email!'));
        }

        existingUsernameUser = await getUserName(username);
        if (existingUsernameUser) {
            return Promise.reject(new Error('There is a user with this username!'));
        }

        const result = await UserRepository.insert(fullname, username, email, password);
        result.tokens = tokens;
        delete result.password;
        return result;
}

const getUserByEmail = async (email) =>{
    let params = {
        email: email
    };
    return await UserRepository.getByFields(params);

}

const getUserName = async (username) =>{
    let params = {
        username: username
    };
    return await UserRepository.getByFields(params);

}

const getUserByIdentifier = async (identifier) => {
    let user;
    if (identifier.includes('@')) {
        user = await getUserByEmail(identifier);
    } else {
        user = await getUserName(identifier);
    }
    return user;
};


module.exports = {
    createUser,
    getUserByIdentifier
}