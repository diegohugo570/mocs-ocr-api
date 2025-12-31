import { Router } from "express";
import multer from "multer";
import { extractText } from "../services/ocr.js";
import { db } from "../db.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file!;
  const text = await extractText(file.path);

  const result = await db.run(
    "INSERT INTO documents (file_name, text_content) VALUES (?, ?)",
    file.originalname,
    text
  );

  res.json({
    id: result.lastID,
    text
  });
});

export default router;
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

router.post("/:id/question", async (req, res) => {
  const { id } = req.params;
  const { question } = req.body;

  const row = await db.get(
    "SELECT text_content FROM documents WHERE id = ?",
    id
  );

  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0
  });

  const response = await model.call([
    new HumanMessage(`
      Documento:
      ${row.text_content}

      Pergunta:
      ${question}
    `)
  ]);

  res.json({ answer: response.content });
});
