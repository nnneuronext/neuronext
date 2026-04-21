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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Gerador de Conteúdo com IA</h2>
      <textarea 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite seu prompt aqui..."
        className="w-full p-3 border rounded mb-4"
        rows="4"
      />
      <button 
        onClick={generateContent} 
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Gerando..." : "Gerar Conteúdo"}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          {JSON.stringify(response)}
        </div>
      )}
    </div>
  );
}
