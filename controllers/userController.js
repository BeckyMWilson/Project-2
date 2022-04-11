
const db = require("../models/user");

module.exports = function () {
  return {
    getAllUser: function (req, res) {
      db.findAll().then(function (userData) {
        console.log("GET all users", userData)
        res.json(userData);
      });
    },
    getSingleUser: function (req, res) {
      db.findOne({ where:{ id: req.params.userid}}).then(function (userData) {
        console.log("GET all users", userData)
        res.json(userData);
      });
    },
    newUser: function (req, res) {
      db.create(req.body).then(function (userData) {
        console.log("GET all users", userData)
        res.json(userData);
      });
    },
  }
}