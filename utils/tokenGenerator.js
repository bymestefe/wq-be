const jwt = require('jsonwebtoken');

const TokenHelper = {
    generateAccessToken: (userId) => {
        const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' });
        return accessToken;
    },

    generateRefreshToken: (userId) => {
        const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET);
        return refreshToken;
    },

    verifyToken: (token, secret) => {
        return jwt.verify(token, secret);
    },
};

module.exports = TokenHelper;
