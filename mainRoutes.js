// This file is just a hub to pass all requests to the appropriate features.

const userRoutes = require('./features/users/userRoutes');

module.exports = app => {
    // Here we take in the express app and pass it to each feature route.
    userRoutes(app);
}