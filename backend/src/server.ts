import express from "express";
import cors from "cors";
import routes from "./routes";
import { connectDB } from "./database/db";

const app = express();

console.log("🔥 SERVER INICIANDO");

// ✅ CORS CORRETO PARA VITE + UPLOAD
app.use(cors({
  origin: "http://localhost:5173",
  credentials: false,
}));

// ✅ RESPONDE PREFLIGHT (ESSENCIAL PARA MULTIPART)
app.options("*", cors());

// ❌ NÃO use body-parser aqui
app.use(express.json());

// 🔌 BANCO (OBRIGATÓRIO)
connectDB(); // ← isso garante o log 🟢 Banco de dados conectado

// 🔀 ROTAS
app.use(routes);

// 🔍 TESTE RAIZ
app.get("/", (req, res) => {
  res.send("🚀 Backend MOCS rodando corretamente");
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
