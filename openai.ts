import OpenAI from "openai";
import { env, hasOpenAI } from "./env";

let client: OpenAI | null = null;

export function getOpenAIClient() {
  if (!hasOpenAI()) return null;
  if (!client) {
    client = new OpenAI({ apiKey: env.openaiApiKey! });
  }
  return client;
}
