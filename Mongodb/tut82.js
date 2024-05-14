// Searching/Querying data from the Mongo Database
use amberkart

// this query will give all the object with rating 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte:3.5}})

// we can also use and operator to meet our query. The example is as follows-
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

// This code will give the list of all those items having ratings greater than 3.5 and having prices more than 4000.
// If we write as-
db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

/**We will get the output as the list of those items whose ratings are less than 3.5 and price more than 114000.

Till now you must have noticed that in the case of And operator, we have not used any symbol. But it is not the same in the case of Or. While using OR operator, we will use a dollar ‘$’ symbol as follows-
*/
db.items.find({
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}]

})

db.items.find({rating: {$gt: 3.5}}, {rating: 1})

