import { Conversation } from "../entities/Conversation.ts";

export interface IConversationRepository {
  findConversationById(conversationId: string): Promise<Conversation | undefined>

}