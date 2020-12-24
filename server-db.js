const Pool = require("pg").Pool;

//connected with my postgreSQL with the Backend using pg.

const pool = new Pool({
  user: "postgres",
  password: "ahamed24",
  host: "localhost",
  port: 5432,
  database: "todos",
});

module.exports = pool;
