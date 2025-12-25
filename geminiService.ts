
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent, ProductInput } from "./types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = window.process?.env?.API_KEY || '';
    this.ai = new GoogleGenAI({ apiKey: apiKey });
  }

  async generateProductContent(input: ProductInput): Promise<GeneratedContent> {
    const prompt = `
      Sen premium bir ayakkabı markası olan 'Best Shoes' için çalışan, dünyanın en iyi SEO Stratejisti ve Kreatif Metin yazarısın.
      Görevin: Aşağıdaki ürün verilerini kullanarak, müşteriyi duygusal olarak bağlayacak ve Google aramalarında ilk sayfaya taşıyacak profesyonel bir içerik paketi hazırlamak.

      ÜRÜN VERİLERİ:
      - Ürün İsmi: ${input.name}
      - Kategori: ${input.category}
      - Anahtar Özellikler: ${input.features}
      - Hedef Kitle: ${input.targetAudience}

      İÇERİK STANDARTLARIMIZ:
      - Dil: Sofistike, güven verici, enerjik ve lüks.
      - SEO: Semantik anahtar kelimeler kullan, başlıkta anahtar kelimeyi başa al.
      - Hikaye: Ürünün sadece teknik özelliklerini değil, kullanıcıya katacağı özgüveni ve konforu anlat.

      Lütfen şu JSON yapısında yanıt ver:
      {
        "title": "SEO uyumlu, tıklama oranı (CTR) yüksek başlık",
        "shortDescription": "2 cümlelik, merak uyandıran özet",
        "storyDescription": "En az 3 paragraf, giriş-gelişme-sonuç yapısında, ayakkabının üretim kalitesinden ve yarattığı histen bahseden hikayeleştirilmiş metin",
        "metaDescription": "155-160 karakter arası, içinde 'Best Shoes' geçen ve aksiyon çağrısı (CTA) içeren meta açıklama",
        "tags": ["SEO için 8-10 adet virgülle ayrılmış trend etiket"],
        "slug": "url-dostu-kisa-link"
      }
    `;

    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            shortDescription: { type: Type.STRING },
            storyDescription: { type: Type.STRING },
            metaDescription: { type: Type.STRING },
            tags: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            slug: { type: Type.STRING }
          },
          required: ["title", "shortDescription", "storyDescription", "metaDescription", "tags", "slug"]
        }
      }
    });

    try {
      return JSON.parse(response.text.trim());
    } catch (error) {
      console.error("Content parsing error", error);
      throw new Error("İçerik yapılandırılırken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
}
