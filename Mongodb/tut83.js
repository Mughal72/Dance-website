// Deleting data from the Mongo Database 

show dbs 
use amberkart
show collections

db.items.find({price: 22000})
/**To make you understand better, the process of deleting the item from a database is a bit similar to that of searching. It is because the syntax of deleting is almost similar to that of searching. */
// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 129000})

// The deleteOne() function will delete the first item among the list of multiple items that matches with the query.