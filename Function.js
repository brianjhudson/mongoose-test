// Require mongoose so you can use its Schema and model properties

const mongoose = require('mongoose');

// Define the schema--this will allow you to define the data coming in 
// MongoDB doesn't perform any kind of data validation ,so mongoose is 
// providing the bridge between SQL and MongoDB here. 
// For our purposes, it just lets us define a function.
const Function = mongoose.Schema ({
    // Mongo auto-assigns an id, so you don't include it here

})