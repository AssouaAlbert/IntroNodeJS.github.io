const express = require('express');

// Create the new server
const app = express();



// Listen for the homepage
app.use('/', (req, res) => {
    res.send("Hello World in NodJS");
});


// Run the application
app.listen(3000);