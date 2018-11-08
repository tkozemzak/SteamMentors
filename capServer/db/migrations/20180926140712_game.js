exports.up = function(knex, Promise) {
  return knex.schema.createTable("game", function(table) {
    table.increments();
    table.integer("steam_app_id")
    table.integer("user_id")
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .index();
    table.boolean("is_mentor");
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("game")
};
