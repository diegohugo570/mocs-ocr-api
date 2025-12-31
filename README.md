# 📄 OCR Document API — MOCS Challenge

API backend desenvolvida para upload de imagens, extração de texto via OCR,
armazenamento em banco de dados e busca textual.

Este projeto faz parte de um desafio técnico, com foco em organização,
tratamento de erros, boas práticas de API e integração com OCR.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- PostgreSQL
- Multer (upload de arquivos)
- Tesseract.js (OCR)
- pg (node-postgres)
- CORS

---

## ⚙️ Como Rodar o Projeto Localmente

### 1️⃣ Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd backend

---

## 🧠 Decisões Técnicas

- **Express + TypeScript** foram escolhidos para garantir organização, tipagem forte e facilidade de manutenção do código.
- **Multer** foi utilizado para lidar com upload de arquivos de forma segura e controlada.
- **Tesseract.js** foi adotado como motor de OCR por ser open-source e atender ao requisito de extração de texto a partir de imagens.
- **PostgreSQL** foi utilizado para persistir os textos extraídos, permitindo futuras buscas textuais.
- **CORS** foi configurado explicitamente para permitir integração segura com o frontend durante o desenvolvimento.

O projeto foi estruturado em camadas (rotas, middlewares e serviços), seguindo boas práticas de APIs REST, com tratamento adequado de erros e respostas claras para o cliente.

---

## 🎥 Vídeo Explicativo

Vídeo explicando as decisões técnicas, arquitetura e funcionamento do projeto:

👉 https://www.loom.com/share/0f83b4adf2f243e6a360af3d4622e7b0

