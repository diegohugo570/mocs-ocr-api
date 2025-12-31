import { Router, Request, Response } from "express";
import { upload } from "../middlewares/uploads";
import Tesseract from "tesseract.js";
import { pool, saveDocument } from "../database/db";

console.log("🔥 OCR ROUTES CARREGADO");

const router = Router();

/**
 * TESTE BÁSICO
 * GET /api/ocr
 */
router.get("/ocr", (req: Request, res: Response) => {
  return res.json({ ok: true });
});

/**
 * TESTE DE SAÚDE
 * GET /api/ocr-test
 */
router.get("/ocr-test", (req: Request, res: Response) => {
  return res.json({
    ok: true,
    message: "OCR API funcionando corretamente"
  });
});

/**
 * OCR REAL
 * POST /api/ocr
 */
router.post(
  "/ocr",
  upload.single("file"),
  async (req: Request, res: Response) => {
    console.log("🟢 POST /api/ocr");

    try {
      if (!req.file) {
        return res.status(400).json({
          ok: false,
          error: "Arquivo não enviado"
        });
      }

      if (req.file.mimetype === "application/pdf") {
        return res.status(400).json({
          ok: false,
          error: "PDF não suportado. Envie JPG ou PNG."
        });
      }

      const result = await Tesseract.recognize(
        req.file.path,
        "por"
      );

      const text = result.data.text || "";

      const document = await saveDocument(
        req.file.originalname,
        req.file.mimetype,
        text
      );

      return res.json({ ok: true, document });

    } catch (error) {
      console.error("🔥 ERRO OCR:", error);
      return res.status(500).json({
        ok: false,
        error: "Erro no OCR"
      });
    }
  }
);

/**
 * BUSCA
 * GET /api/ocr/search?q=texto
 */
router.get("/ocr/search", async (req: Request, res: Response) => {
  const q = req.query.q as string;

  if (!q) {
    return res.status(400).json({
      ok: false,
      error: "Parâmetro q obrigatório"
    });
  }

  const result = await pool.query(
    `
    SELECT id, filename, mimetype, created_at
    FROM documents
    WHERE text ILIKE $1
    ORDER BY created_at DESC
    `,
    [`%${q}%`]
  );

  return res.json({
    ok: true,
    total: result.rowCount,
    documents: result.rows
  });
});

export default router;
