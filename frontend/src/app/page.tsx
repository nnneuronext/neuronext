import AIContentGenerator from "@/components/ai/AIContentGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Neuronext
          </h1>
          <p className="text-xl text-gray-600">
            AI Suite for Content Creators
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bem-vindo ao seu assistente de IA!
          </h2>
          <p className="text-gray-600 mb-6">
            Crie roteiros, títulos, legendas e muito mais com a ajuda da inteligência artificial.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">📝 Roteiros</h3>
              <p className="text-sm text-blue-600">Crie roteiros profissionais para vídeos</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">🎯 Títulos</h3>
              <p className="text-sm text-green-600">Títulos que aumentam cliques</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-2">💬 Legendas</h3>
              <p className="text-sm text-purple-600">Legendas otimizadas para engajamento</p>
            </div>
          </div>
        </div>

        <AIContentGenerator />
      </div>
    </main>
  );
}
