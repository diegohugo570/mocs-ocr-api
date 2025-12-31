app.get("/api/ocr-test", (req, res) => {
  res.json({
    ok: true,
    message: "OCR endpoint funcionando"
  });
});
