import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { geminiModel } from "./models/GeminiModel.ts";

const classificationPrompt = PromptTemplate.fromTemplate(`
  Dada a pergunta do usuário, classiefique-a como 'matematica' ou 'conhecimento_geral'.
  Não responda à pergunta, apenas forneça a classificação.

  Aqui estão alguns exemplos:
  Pergunta: Quanto é 2 + 2?
  Classificação: matematica

  Pergunta: Quem foi o primeiro homem na lua?
  Classificação: conhecimento_geral

  Pergunta: {input}
  Classificação:
`);

export const classificationChain = RunnableSequence.from([
  classificationPrompt,
  geminiModel,
  new StringOutputParser()
]);