// getting started
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/amberkart");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected
  console.log("We are connected to the MongoDB");
});
// tut-86 Using Mongoose in NodeJs

// Schema simply tells us what type of data the user wants to store. Here, we are going to take an example of a kitten schema as follows-
var kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function () {
    var greeting = " My name is " + this.name
    console.log(greeting);
  }

/**Till now we have designed a schema. It is a type of layer on top of Mongo in MongoDb which controls all
 * the data fed into it. Once we made a schema, you’ll be asked to lock it into a process. Once locked, we
 * cannot make changes to it because it is now converted to a model. The kitten schema is now converted into
 *  a kitten model. The basic difference between schema and model is, schema lets you know which field is to be
 * assigned and model is the final compiled schema.
Once we have complied the schema to the object, we can make the objects. Let us see an example here- */

var kitten =  mongoose.model('amberkitty', kittySchema);

var amberkitty = new kitten({ name: 'amberKitty' });
var amberkitty2 = new kitten({ name: 'amberKitty2' });
// console.log(amberkitty.name); // 'amberKitty'
// amberkitty.speak();   //Node.Js works according to a non-blocking model which means all the code will run from top to bottom and all the callbacks will run at last.
/* Output will be - My name is amber

/**
1. `var amberkitten = new kitten({ name: 'amberKitty' });`
   - This line creates a new instance of the `kitten` model that you previously defined.
   - `new kitten()` creates a new object based on the schema you provided.
   - The object being created has a property `name` with the value `'amberKitty'`.
   - This newly created object is assigned to the variable `amberkitten`.

2. `console.log(amberkitten.name); // 'amberKitty'`
   - This line prints the value of the `name` property of the `amberkitten` object to the console.
   - `amberkitten.name` accesses the `name` property of the `amberkitten` object.
   - In this case, it will print `'amberKitty'` to the console, as that is the value we assigned to the `name` property when creating the `amberkitten` object. */


   /* We have not saved the data till now in the database. To do this, we have to explicitly tell the mongoose that we are going to store the data. We can also add a method before saving into the database as follows- */

// Now to save this code, we will take the help of save method as follows-


  amberkitty.save()
  .then(savedKitty => {
    savedKitty.speak();
  })
  .catch(err => {
    console.error(err);
  });

  amberkitty2.save()
  .then(savedKitty => {
    savedKitty.speak();
  })
  .catch(err => {
    console.error(err);
  });

// The save() function takes two parameters- error and object. The question arises where this data is saved. It automatically gets saved in the new file with the name plural of the object name that is created. 

/**amberkitty.save(function (err, amberkitty) {
    if (err) return console.error(err);
    amberkitty.speak();
  }); //this  query will not work:
It seems like there's an issue with the save() method callback. In recent versions of Mongoose, the save() method no longer accepts a callback function directly. Instead, it returns a promise, or you can use the async/await syntax. */

// kitten.find({name: "amberkitty"}, function(err, kittens){
//     if(err) return console.error(err);
//     console.log(kittens);
// }) // if you'lll run this will not work and gives you error
/**
It seems like you're encountering another error related to the find() method. Similar to the save() method, the find() method also no longer accepts a callback function directly. Instead, it returns a promise, or you can use the async/await syntax. */


kitten.find({ name: "amberKitty" })
  .then(kittens => {
    console.log(kittens);
  })
  .catch(err => {
    console.error(err);
  });

  /** the above code is to retrieve documents from the MongoDB database where the name field matches "amberKitty", and then log those documents to the console if the query is successful. If there's an error during the execution of the query, it logs the error instead. This is a common pattern for interacting with databases in Node.js applications, providing a way to handle both successful and failed database operations gracefully.  */


  /** so baiscaly in this code, we're setting up a connection to a MongoDB database using Mongoose, a popular Node.js library for MongoDB.

Firstly, we establish a connection to the MongoDB server running locally on the default port. We define a schema for our data model, kittySchema, which specifies that each document in the collection will have a name field of type String. Additionally, we define a method speak on the schema to add functionality to each document.

Then, we create a Mongoose model kitten based on the kittySchema, specifying that it corresponds to a collection named "amberkitty" in the database. We create two instances of the kitten model, amberkitty and amberkitty2, each with a different name.

Next, we save both amberkitty and amberkitty2 to the database using the save() method. Instead of using callbacks, we utilize promises to handle successful saves by logging a message using the speak() method defined earlier, and any errors are caught and logged to the console.

Finally, we use the find() method to query the database for documents where the name field matches "amberKitty". We handle the result of the query by logging the retrieved documents to the console if the query is successful, or logging any errors if the query encounters an issue.

Overall, this code sets up a connection to a MongoDB database, defines a schema and model for storing data, saves data to the database, and retrieves data from the database, all using Mongoose and Node.js. */