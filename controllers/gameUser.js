const db = require("../models/Game");

module.exports = function () {
  return {
    getAllGames: function (req, res) {
      db.findAll().then(function (gamesData) {
        console.log("GET all game", gamesData)
        res.json(gamesData);
      });
    },
    getSingleGame: function (req, res) {
      db.findOne({ where: { id: req.params.userid } }).then(function (gamesData) {
        console.log("GET all users", gamesData)
        res.json(gamesData);
      });
    },
    newGame: function (req, res) {
      db.create(req.body).then(function (gamesData) {
        console.log("GET all users", gamesData)
        res.json(gamesData);
      });
    },
  }
}