const crypto = require('crypto');

const secretKey = process.env.SECRET_KEY;

const encrypt = (text) => {
    const key = Buffer.alloc(32, secretKey, 'utf-8');
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

module.exports = {
    encrypt,
}