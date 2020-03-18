const express = require("express");
const routes = require("./routes");

// Create the new server
const app = express();


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