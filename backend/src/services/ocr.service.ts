import Tesseract from "tesseract.js";

export async function extractTextFromImage(imagePath: string): Promise<string> {
  const result = await Tesseract.recognize(
    imagePath,
    "por",
    {
      logger: m => console.log(m.status)
    }
  );

  return result.data.text;
}
