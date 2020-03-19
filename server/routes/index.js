const express = require("express");
const router = express.Router(); // router will contain all the methods that the express router provides

//Export this function as a module to be used in another file

//Home page url
router.get('/home', (req, res) => {
    res.render("index");
});
router.get('/', (req, res) => {
    res.render("index");
});
//About us page
router.get('/aboutus', (req, res) => {
    res.render("about");
});

module.exports = router;