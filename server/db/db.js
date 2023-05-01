const Sequelize = require('sequelize');
console.log('opening database connection...');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/firebase-boilerplate',
  {
    logging: false,
  }
);

module.exports = db;
