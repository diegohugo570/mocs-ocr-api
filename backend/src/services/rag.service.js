const { ChatOpenAI } = require("langchain/chat_models/openai");

async function askDocument(text, question) {
  const model = new ChatOpenAI({
    temperature: 0,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const response = await model.call([
    { role: "system", content: "Responda apenas com base no texto fornecido." },
    { role: "user", content: `Texto:\n${text}\nPergunta:\n${question}` }
  ]);

  return response.content;
}

module.exports = { askDocument };
