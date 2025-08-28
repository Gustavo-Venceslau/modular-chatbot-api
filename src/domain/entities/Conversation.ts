import { randomUUID as uuid } from "node:crypto";

export class Conversation {
  private readonly id: string;
  private user_id: string;
  private readonly createdAt: Date
  private updatedAt: Date

  constructor(user_id: string) {
    this.id = uuid();
    this.user_id = user_id;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public getId(): string {
    return this.id;
  }

  public getUserId(): string {
    return this.user_id;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUserId(user_id: string): void {
    this.user_id = user_id;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}