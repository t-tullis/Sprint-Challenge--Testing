const express = require('express');

const Games = require('../games/games-model')

const server = express()


server.use(express.json())

server.get('/', async (req, res) => {
    res.status(200).json({ SprintChallenge: 'Testing - TDD Video Games' });
  });

    //Get all games
    server.get('/games', (req, res) => {
        Games.getAllGames().then(games => {
            res.status(200).json(games)
        }).catch(error => {
            res.status(500).json(error)
        });
      });
    
    //Add a game
    server.post('/games', (req, res) => {
    const { title, genre} = req.body
    if(!title || !genre){
        return res.status(422).json({errorMessage: "Unprocessable Entity"})
    }
    if(title !== title.toString() || genre !== genre.toString()){
        return res.status(400).json({errorMessage: "Invalid content type"})
    }
    Games.addGame({ title, genre}).then(game => {
            res.status(201).json({game})
    }).catch( error => {
        res.status(422).json(error)
    })
});
    
module.exports = server;

 