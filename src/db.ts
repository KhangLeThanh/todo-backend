// src/db.ts
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER || "khanglethanh",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "todo_db",
  password: process.env.DB_PASSWORD || "admin",
  port: Number(process.env.DB_PORT) || 5432,
});

pool
  .query("SELECT NOW()")
  .then((res) => console.log(" Connected to DB:", res.rows[0]))
  .catch((err) => console.error(" DB connection error:", err));

export default pool;
