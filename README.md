# Tutorial for Mongo and Mongoose

The comments in the files should be fairly self-explanatory, but here's the basic flow:

Inside the server (index.js), I connect mongoose. You'll need to change the password. 

The server passes the express app to the mainRoutes.js file.

The mainRoutes passes the app to the feature routes.

The feature routes contain endpoints and call controller functions.

The controller imports the User (mongoose) schema and uses the schema to perform CRUD operations.

The schema file defines the data types of the schema and exports it to a model. (There's a slight difference, but we probably don't need to go into it right now.)

For more info, ask me (obviously), and check out two docs: MongoDB and Mongoose. Mongoose is adapting the form of native MongoDB operations a little to fit node. 

Good luck!