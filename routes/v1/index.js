const authRoute = require('./user.route');
const testRoute = require('./test.route');
const express = require('express');

const router = express.Router();

router.use('/', authRoute);
router.use('/', testRoute);

module.exports = router;