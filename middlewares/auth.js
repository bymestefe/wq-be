const JWT = require('jsonwebtoken');
const respHelper = require('../utils/responseHelper');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) return respHelper.unauthorized(res, 'Token is not exists');

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return respHelper.unauthorized(res, 'Forbidden');
        req.user = user
        next()
    })
}

module.exports = {
    authenticateToken
}