// Require mongoose so you can use its Schema and model properties

const mongoose = require('mongoose');

// Define the schema--this will allow you to define the data coming in 
// MongoDB doesn't perform any kind of data validation ,so mongoose is 
// providing the bridge between SQL and MongoDB here. 
// For our purposes, it just lets us define a function.
const User = mongoose.Schema ({
  // Mongo auto-assigns an id, so you don't include it here.
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, default: "someone@someone.com"},
  rank: {type: Number},
  preference: {type: String, enum: ["choice1", "choice2"]},

  // And here's an array of strings:
  posts: [{type: String}],

  // Here's an object:
  location: {
    latitude: {type: Number},
    longitude: {type: Number}
  }

  // If I had other collections and wanted to refer to them:
  // otherProp: {type: mongoose.Schema.Types.ObjectId, ref: "OtherCollection"}

  // If I wanted an array of references to other collections: 
  // otherList: [{type: mongoose.Schema.Types.ObjectId, ref: "OtherCollection"}]  
})

// And finally, I export it. The naming convention is weird, but just follow it.
// You can pick a different name for your database, but why would you? 
module.exports = mongoose.model("User", User);

// Side note: Mongoose will cleverly turn User into the collection 'users.'
// But if you have a nonstandard plural nouns, it will get it wrong. 
// You can fix this, but it's not worth it usually.
