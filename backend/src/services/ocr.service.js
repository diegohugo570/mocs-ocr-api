const Tesseract = require("tesseract.js");

async function extractTextFromImage(imagePath) {
  const result = await Tesseract.recognize(
    imagePath,
    "por",
    {
      logger: m => console.log(m.status)
    }
  );

  return result.data.text;
}

module.exports = {
  extractTextFromImage
};
