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
        </div>

        <AIContentGenerator />
      </div>
    </main>
  );
}
