import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "SUA_SENHA",
  database: "mocs",
  port: 5432,
});

export async function connectDB() {
  try {
    await pool.connect();
    console.log("🟢 Banco de dados conectado");
  } catch (error) {
    console.error("🔴 Erro ao conectar no banco:", error.message);
  }
}

export default pool;
