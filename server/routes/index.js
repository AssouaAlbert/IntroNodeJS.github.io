const express = require('express');
const router = express.Router(); // router will contain all the methods that the express router provides

//Export this function as a module to be used in another file

module.exports = function () {
    //Home page url
    router.use('/', (req, res) => {
        res.send("Hello World in NodJS");
    });
}