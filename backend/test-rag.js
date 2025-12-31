fetch("http://localhost:3333/api/rag"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    question: "Sobre o que é o documento?",
    context: "Este documento fala sobre inteligência artificial aplicada a OCR em contratos."
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("RESPOSTA:", data);
  })
  .catch(err => console.error(err));
