exports.testimonialsController = (req, res) => {
    // Find testimonials and render them on the page
    Testimonials.findAll()
        .then((testimonials)=>{
            res.render("testimonials", {
                pageTitle : "Testimonials",
                testimonials
            });
        })
}