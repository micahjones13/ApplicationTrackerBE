exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("companies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("companies").insert([
        {
          company_name: "Arbiter Sports",
          summary: "Referee scheduling",
          position_name: "Junior Dev",
          date_applied: "01-10-2020",
          asked_to_interview: true,
          offer_made: false
        }
      ]);
    });
};
