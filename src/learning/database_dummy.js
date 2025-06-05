
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb+srv://ctyagi:j3Gdo1f5Oc6WiU32@cluster-devtinder.l2xbnfv.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'TestDB';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data={
    "firstname":"Teddy",
    "lastname":"Aziz",
    "city":"Sagar"
  }
  
const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);
  
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

const countResult=await collection.countDocuments({});
console.log(countResult);

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//j3Gdo1f5Oc6WiU32
//const URI="mongodb+srv://ctyagi:j3Gdo1f5Oc6WiU32@cluster-devtinder.l2xbnfv.mongodb.net/"

//Go to mongoDB website
//Create a free M0 cluster
//Create a user
//Get the connection String
//Install MongoDB compass
//Create a connection from code
//Document's CRUD- Create, Read, Update , Delete





