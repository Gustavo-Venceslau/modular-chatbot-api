import { Conversation } from "src/domain/entities/Conversation.ts";
import { IConversationRepository } from "../IConversationRepository.ts";

export class ConversationInMemoryRepository implements IConversationRepository {
  private static INSTANCE: ConversationInMemoryRepository;
  public conversations: Conversation[];

  private constructor() { this.conversations = []; }

  public static getInstance(): ConversationInMemoryRepository {
    if(!this.INSTANCE) {
      this.INSTANCE = new ConversationInMemoryRepository();
    }

    return this.INSTANCE;
  }

  public async findConversationById(conversationId: string): Promise<Conversation | undefined> {
    const conversation = this.conversations.find(conversation =>
      conversation.getId() === conversationId);

    return conversation;
  }

}