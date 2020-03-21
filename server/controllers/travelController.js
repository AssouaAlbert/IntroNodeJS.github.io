//Import modules
const Travels = require('../models/Travels');

exports.travelController = (req, res) => {
    Travels.findByPk(req.params.id)
        .then((response)=>{
            res.render("travel",{
                pageTitle: response.title,
                response //Send the response to the view
        });
    });
}
exports.travelsController = (req, res) => {
    Travels.findAll()
    .then((travels)=>{

        res.render("travels", {
            pageTitle : "Travels",
            travels //since the key and value are thesame you can parse the two
        });
    })
}