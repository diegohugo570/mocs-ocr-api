import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}${ext}`;
    cb(null, name);
  }
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  },
  fileFilter: (req, file, cb) => {
  const allowed = [
    "image/png",
    "image/jpeg",
    "application/pdf" // 👈 PERMITIR PDF AQUI
  ];

    if (!allowed.includes(file.mimetype)) {
    cb(new Error("Tipo de arquivo não permitido"));
  } else {
    cb(null, true);
  }
}
});
