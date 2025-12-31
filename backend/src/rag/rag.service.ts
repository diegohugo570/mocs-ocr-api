import { ChatOpenAI } from "@langchain/openai";
import { buildPrompt } from "./prompt";

const model = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0.2,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function askRAG(context: string, question: string) {
  const prompt = buildPrompt(context, question);

  const response = await model.invoke(prompt);

  return response.content;
}
