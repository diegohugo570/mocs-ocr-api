export function buildPrompt(context: string, question: string) {
  return `
Você é um assistente inteligente.
Use APENAS o contexto abaixo para responder.

CONTEXTO:
${context}

PERGUNTA:
${question}

Se não souber a resposta, diga que não encontrou no documento.
`;
}
