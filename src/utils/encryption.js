const CryptoJS = require('crypto-js');

const secretKey = process.env.SECRET_KEY;

const encrypt = (text) => {
    const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString();
    return cipherText;
}

module.exports = {
    encrypt,
}