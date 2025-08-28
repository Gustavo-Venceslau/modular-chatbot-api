import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { geminiModel } from "./models/GeminiModel.ts";

const generalPrompt = PromptTemplate.fromTemplate(`
  Você é um assistente de conhecimento geral muito prestativo. Sua tarefa é responder à seguinte pergunta da melhor forma possível.

  Pergunta: {input}
  Resposta:
`);

export const generalChain = RunnableSequence.from([
  generalPrompt,
  geminiModel,
  new StringOutputParser(),
]);