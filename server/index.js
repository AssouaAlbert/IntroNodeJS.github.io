const express = require("express");
// Create the new server
const app = express();
//Import body-parser
const bodyParser = require('body-parser');
//Import the modules from the route folder
const routes = require("./routes");
//Before telling the engine where rhe recources will be stored,first we require the path
const path = require("path");
//Import the configurations
const configs = require("./config");
// Filter the current environment developement or production
//app.get['env'] will return "developement" or "production based on the server" e.g. in webpack --mode development or --mode production 
const config = configs[app.get('env')];
//Tell the server that we will use pug (Enable pug)
app.set('view engine', 'pug');
//Import the database connection
const db = require('./config/database');
//Create a connection
db.authenticate()
    .then(()=>console.log('Database Connected'))
    .catch((e)=>console.log("Error: ", e))

//Tell express where the views are going to be saved
app.set("views", path.join(__dirname,"./views"));
//load the assets folder
//public is the name of the folder public
app.use(express.static('public'))
//Get year from users computer
app.use((req,res,next) => {
    const date = new Date().getFullYear();
    //locals is a property in the response object
    res.locals.currentYear = date;
    console.log('date: ', date);
    //this will continue running the next function... ?
    return next();
});
//Parse the site name to the views
app.locals.siteTitle = config.siteName;
// Listen for the homepage
/**
 * This code has been move to the index.js file ins the route folder
 * Is is for distribution of concern
 * app.use('/', (req, res) => {
    res.send("Hello World in NodJS");
});
 */
app.use(bodyParser.urlencoded({extended: true}));
//Execute the funtion the routes folder
app.use('/',routes);


// Run the application
app.listen(3000);
/**
 * app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 * this line can still be used to replace the one at the top 
 * port: 3000
 * and after every change console log...
 */