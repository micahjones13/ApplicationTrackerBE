exports.up = function(knex) {
  return knex.schema.createTable("companies", tbl => {
    tbl.increments("id");
    tbl.string("company_name").notNullable();
    tbl.string("summary");
    tbl.string("position_name");
    tbl.date("date_applied");
    tbl.boolean("asked_to_interview");
    tbl.boolean("offer_made");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("companies");
};
