import { GoogleGenAI } from "@google/genai";

// FIX: Per coding guidelines, assume API_KEY is always set, so the runtime check and non-null assertion are removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGameSpiritMessage = async (sport: string, matchTime: string): Promise<string> => {
  try {
    const prompt = `Crie uma mensagem curta, empolgante e motivacional para uma partida de ${sport} que acontecerá ${matchTime}. A mensagem deve ser divertida e inspirar um espírito de equipe e competição saudável. Fale como se fosse um narrador esportivo super animado. Use no máximo 50 palavras e inclua emojis relacionados ao esporte.`;
    
    // FIX: Simplified the 'contents' parameter to be a string for a single text prompt, as per API guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating game spirit message:", error);
    return "Que comecem os jogos! Dê o seu melhor e divirta-se! 🚀🏆";
  }
};
