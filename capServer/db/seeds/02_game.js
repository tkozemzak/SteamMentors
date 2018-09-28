exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function() {
      // Inserts seed entries
      return knex('game').insert([{
          steam_app_id: '640820',
          user_id: '1',
          is_mentor: 'true'
        },
      {
          steam_app_id: '221380',
          user_id: '2',
          is_mentor: 'true'
        },
      {
          steam_app_id: '730',
          user_id: '3',
          is_mentor: 'true'
        }


      ]);
    });
};
