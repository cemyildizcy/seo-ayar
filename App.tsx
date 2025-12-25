
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
    // API anahtarının yüklü olup olmadığını kontrol et
    const key = window.process?.env?.API_KEY;
    if (!key || key.trim() === '') {
      // Not: Bazı platformlar API key'i otomatik inject eder.
      // Eğer statik olarak basıyorsanız bu kontrolü güncelleyebilirsiniz.
      console.warn("API Key bulunamadı, içerik üretimi çalışmayabilir.");
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
      setError('Lütfen ürün adı ve özelliklerini doldurun.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const service = new GeminiService();
      const data = await service.generateProductContent(input);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={view} onViewChange={setView} />
      
      <main className="flex-grow">
        {view === ViewMode.DOCUMENTATION ? (
          <ProjectDocument />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Form Section */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    İçerik <span className="text-blue-600">Üretin.</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-500">
                    Ürün bilgilerini girin, profesyonel SEO metinlerini anında alın.
                  </p>
                </div>

                <form onSubmit={handleGenerate} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ürün Adı</label>
                    <input
                      type="text"
                      placeholder="Örn: Air Pro Max V2"
                      value={input.name}
                      onChange={(e) => setInput({ ...input, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
                      <select
                        value={input.category}
                        onChange={(e) => setInput({ ...input, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                      >
                        <option>Sneaker</option>
                        <option>Klasik Ayakkabı</option>
                        <option>Bot & Çizme</option>
                        <option>Terlik & Sandalet</option>
                        <option>Spor Ayakkabı</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Hedef Kitle</label>
                      <input
                        type="text"
                        value={input.targetAudience}
                        onChange={(e) => setInput({ ...input, targetAudience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Öne Çıkan Özellikler</label>
                    <textarea
                      rows={4}
                      placeholder="Hafif taban, nefes alan kumaş, su geçirmez yapı..."
                      value={input.features}
                      onChange={(e) => setInput({ ...input, features: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Oluşturuluyor...
                      </>
                    ) : (
                      'SEO İçeriği Oluştur'
                    )}
                  </button>
                </form>
              </div>

              {/* Result Section */}
              <div className="relative">
                {!result && !loading && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                      <span className="text-3xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Sonuçlar Burada Görünecek</h3>
                    <p className="text-gray-500 mt-2 max-w-xs">
                      Ürün detaylarını girip butona bastığınızda saniyeler içinde içerikleriniz hazır olacak.
                    </p>
                  </div>
                )}

                {loading && (
                  <div className="h-full flex flex-col items-center justify-center space-y-4 animate-pulse">
                    <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                )}

                {result && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-8">
                      <div>
                        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">SEO Başlığı</span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-1">{result.title}</h2>
                        <p className="text-sm text-gray-400 mt-1 italic">/{result.slug}</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-1">Kısa Açıklama</span>
                        <p className="text-gray-700 font-medium">{result.shortDescription}</p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-3">Hikayeleştirilmiş Ürün Açıklaması</span>
                        <div className="text-gray-600 space-y-4 leading-relaxed whitespace-pre-line">
                          {result.storyDescription}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-3">SEO Etiketleri</span>
                        <div className="flex flex-wrap gap-2">
                          {result.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-2">Meta Açıklama</span>
                        <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl italic">
                          "{result.metaDescription}"
                        </p>
                      </div>

                      <button 
                        onClick={() => {
                          const text = `${result.title}\n\n${result.shortDescription}\n\n${result.storyDescription}\n\nEtiketler: ${result.tags.join(', ')}`;
                          navigator.clipboard.writeText(text);
                          alert('İçerik panoya kopyalandı!');
                        }}
                        className="w-full py-3 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        Tüm İçeriği Kopyala
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Best Shoes Content Generator - Cem YILDIZ tarafından tasarlanmıştır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
