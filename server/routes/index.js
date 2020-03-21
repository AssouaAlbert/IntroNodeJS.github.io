const express = require("express");
const router = express.Router(); // router will contain all the methods that the express router provides
//Above: Export this function as a module to be used in another file
//Import modules 
const Travels = require('../models/Travels');

//Home page url
router.get('/home', (req, res) => {
    res.render("index");
});
router.get('/', (req, res) => {
    res.render("index",{
        pageTitle : "Home"
    });
});
//About us page
router.get('/aboutus', (req, res) => {
    res.render("about", {
        pageTitle : "About Us"
    });
});
//Testimonials
router.get('/testimonials', (req, res) => {
    res.render("testimonials", {
        pageTitle : "Testimonials"
    });
});
    //Travels
router.get('/travels', (req, res) => {
    Travels.findAll()
    .then((response)=>{
        res.render("travels", {
            pageTitle : "Travels",
            response //since the key and value are thesame you can parse the two
        });
    })
});
router.get('/travel/:id', (req, res) => {
    Travels.findByPk(req.params.id)
        .then((response)=>{
            res.render("travel",{
                pageTitle: response.title,
                response //Send the response to the view
        });
    });
});
//Handle form submittion with post
router.post('/testimonials', (req, res)=>{
    //For this code to work you will need to insert the obody parsers
    console.log(req.body); //Without body parser this will return undefine
})


module.exports = router;