'use strict'
const dbConnector = require('../utils/database');

let dbRepo = {}

dbConnector.addSequelizeConnectionToRepo(dbRepo, 'wq');

console.log(dbRepo);
module.exports = dbRepo

