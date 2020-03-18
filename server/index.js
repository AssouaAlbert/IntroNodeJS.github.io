const express = require("express");
const routes = require("./routes");

// Create the new server
const app = express();
//Before telling the engine where rhe recources will be stored,first we require the path
const path = required("path");


//Tell the server that we will use pug (Enable pug)
app.set('view engine', 'pug');

//Tell express where the views are going to be saved
app.set("views", path.join(__dirname,"./views"));

// Listen for the homepage
/**
 * This code has been move to the index.js file ins the route folder
 * Is is for distribution of concern
 * app.use('/', (req, res) => {
    res.send("Hello World in NodJS");
});
 */
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