const authRoute = require('./user.route');
const testRoute = require('./test.route');
const wordRoute = require('./word.route');
const express = require('express');

const router = express.Router();

router.use('/', authRoute);
router.use('/', testRoute);
router.use('/', wordRoute);

module.exports = router;