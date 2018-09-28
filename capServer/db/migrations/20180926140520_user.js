exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", function(table) {
    table.increments();
    table.string("steam_id");
    table.string("steam_name");
    table.string("email");
    table.string("password");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user")

};
