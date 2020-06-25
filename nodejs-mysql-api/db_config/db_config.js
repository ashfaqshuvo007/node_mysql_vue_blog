const env = require('./env')

//Sequelize connection Setup
const Sequelize = require('sequelize')

//DB Connection
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle,
    }

})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//Model/Table
db.users = require('../model/user.model')(Sequelize, sequelize)

module.exports = db