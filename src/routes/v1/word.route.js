const WordController = require('../../controllers/word.controller');
const validate = require('../../middlewares/validate');
const schemas = require('../../validations/user.validation');

const express = require('express');
const router = express.Router();

router.get('/get-quiz', WordController.getWords);

module.exports = router;