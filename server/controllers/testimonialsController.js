exports.testimonialsController = async (req, res) => {
    // Find testimonials and render them on the page
   const testimonials = await Testimonials.findAll()
    res.render("testimonials", {
        pageTitle : "Testimonials",
        testimonials
    });
}
exports.postTestimonial = async (req, res)=>{
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
        const testimonials  = await Testimonials.findAll();
        //Display the errors on the testimonial page
        res.render("testimonials", {
            pageTitle : "Testimonials",
            errors,
            name,
            email,
            testimony,
            testimonials
        });
    }
    else{
        // Insert data into the database
        Testimonials.create({name,email,testimony})
            .then(()=>{ //Get the response and redirect the site 
                res.redirect('/testimonials')
            })
            .catch(e=>console.log("Error:", e))
    }
}