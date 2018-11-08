exports.up = function(knex, Promise) {
  return knex.schema.createTable("mentor_request", function(table) {
    table.increments();
    table.integer("mentor_id")
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .index();
    table.integer("mentee_id")
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .index();
    table.integer("game_id")

    table.string("content")
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("mentor_request")
};
