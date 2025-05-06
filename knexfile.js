import Knex from "knex";

const config = {
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "secret",
    database: "rpdb",
  },
  migrations: {
    directory: "./migrations",
  },
};

export default config;