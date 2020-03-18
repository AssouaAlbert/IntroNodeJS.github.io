const express = require("express");
const router = express.Router(); // router will contain all the methods that the express router provides

//Export this function as a module to be used in another file

module.exports = function () {
    //Home page url
    router.get('/', (req, res) => {
        res.send("Hello World in NodJS");
    });
    //About us page
    router.get('/aboutus', (req, res) => {
        res.send("about Us");
    });
}