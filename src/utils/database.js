const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const env = 'development'
const config = require(__dirname + '/../config/config.json')[env]
const modelsDir = path.resolve(__dirname + '/../models')

let Database = {

    addSequelizeConnectionToRepo: (dbRepo, dbName) => {
        const db = {}

        let sequelize
        if (dbName === 'default') {
            sequelize = new Sequelize(config.database, config.username, config.password, config,{
                logging: false,
            });
            
        } else {
            sequelize = new Sequelize(dbName, config.username, config.password, config,{
                logging: false,
            });
        }
        fs
            .readdirSync(modelsDir)
            .filter(file => {
                return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js')
            })
            .forEach(file => {
                const model = require(path.join(modelsDir, file))(
                    sequelize,
                    Sequelize.DataTypes
                )
                db[model.name] = model
            })

        Object.keys(db).forEach(modelName => {
            if (db[modelName].associate) {
                db[modelName].associate(db)
            }
        })

        sequelize.sync({ force: false })

        db.sequelize = sequelize
        db.Sequelize = Sequelize

        dbRepo[dbName] = db
        return dbRepo
    }
}

module.exports = Database