const Sequelize = require('sequelize')

const sequelizeInstance = new Sequelize(process.env.CONNECTION_STRING);

module.exports= {
    sequelizeInstance
}