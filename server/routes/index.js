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
router.post('/testimonials', testimonialsController.postTestimonial)


module.exports = router;