const bcrypt = require('bcrypt');

const hashPassword = async function(pass) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(pass, salt);
    return hashedPassword;
};

const checkPassword = async function(input, hashedPass) {
    const match = await bcrypt.compare(input, hashedPass);
    return match;
};

module.exports = {
    hashPassword,
    checkPassword
}