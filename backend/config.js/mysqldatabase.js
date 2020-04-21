const sequelize = require('sequelize');

module.exports = new sequelize('library','root','',{
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: 0,
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})
