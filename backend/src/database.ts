import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "mocs",
  password: "mocs",
  database: "mocs"
});
