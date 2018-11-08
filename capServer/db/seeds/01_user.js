
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([

        {
          steam_id: '76561198054327405',
          steam_name: 'Tim Othy',
          email: 'T',
          password: 'T'
        },
        {
          steam_id: '76561198108779558',
          steam_name: 'please give me a hand',
          email: 'N',
          password: 'N'
        },
        {
          steam_id: '76561198122915363',
          steam_name: 'benolson13',
          email: 'B',
          password: 'B'
        },
        {
          steam_id: '76561198099537722',
          steam_name: 'danshep12',
          email: 'D',
          password: 'D'
        },
        {
          steam_id: '76561198048183542',
          steam_name: 'B-rye',
          email: 'Br',
          password: 'Br'
        }

      ]);
    });
};
