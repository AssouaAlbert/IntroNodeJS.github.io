//Import modules
const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials');

exports.homeController = (req, res) => {
    //Alternative 
    // const promise = [];
    // promise.push(Travels.findAll({limit: 3}));
    // promise.push(Testimonials.findAll({limit: 3}));
    // const result = Promises.all(promise);
    // result.then(result=>{
    //     res.render("index",{
    //         pageTitle : "Home",
    //         className : 'home',
    //         travels : result[0],
    //         testimonials: result[1]
    // });
    // });
    Travels.findAll({limit: 3})
    .then((travels)=>{
        Testimonials.findAll({limit:3})
        .then((testimonials)=>{
            res.render("index",{
                pageTitle : "Home",
                className : 'home',
                travels,
                testimonials
            });
        });
    })
    .catch(e=>console.log("Error: ", e))
}