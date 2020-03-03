module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "micah",
      password: "number13",
      database: "apptrackerdb",
      charset: "utf8"
    },
    migrations: {
      directory: "./knex/migrations"
    },
    seeds: {
      directory: "./knex/seeds/dev"
    },
    useNullAsDefault: true
  },

  test: {
    client: "pg",
    connection: "postgres://localhost/<examples_test>",
    migrations: {
      directory: "./knex/migrations"
    },
    seeds: {
      directory: "./knex/seeds/test"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./knex/seeds/production"
    },
    useNullAsDefault: true
  }
};
