const Sequelize = require('sequelize');

const sequelize = new Sequelize('simple_crud', 'root', 'Munna@1106', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
