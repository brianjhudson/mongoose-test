// We have to import our Schema so we can use that schema to look up documents.

const User = require('./User');

module.exports = {
     createUser: (req, res) => {
         const newUser = new User(req.body);
         newUser.save((err, user) => {
             if (err) return res.status(500).json(err);
             return res.status(200).json(user);
         })
     }, 

     getUsers: (req, res) => {
         User.find({}, (err, user) => {
             if (err) return res.status(500).json(err)
             return res.status(200).json(user);
         })
     },

     updateUser: (req, res) => {
         User.findOneAndUpdate({firstname: "El Toro"}, {$set: {firstname: "El Guapo"}}, {new: true}, (err, updatedUser) => {
             if (err) return res.status(500).json(err);
             return res.status(200).json(updatedUser);
         })
     },

     deleteUser: (req, res) => {
         User.findOneAndRemove({firstname: "El Guapo"}, (err, result) => {
             if (err) return res.status(500).json(err);
             return res.status(200).json(result);
         })
     } 
}