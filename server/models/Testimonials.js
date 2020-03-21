const Sequelize = require('sequelize');
//Import the database connection
const db = require('../config/database');

//Query databse 
module.exports =  Testimonials = db.define(`testimonials`,{
    name: {
            type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING            
    },
    testimony: {
            type: Sequelize.STRING
    }
});