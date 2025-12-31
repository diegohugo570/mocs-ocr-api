import { Pool } from "pg";

/**
 * Pool de conexão (PRECISA ser exportado)
 */
export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres123",
  database: "mocs",
});

/**
 * Conecta no banco ao subir o servidor
 */
export async function connectDB() {
  try {
    await pool.query("SELECT 1");
    console.log("🟢 Banco de dados conectado");
  } catch (error) {
    console.error("🔴 Erro ao conectar no banco:", error);
  }
}

/**
 * Salva documento OCR no banco
 */
export async function saveDocument(
  filename: string,
  mimetype: string,
  text: string
) {
  const query = `
    INSERT INTO documents (filename, mimetype, text)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const result = await pool.query(query, [filename, mimetype, text]);
  return result.rows[0];
}
