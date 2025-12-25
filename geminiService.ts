
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent, ProductInput } from "./types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Global process nesnesi artık index.html'de tanımlandığı için güvenle erişilebilir
    const apiKey = window.process?.env?.API_KEY || '';
    this.ai = new GoogleGenAI({ apiKey: apiKey });
  }

  async generateProductContent(input: ProductInput): Promise<GeneratedContent> {
    const prompt = `
      Sen premium bir ayakkabı markası olan 'Best Shoes' için kıdemli bir SEO Uzmanı ve Metin Yazarısın.
      Aşağıdaki ürün detaylarını kullanarak Google aramalarında üst sıralarda çıkacak, dönüşüm odaklı ve hikayeleştirilmiş bir içerik oluştur.
      
      Ürün Adı: ${input.name}
      Kategori: ${input.category}
      Teknik Özellikler: ${input.features}
      Hedef Kitle: ${input.targetAudience}

      Lütfen şu yapıda bir JSON yanıtı döndür:
      1. title: Dikkat çekici, SEO uyumlu ürün başlığı.
      2. shortDescription: Ürünü özetleyen 2 cümlelik giriş.
      3. storyDescription: En az 3 paragraftan oluşan, ürünün hissettirdiklerini ve kullanım alanlarını anlatan hikayeleştirilmiş açıklama.
      4. metaDescription: Google arama sonuçları için 160 karakteri geçmeyen meta açıklama.
      5. tags: En az 8 adet popüler ve alakalı SEO etiketi (dizi formatında).
      6. slug: URL dostu format (örneğin: en-rahat-spor-ayakkabi-modelleri).
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
      const jsonStr = response.text.trim();
      return JSON.parse(jsonStr);
    } catch (error) {
      console.error("JSON parsing error", error);
      throw new Error("İçerik üretilirken bir hata oluştu.");
    }
  }
}
