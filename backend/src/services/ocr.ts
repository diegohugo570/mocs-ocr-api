import Tesseract from "tesseract.js";

export async function extractText(filePath: string): Promise<string> {
  const result = await Tesseract.recognize(filePath, "por");
  return result.data.text;
}
