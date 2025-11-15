import { OpenAI } from 'openai';

class AIOrchestrator {
  private openai: OpenAI;

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OpenAI API key is missing. Please add VITE_OPENAI_API_KEY to your .env file.");
    }
    this.openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async getChatCompletion(userMessage: string, messageHistory: { role: 'user' | 'assistant'; content: string }[]): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Using a faster model for better UX
        messages: [
            { role: "system", content: "You are a helpful AI assistant for the SmartApp AI platform. You help users build applications." },
            ...messageHistory,
            { role: "user", content: userMessage }
        ],
      });
      
      return completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
    } catch (error: any) {
      console.error("AI Error:", error);
      return `An error occurred while contacting the AI: ${error.message || 'Please check your API key and network connection.'}`;
    }
  }
}

export const aiOrchestrator = new AIOrchestrator();
