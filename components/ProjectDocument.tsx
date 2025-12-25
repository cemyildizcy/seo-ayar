
import React from 'react';

const ProjectDocument: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in duration-700">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-black p-10 lg:p-16 text-white relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
            </svg>
          </div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-md rounded-full text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/30">
              Ürün Spesifikasyonu v1.0
            </span>
            <h1 className="text-5xl font-black mb-6 tracking-tight leading-tight">Best Shoes AI <br/><span className="text-blue-400 font-light italic">Content Generator</span></h1>
            <p className="text-blue-100 text-xl font-light max-w-2xl leading-relaxed">
              E-ticaret operasyonlarını yapay zeka ile optimize eden, SEO odaklı stratejik içerik otomasyon platformu.
            </p>
          </div>
        </div>
        
        <div className="p-10 lg:p-16 space-y-16">
          {/* Proje Özeti */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-1.5 bg-blue-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Proje Özeti</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-gray-100 pl-6">
              "Best Shoes AI Content Generator, dijital pazarlamanın en büyük darboğazı olan 'kaliteli içerik üretimini' ortadan kaldırmak için tasarlandı. Sadece saniyeler içinde, teknik verileri lüks marka diliyle harmanlayarak hem Google algoritmalarını hem de son kullanıcıyı ikna eden SEO paketleri sunar."
            </p>
          </section>

          {/* Sorun & Çözüm */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-red-50 rounded-[2rem] border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚨</span> Sorun
              </h3>
              <p className="text-red-700/80 leading-relaxed">
                E-ticaret yöneticileri yeni ürün girişlerinde SEO uyumlu, özgün ve ilgi çekici içerik yazmak için ürün başına ortalama 20-30 dakika harcıyor. Bu durum, 'yaratıcılık tükenmişliği' ve pazar yerlerinde marka dilinin bozulmasıyla sonuçlanıyor.
              </p>
            </div>
            <div className="p-8 bg-green-50 rounded-[2rem] border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Çözüm
              </h3>
              <p className="text-green-700/80 leading-relaxed">
                Gemini 3 altyapısı sayesinde, sadece ürün adı ve teknik özellikleri girilerek; SEO uyumlu başlıklar, hikayeleştirilmiş ürün açıklamaları ve meta veriler anında üretilir. Süreç %95 hızlanır.
              </p>
            </div>
          </section>

          {/* Temel Özellikler */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Temel Özellikler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "SEO Optimizasyonu", d: "Google sıralama kriterlerine uygun semantik anahtar kelime seçimi.", i: "🚀" },
                { t: "Kreatif Storytelling", d: "Teknik özellikleri duygusal faydaya dönüştüren hikaye anlatımı.", i: "✍️" },
                { t: "Marka Standartlaştırma", d: "Tüm ürünlerde tutarlı ve premium bir marka sesi.", i: "💎" },
                { t: "Akıllı Meta Veri", d: "CTR (Tıklama oranı) odaklı meta açıklama ve etiketleme.", i: "📊" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-200">
                  <span className="text-3xl">{item.i}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teknoloji Stack */}
          <section className="bg-gray-900 rounded-[2.5rem] p-10 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Kullanılan Teknoloji Yığını</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "React 19", color: "bg-blue-600" },
                { name: "TypeScript", color: "bg-blue-800" },
                { name: "Gemini 3 Pro API", color: "bg-indigo-600" },
                { name: "Tailwind CSS", color: "bg-cyan-600" },
                { name: "Babel Standalone", color: "bg-yellow-600" }
              ].map(tech => (
                <span key={tech.name} className={`${tech.color} px-4 py-2 rounded-xl text-sm font-bold shadow-lg`}>
                  {tech.name}
                </span>
              ))}
            </div>
            <p className="mt-8 text-gray-400 text-sm leading-relaxed font-mono">
              // Mimari Notu: Uygulama, "No-Build" prensibiyle tasarlanmıştır. Tarayıcı tabanlı transpilation sayesinde GitHub Pages gibi statik ortamlarda ek bir derleme süreci gerektirmeden çalışır.
            </p>
          </section>

          {/* Sağladığı Faydalar */}
          <section className="bg-blue-50 rounded-[2.5rem] p-10 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">İşletme Faydaları (ROI)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">95%</div>
                <p className="text-sm font-bold text-blue-800 uppercase tracking-widest">Hız Artışı</p>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">40%</div>
                <p className="text-sm font-bold text-blue-800 uppercase tracking-widest">Organik Trafik Artışı</p>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">CR+</div>
                <p className="text-sm font-bold text-blue-800 uppercase tracking-widest">Dönüşüm Oranı</p>
              </div>
            </div>
          </section>

          {/* Gelecek Vizyonu */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gelecek Vizyonu (Roadmap)</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 border-2 border-dashed border-gray-200 rounded-3xl">
                <div className="p-4 bg-gray-100 rounded-2xl text-2xl">📸</div>
                <div>
                  <h4 className="font-bold text-gray-900 italic">Vision Integration (v2.0)</h4>
                  <p className="text-gray-500 text-sm">Ürün fotoğrafından otomatik özellik çıkarımı ve açıklama yazımı.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 border-2 border-dashed border-gray-200 rounded-3xl opacity-60">
                <div className="p-4 bg-gray-100 rounded-2xl text-2xl">🔌</div>
                <div>
                  <h4 className="font-bold text-gray-900 italic">Marketplace Sync</h4>
                  <p className="text-gray-500 text-sm">Üretilen içeriğin Shopify ve Trendyol panellerine otomatik aktarımı.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-8 text-center border-t border-gray-100">
          <p className="text-gray-400 text-xs tracking-widest uppercase font-bold">
            Best Shoes Corp - Stratejik AI Proje Dokümanı © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocument;
