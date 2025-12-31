import { useState } from "react";
import { api } from "../services/api";

export function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function enviarDocumento() {
    if (!file) {
      alert("Selecione um arquivo");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file); // ⚠️ NOME EXATO

      const response = await api.post("/api/ocr", formData);

      console.log("✅ SUCESSO:", response.data);
      alert("Documento enviado com sucesso!");

    } catch (error: any) {
      console.error("❌ ERRO COMPLETO:", error);

      const message =
        error?.response?.data?.error ||
        error?.message ||
        "Erro desconhecido";

      alert(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/png,image/jpeg"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={enviarDocumento} disabled={loading}>
        {loading ? "Enviando..." : "Enviar Documento"}
      </button>
    </div>
  );
}
