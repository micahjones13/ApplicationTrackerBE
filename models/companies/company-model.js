const db = require("../../knex/knex.js");

module.exports = {
  displayCompaniesTable
};

function displayCompaniesTable() {
  return db("companies");
}
