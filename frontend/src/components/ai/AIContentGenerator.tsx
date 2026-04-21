import { useState } from "react";

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateContent = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      // Mock response for now
      setResponse({ message: "Conteúdo gerado com sucesso!" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Gerador de Conteúdo com IA</h2>
      <textarea 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite seu prompt aqui..."
      />
      <button onClick={generateContent} disabled={loading}>
        {loading ? "Gerando..." : "Gerar"}
      </button>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
}
