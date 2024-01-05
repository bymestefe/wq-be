
const testController = require('../../controllers/test.controller');
const validate = require('../../middlewares/validate');
const schemas = require('../../validations/user.validation');
const {authenticateToken} = require("../../middlewares/auth")

const express = require('express');
const router = express.Router();

router.post('/test', validate(schemas.loginValidation), authenticateToken, testController.exampleMethod);

module.exports = router;