import { Router } from "express";
import ocrRoutes from "./ocr.routes";

console.log("🔥 INDEX ROUTES CARREGADO");

const router = Router();

// 🔥 SOMENTE OCR
router.use("/api", ocrRoutes);

export default router;
