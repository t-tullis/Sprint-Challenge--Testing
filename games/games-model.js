const db = require('../data/dbConfig.js')

module.exports = {
    addGame,
    removeGame,
    getAllGames,
    findById
}

async function addGame(game){
    const [ id ] = await db('games').insert(game)

    return findById(id)
} 

function removeGame(id){
    return db('games')
    .where('id', id)
    .del()
}

function findById(id){
    return db('games')
    .where('id', id)
    .first()
}

function getAllGames() {
    return db('games');
  }
