// Inside a feature, we use routes and controllers to split up endpoints
// and the functions we run.

const userCtrl = require('./userCtrl');

module.exports = app => {
     app.post('/users', userCtrl.createUser);
     app.get('/users', userCtrl.getUsers);
     app.put('/users', userCtrl.updateUser);
     app.delete('/users', userCtrl.deleteUser);
}