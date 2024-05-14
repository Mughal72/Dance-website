const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");

mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port = 8000;


// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

var Contact = mongoose.model('Contact', contactSchema);


// Express specific stuff
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded());

// pug specific stuff
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// Endpoints
app.get("/", (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get("/contact", (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

// Handle form submission
app.post("/contact", (req, res) => {
    const { name, phone, email, address, desc } = req.body;
    const newContact = new Contact({ name, phone, email, address, desc });
    newContact.save()
        .then(() => {
            res.status(200).send("Your message has been successfully submitted.");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("An error occurred while processing your request.");
        });
});

// start the server
app.listen(port, () => {
    console.log(`the application is running on port ${port}`);
});
