const express = require('express');
const server = express()

//Routers
const gamesRouter = require('../routers/gamesRouter.js')

server.use(express.json())
server.use('/api/games', gamesRouter)

server.get('/', async (req, res) => {
    res.status(200).json({ SprintChallenge: 'Testing - TDD Video Games' });
  });

  module.exports = server;