exports.seed = function(knex, Promise) {
  return knex('mentor_request').del()
    .then(function() {
      return knex('mentor_request').insert([{
          mentor_id: '1',
          mentee_id: '2',
          game_id: '1',
          content: 'testing content'
        },
        {
            mentor_id: '2',
            mentee_id: '3',
            game_id: '2',
            content: 'testing content'
          },
          {
              mentor_id: '3',
              mentee_id: '1',
              game_id: '3',
              content: 'testing content'
            }

      ]);
    });
};
