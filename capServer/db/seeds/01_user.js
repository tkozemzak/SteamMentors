
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([

        {
          steam_id: '76561198054327405',
          steam_name: 'Tim Othy',
          email: 'timkozemzak@gmail.com',
          password: 'timothy'
        },
        {
          steam_id: '76561198108779558',
          steam_name: 'please give me a hand',
          email: 'nickestrin@gmail.com',
          password: 'nicholas'
        },
        {
          steam_id: '76561198122915363',
          steam_name: 'benolson13',
          email: 'benolson@gmail.com',
          password: 'benjamin'
        }

      ]);
    });
};
