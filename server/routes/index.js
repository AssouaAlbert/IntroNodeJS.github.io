const express = require("express");
const router = express.Router(); // router will contain all the methods that the express router provides
//Above: Export this function as a module to be used in another file
//Import modules -> Moveto the cotroler folder
// const Travels = require('../models/Travels');
// const Testimonials = require('../models/Testimonials');
//Import Controllers
const aboutController = require('../controllers/aboutController.js');
const testimonialsController = require('../controllers/testimonialsController.js');
const travelsController = require('../controllers/travelController');
const homeController = require('../controllers/homeController.js')

//Home page url
router.get(['/','/home'],homeController.homeController);
//About us page
router.get('/aboutus',aboutController.aboutController);
//Testimonials
router.get('/testimonials', testimonialsController.testimonialsController);
//Travels
router.get('/travels',travelsController.travelsController);
router.get('/travel/:id', travelsController.travelController);
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