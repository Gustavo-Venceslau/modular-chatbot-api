import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GOOGLE_API_KEY,
  temperature: 0
});