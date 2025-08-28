import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { geminiModel } from "./models/GeminiModel.ts";

const mathPrompt = PromptTemplate.fromTemplate(`
  Você é um especialista em lógica e matemática. Seu único objetivo é resolver problemas matemáticos com precisão. Se a pergunta não for claramente sobre matemática, recuse-se a responder.

  Resolva o seguinte problema:
  Pergunta: {input}
  Resposta passo a passo:
`);

export const mathChain = RunnableSequence.from([
    mathPrompt,
    geminiModel,
    new StringOutputParser(),
]);