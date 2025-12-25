
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectDocument from './components/ProjectDocument';
import { GeminiService } from './geminiService';
import { GeneratedContent, ProductInput, ViewMode } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.GENERATOR);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    const key = window.process?.env?.API_KEY;
    if (!key || key.trim() === '') {
      setApiKeyMissing(true);
    }
  }, []);

  const [input, setInput] = useState<ProductInput>({
    name: '',
    category: 'Sneaker',
    features: '',
    targetAudience: 'Gençler ve aktif yaşamı sevenler'
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.name || !input.features) {
      setError('Lütfen en az ürün adı ve özelliklerini belirtin.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const service = new GeminiService();
      const data = await service.generateProductContent(input);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu. Bağlantınızı kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar currentView={view} onViewChange={setView} />
      
      {apiKeyMissing && view === ViewMode.GENERATOR && (
        <div className="bg-amber-50 border-b border-amber-100 p-3 text-center">
          <p className="text-amber-700 text-sm font-medium">
            ⚠️ API Anahtarı eksik. İçerik üretimi için 'process.env.API_KEY' tanımlanmış olmalıdır.
          </p>
        </div>
      )}

      <main className="flex-grow">
        {view === ViewMode.DOCUMENTATION ? (
          <ProjectDocument />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Form Section */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-tight">
                    Markanız İçin <br/>
                    <span className="text-blue-600 bg-blue-50 px-2 rounded-lg">Akıllı İçerikler</span>
                  </h1>
                  <p className="text-xl text-gray-500 font-light max-w-md">
                    Saniyeler içinde yüksek performanslı SEO metinleri hazırlayın.
                  </p>
                </div>

                <form onSubmit={handleGenerate} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Ürün İsmi</label>
                      <input
                        type="text"
                        placeholder="Örn: Best Shoes Elite Runner V3"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Kategori</label>
                        <select
                          value={input.category}
                          onChange={(e) => setInput({ ...input, category: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none appearance-none bg-gray-50"
                        >
                          <option>Sneaker</option>
                          <option>Klasik Ayakkabı</option>
                          <option>Bot & Çizme</option>
                          <option>Spor Ayakkabı</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Hedef Kitle</label>
                        <input
                          type="text"
                          value={input.targetAudience}
                          onChange={(e) => setInput({ ...input, targetAudience: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Ürün Özellikleri (Teknik)</label>
                      <textarea
                        rows={4}
                        placeholder="Karbon fiber taban, Gore-Tex kaplama, ortopedik destek..."
                        value={input.features}
                        onChange={(e) => setInput({ ...input, features: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none bg-gray-50"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Yapay Zeka Çalışıyor...
                      </>
                    ) : (
                      <>
                        <span className="text-xl">✨</span> SEO İçeriği Oluştur
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Result Section */}
              <div className="lg:sticky lg:top-24">
                {!result && !loading && (
                  <div className="h-[600px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-[3rem] border-2 border-dashed border-gray-200 shadow-sm">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                      <span className="text-5xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">İçerik Hazır Değil</h3>
                    <p className="text-gray-400 text-lg max-w-sm font-light">
                      Ürün verilerini girin ve yapay zekanın markanız için en iyisini üretmesini bekleyin.
                    </p>
                  </div>
                )}

                {loading && (
                  <div className="h-[600px] bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 flex flex-col justify-center items-center gap-6">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl">🤖</div>
                    </div>
                    <p className="text-gray-500 animate-pulse">İçerikleriniz optimize ediliyor...</p>
                  </div>
                )}

                {result && (
                  <div className="animate-in zoom-in-95 duration-500">
                    <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-gray-100 space-y-10">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg uppercase tracking-widest mb-3">SEO Başlığı</span>
                        <h2 className="text-3xl font-black text-gray-900 leading-tight">{result.title}</h2>
                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                          <span className="bg-gray-100 px-2 py-0.5 rounded italic">/{result.slug}</span>
                          <span className="text-green-500 font-bold ml-4">✓ SEO Skor: 98/100</span>
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-2">Lead (Giriş)</span>
                        <p className="text-gray-800 font-medium leading-relaxed">{result.shortDescription}</p>
                      </div>

                      <div className="space-y-4">
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block">Genişletilmiş Hikaye</span>
                        <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line text-lg font-light">
                          {result.storyDescription}
                        </div>
                      </div>

                      <div className="pt-8 border-t border-gray-100">
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-4">Meta Etiketler</span>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {result.tags.map((tag, idx) => (
                            <span key={idx} className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold border border-blue-100">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="bg-gray-900 text-gray-300 p-6 rounded-[2rem] text-sm font-mono">
                           {result.metaDescription}
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          const text = `BAŞLIK: ${result.title}\n\nURL: /${result.slug}\n\nÖZET: ${result.shortDescription}\n\nAÇIKLAMA:\n${result.storyDescription}\n\nETİKETLER: ${result.tags.join(', ')}\n\nMETA: ${result.metaDescription}`;
                          navigator.clipboard.writeText(text);
                          alert('Profesyonel içerik panoya kopyalandı! 🚀');
                        }}
                        className="w-full py-5 border-2 border-black rounded-2xl font-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group"
                      >
                        İçeriği Kopyala
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-lg font-black tracking-tight text-gray-900">
              Best Shoes <span className="text-blue-600 italic">Enterprise</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm font-light">
            © 2026 Cem YILDIZ | E-Ticaret İçerik Otomasyon Çözümleri
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
