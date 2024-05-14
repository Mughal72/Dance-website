// getting started
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('opne', function(){
    // we're connected
    console.log("We are connected to the mongo")
});