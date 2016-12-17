// Standard stuff

const express = require("express");
const app = express();
const {json} = require("body-parser");
const cors = require("cors");
const port = 8700;
app.use(cors());
app.use(json());

// Mongoose

// Mongoose is like Massive for SQL.
const mongoose = require("mongoose");

// Mongoose connection
  //  For a local connection 
  // const mongoUri = "mongodb://localhost:27017/database_name"
      // 27017 is default local port for mongo.

  // mLab connection: 
  const mongoUri = "mongodb://root:<password>@ds019033.mlab.com:19033/instagram-test"

mongoose.connect(mongoUri);

// That's really all you need, but I like to log the db connection.
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${mongoUri}`));

// Route your app.whatever requests by feature
require("./mainRoutes.js")(app);

app.listen(port, () => {console.log(`Express is listening on port ${port}`)});
