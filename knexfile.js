var options = {
  development: {
    client: "pg",
    connection: "postgres://localhost/jonahtillman",
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds/production",
    },
  },
};

module.exports = options;
