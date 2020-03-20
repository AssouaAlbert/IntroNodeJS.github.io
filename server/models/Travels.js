const Sequelize = require('sequelize');
//Import the database connection
const db = require('../config/database');

//Tell sequelize what is the name of the table where the model belongs
//db.define('table name', {columns:})
const Travel = db.define('travels',{
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    departure_date: {
        type: Sequelize.DATE
    },
    return_date: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.STRING
    },
});

module.exports = Travel;