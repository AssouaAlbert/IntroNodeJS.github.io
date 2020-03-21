const express = require("express");
const router = express.Router(); // router will contain all the methods that the express router provides
//Above: Export this function as a module to be used in another file
//Import modules 
const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials')


//Home page url
router.get('/home', (req, res) => {
    res.render("index");
});
router.get('/', (req, res) => {
    Travels.findAll({limit: 3})
    .then((travels)=>{
        res.render("index",{
            pageTitle : "Home",
            className : 'home',
            travels
        });
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
    // Find testimonials and render them on the page
    Testimonials.findAll()
        .then((testimonials)=>{
            res.render("testimonials", {
                pageTitle : "Testimonials",
                testimonials
            });
        })
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
// app.use(bodyParser.urlencoded({extended: true})); //This is in app.js
router.post('/testimonials', (req, res)=>{
    //For this code to work you will need to insert the obody parsers
    console.log(req.body); //Without body parser this will return undefine
    //Validate the form
    let errors =[];
    let {name,email,testimony} = req.body;
    if(!(/[^A-Za-z0-9_'-]/gi.test(name))){
        console.log("Name is wrong");
        errors.push({message:'Enter real name'})

    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        console.log("Email is wrong");
        errors.push({message:'Add Email'})

    }
    if(!testimony){
        console.log("Email is wrong");
        errors.push({message:'Add Testimony'})

    }
    //Therefore there are errors
    if(errors.length>0){
        Testimonials.findAll()
        .then((testimonials)=>{
        //Display the errors on the testimonial page
        res.render("testimonials", {
            pageTitle : "Testimonials",
            errors,
            name,
            email,
            testimony,
            testimonials
        })});
    }
    else{
        // Insert data into the database
        Testimonials.create({name,email,testimony})
            .then(()=>{ //Get the response and redirect the site 
                res.redirect('/testimonials')
            })
            .catch(e=>console.log("Error:", e))
    }
})


module.exports = router;