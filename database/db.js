const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('sportsappdatabase', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  // operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Need to establish DB Relationship here when we get it working , but  for now I have my FKs created already within my DB manually
module.exports = db;
