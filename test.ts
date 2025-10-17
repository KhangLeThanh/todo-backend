import pool from "./src/db";

(async () => {
  try {
    const result = await pool.query("SELECT * FROM todo LIMIT 1");
    console.log("Query result:", result.rows);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    pool.end();
  }
})();
