
import React from 'react';

const ProjectDocument: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-black p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Proje Dokümanı</h1>
          <p className="text-gray-400">Ürün Yönetimi & Teknik Spesifikasyonlar</p>
        </div>
        
        <div className="p-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Proje Özeti</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Best Shoes Content Generator</strong>, e-ticaret dünyasında hızı ve yaratıcılığı birleştiren, operasyonel yükü minimize etmek için tasarlanmış bir yapay zeka asistanıdır. Markanın özgün sesini korurken, sadece teknik verilerden yola çıkarak saniyeler içinde Google uyumlu, ikna kabiliyeti yüksek ve hikayeleştirilmiş ürün sayfaları oluşturur. Bu proje, "sıfırdan içerik üretme" sancısını ortadan kaldırarak dijital varlığınızı otomatiğe bağlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Temel Özellikler</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="mt-1 text-blue-600">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Otomatik SEO Başlıkları</h4>
                  <p className="text-sm text-gray-500">Arama hacmi yüksek anahtar kelimelerle optimize edilmiş başlıklar.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="mt-1 text-blue-600">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hikayeleştirilmiş Açıklamalar</h4>
                  <p className="text-sm text-gray-500">Ürünü sadece satmayan, aynı zamanda bir yaşam tarzı sunan metinler.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="mt-1 text-blue-600">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Meta Veri Yönetimi</h4>
                  <p className="text-sm text-gray-500">Arama sonuçlarında tıklanma oranını (CTR) artıran meta açıklamalar.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="mt-1 text-blue-600">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Akıllı Etiketleme</h4>
                  <p className="text-sm text-gray-500">Site içi aramayı ve Google dizinini güçlendiren trend etiketler.</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Kullanılan Teknoloji Yığını</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">React 18+</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Gemini 3 Flash API</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Google GenAI SDK</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm italic">
              *Uygulama, Gemini 3 serisinin yüksek hızlı çıkarım (inference) yeteneklerini kullanarak gerçek zamanlı içerik üretimi sağlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Sağladığı Faydalar</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 rounded-xl bg-green-50">
                <h4 className="font-bold text-green-900">%80 Zaman Tasarrufu</h4>
                <p className="text-sm text-green-700">Ürün giriş süreci 15 dakikadan 30 saniyeye düşer.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-xl bg-green-50">
                <h4 className="font-bold text-green-900">Artan Organik Trafik</h4>
                <p className="text-sm text-green-700">SEO uyumlu altyapı sayesinde reklam maliyetleri düşer, organik görünürlük artar.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-xl bg-green-50">
                <h4 className="font-bold text-green-900">Marka Standartı</h4>
                <p className="text-sm text-green-700">Tüm ürünlerde aynı profesyonel ve kurumsal dilin korunması sağlanır.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Gelecek Vizyonu</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Projenin V2 aşamasında, <strong>görselden içerik üretme</strong> (multimodal) yeteneği eklenerek kullanıcının sadece ürün fotoğrafı yüklemesiyle tüm verilerin otomatik çekilmesi planlanmaktadır. Ayrıca, popüler e-ticaret altyapılarıyla (Shopify, WooCommerce) <strong>doğrudan entegrasyon</strong> sağlanacaktır.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocument;
