
const authController = require('../../controllers/auth.controller');
const validate = require('../../middlewares/validate')
const schemas = require('../../validations/user.validation')

const express = require('express');
const router = express.Router();

router.post('/signup', validate(schemas.createValidation), authController.signUp);
router.post('/signin', validate(schemas.loginValidation), authController.signIn);

module.exports = router;