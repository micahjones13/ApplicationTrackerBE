const express = require("express");

const knex = require("./knex/knex.js");
const Companies = require("./models/companies/company-model.js");

// const ProjectRouter = require('./projects/project-router.js')

const server = express();

server.use(express.json());
// server.use('/api/projects', ProjectRouter);

server.get("/", (req, res) => {
  return res.json({ message: "Server is up" });
});

server.get("/companies", (req, res) => {
  Companies.displayCompaniesTable()
    .then(companies => {
      res.status(200).json(companies);
    })
    .catch(err => {
      res.status(500).json({ message: "Didn't work" });
    });
});

module.exports = server;
