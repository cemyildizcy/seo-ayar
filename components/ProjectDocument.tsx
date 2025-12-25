
import React from 'react';

const ProjectDocument: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in duration-700">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-10 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight">Best Shoes AI Content Generator</h1>
          <p className="text-blue-100 text-lg font-light max-w-2xl">
            E-ticaret operasyonlarını yapay zeka ile dönüştüren, SEO odaklı stratejik içerik otomasyon platformu.
          </p>
        </div>
        
        <div className="p-10 lg:p-16 space-y-16">
          {/* Executive Summary */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Yönetici Özeti (Executive Summary)</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Modern e-ticaret dünyasında ürün girişi hızı, pazar payını belirleyen en kritik faktördür. <strong>Best Shoes AI</strong>, markaların manuel içerik üretiminde yaşadığı "yaratıcılık tıkanması" ve "SEO hataları" sorunlarını, Google'ın en gelişmiş dil modellerinden biri olan <strong>Gemini 3 Flash</strong> ile çözer. Ürün yöneticileri için operasyonel maliyeti düşürürken, pazarlama ekipleri için dönüşüm oranlarını (CR) maksimize eder.
            </p>
          </section>

          {/* Key Capabilities */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Stratejik Avantajlar</h3>
              <ul className="space-y-4">
                {[
                  { t: "Hiper-Hızlı Yayına Alım", d: "Dakikalar süren içerik yazım süreci 3 saniyenin altına iner." },
                  { t: "SEO Dominasyonu", d: "Semantik analiz ile arama motorlarında daha yüksek görünürlük sağlar." },
                  { t: "Marka Bütünlüğü", d: "Tüm platformlarda (Pazar yerleri, Web sitesi) tek bir marka sesi oluşturur." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.t}</h4>
                      <p className="text-gray-500 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Teknik Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React 19', 'TypeScript', 'Tailwind CSS', 'Gemini 3 API', 'Babel Standalone'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold shadow-sm">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">
                Uygulama, "no-build" mimarisiyle tasarlanmış olup statik sunucularda (GitHub Pages) yüksek uyumlulukla çalışacak şekilde optimize edilmiştir.
              </p>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="bg-indigo-50 rounded-[2rem] p-10 border border-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-900 mb-8 text-center">Hedeflenen Başarı Metrikleri (KPIs)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-indigo-600 mb-2">95%</div>
                <p className="text-sm font-bold text-indigo-800 uppercase tracking-wider">Zaman Tasarrufu</p>
              </div>
              <div>
                <div className="text-4xl font-black text-indigo-600 mb-2">40%</div>
                <p className="text-sm font-bold text-indigo-800 uppercase tracking-wider">SEO Skor Artışı</p>
              </div>
              <div>
                <div className="text-4xl font-black text-indigo-600 mb-2">0</div>
                <p className="text-sm font-bold text-indigo-800 uppercase tracking-wider">Manuel Hata Payı</p>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gelecek Vizyonu (Roadmap)</h2>
            <div className="border-l-2 border-dashed border-gray-200 ml-3 pl-8 space-y-8 relative">
              <div className="relative">
                <div className="absolute -left-[2.35rem] w-4 h-4 bg-blue-600 rounded-full shadow-lg shadow-blue-200"></div>
                <h4 className="font-bold text-gray-900">V2: Multimodal Entegrasyon</h4>
                <p className="text-gray-500">Ürün görselinden otomatik teknik özellik çıkarımı ve açıklama yazımı.</p>
              </div>
              <div className="relative opacity-60">
                <div className="absolute -left-[2.35rem] w-4 h-4 bg-gray-300 rounded-full"></div>
                <h4 className="font-bold text-gray-900">V3: Marketplace Sync</h4>
                <p className="text-gray-500">Shopify, Trendyol ve Hepsiburada için tek tuşla ürün senkronizasyonu.</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Footer info */}
        <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
          <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
            Confidential Product Specification - Best Shoes Corp 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocument;
