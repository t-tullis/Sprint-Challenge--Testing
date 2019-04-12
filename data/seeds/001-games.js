
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'COD Black Ops 4', genre: 'Shooter', releaseDate: 2018},
        {title: 'NBA 2k19', genre: 'Sports', releaseDate: 2018},
        {title: 'The Division 2', genre: 'Shooter', releaseDate: 2019},
        {title: 'Madden 19', genre: 'Sports', releaseDate: 2018},
        {title: 'Player Unknown Battlegrounds', genre: 'Shooter', releaseDate: 2018}
      ]);
    });
};
