import { useState } from "react";

interface AIResponse {
  status: string;
  data?: any;
  error?: string;
}

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = async () => {
    if (!prompt.trim()) {
      setError("Por favor, insira um prompt");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/api/ai/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data: AIResponse = await res.json();

      if (res.ok && data.status === "success") {
        setResponse(data.data);
      } else {
        setError(data.error || "Erro ao gerar conteúdo");
      }
    } catch (err) {
      setError("Erro de conexão com o servidor");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Gerador de Conteúdo com IA</h2>
      
      <div className="mb-4">
        <label htmlFor="prompt" className="block text-sm font-medium mb-2">
          O que você quer criar?
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: Escreva um roteiro para um vídeo sobre produtividade..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
        />
      </div>

      <button
        onClick={generateContent}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Gerando..." : "Gerar Conteúdo"}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-bold mb-2">Resultado:</h3>
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
