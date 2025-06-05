const mongoose=require("mongoose");

// all you need for connecting to the mongoose cluster but this is not a good way
//mongoose.connect("mongodb+srv://ctyagi:j3Gdo1f5Oc6WiU32@cluster-devtinder.l2xbnfv.mongodb.net/")

const connectDB=async()=>{
  await mongoose.connect("mongodb+srv://ctyagi:j3Gdo1f5Oc6WiU32@cluster-devtinder.l2xbnfv.mongodb.net/devTinder");

};
module.exports=connectDB;
// connectDB().then(()=>{
//     console.log("Database connection established...")    
// }).catch(err=>{
//     console.error("Databse cannot be connected!!");

// })

