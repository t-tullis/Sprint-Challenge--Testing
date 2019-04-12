const express = require('express');
const router = express.Router();
const Games = require('../games/games-model')

  //Get all games
  router.get('/', (req, res) => {
    Games.getAllGames().then(games => {
        res.status(200).json(games)
    }).catch(error => {
        res.status(500).json(error)
    });
  });

module.exports = router;