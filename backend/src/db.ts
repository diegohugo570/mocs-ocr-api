import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
  filename: "database.db",
  driver: sqlite3.Database
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    file_name TEXT,
    text_content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
