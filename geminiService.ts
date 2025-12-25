
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent, ProductInput } from "./types.ts";

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

      Lütfen şu JSON yapısında yanıt ver:
      {
        "title": "SEO uyumlu başlık",
        "shortDescription": "2 cümlelik özet",
        "storyDescription": "Hikayeleştirilmiş metin",
        "metaDescription": "Meta açıklama",
        "tags": ["etiket1", "etiket2"],
        "slug": "url-link"
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
            tags: { type: Type.ARRAY, items: { type: Type.STRING } },
            slug: { type: Type.STRING }
          },
          required: ["title", "shortDescription", "storyDescription", "metaDescription", "tags", "slug"]
        }
      }
    });

    try {
      return JSON.parse(response.text.trim());
    } catch (error) {
      throw new Error("İçerik yapılandırılırken bir hata oluştu.");
    }
  }
}
