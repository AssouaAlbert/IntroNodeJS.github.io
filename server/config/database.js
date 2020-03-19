//Here we have all the methods and one of them is the connections
const Sequelize = require('sequelize');
//Create a new connection into the database
/**
 * Windows:
 * const sequeslize = new Sequeslize('ravelagency', 'root', '' [,{options}])
 * Mac:
 * const sequeslize = new Sequeslize('ravelagency', 'root', 'root')
 * **Except you define the user name and password for the database
 */
module.exports = new Sequelize('travelagency', 'root', '', {
    //host: 127.0.0.1 || 'localhost'
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
          timestamps: false //Will detect when you update a database
      },
      operatorsAliases: false, //Remove wwarning

});
