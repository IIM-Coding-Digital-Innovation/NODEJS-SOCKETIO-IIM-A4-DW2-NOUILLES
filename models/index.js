'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
//const config = require('/config/config.json')[env];

const {Post, Author} = require('/models');

let sequelize;
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false }
    }
});

module.exports = sequelize;