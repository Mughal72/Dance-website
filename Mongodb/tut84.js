//Updating data from the Mongo Database

/**  The database needs to perform these minimum operations to compete in the market- CRUD (create, read, update, delete). Although we can perform many other operations like searching but the above listed four are the most important ones.
In this tutorial, we will focus on updating the file. Start by making a new file as tut84.js and write the basic code as follows-

show dbs
use amberkart
show collections **/

db.items.find()
// suppose we want to update the price of “Moto 30s” from 29000 to 2
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
// The updateOne() function is used to update only 1 item.
db.items.find()
// Now in the example, we are having four Realme 51”. We have to change the rating of all the three mobiles to 1. To do this, we can write as follows-
db.items.updateMany({name: "Realme C51"}, {$set: {price: 3, rating: 1}})