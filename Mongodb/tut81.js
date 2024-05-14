// inserting data in to mongodb
use amberkart

// making collection
db.items.insertOne({name: "Realme C51", price: 30000, rating: 4.5, qty: 290, sold: 90})

// However, we can include many documents inside it.Now we will see how we can insert multiple documents. For this, we will use the function known as insertMany. We can insert different arrays in this separated with comma

db.items.insertMany([
    {name: "Realme C51", price: 30000, rating: 4.5, qty: 290, sold: 90},
    {name: "Samsung Galaxy S20", price: 80000, rating: 4.8, qty: 150, sold: 120},
    {name: "iPhone 12", price: 90000, rating: 4.9, qty: 100, sold: 80}
 ])

/**To see the whole list of documents written by me, we can write- db.items.find(). The data stored in the data directory will never get deleted until you do it manually. The process takes up the commands one by one and stores it in the data.

If we paste the objects created by me in the powershell and run the command db.items.find(), */

/**Both the objects that I have created are stored in the database with different id’s irrespective of having the same. The data persist like this in our MongoDb database. */