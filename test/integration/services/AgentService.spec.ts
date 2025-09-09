import { AgentService } from "src/services/AgentService.ts";
import { AgentRequest } from "src/types/Agent.ts";
import { randomUUID as uuid } from "node:crypto";
import { User } from "src/domain/entities/User.ts";
import { redisClient } from "src/adapters/client/RedisClient.ts";
import { APIError } from "src/adapters/http/errors/APIError.ts";
import { logger } from "src/utils/logger.ts";

const agentService = new AgentService();

describe("Agent Service", () => {
  beforeEach(async () => {
    try {
      await redisClient.connect();
    }
    catch(error: any) {}
  })

  test("Given a user prompt When agent receive Then must return a anwser", async () => {
    const user = new User(
      "test",
      "test@mail.com",
      "123"
    );

    await redisClient.json.set(`user:data:${user.getId()}`, "$", { ...user });

    const userPrompt: AgentRequest = {
      message: "What is the capital of france",
      user_id: user.getId(),
      conversation_id: uuid()
    };

    const awnser = await agentService.generateResponse(userPrompt);

    logger.info(awnser);

    expect(awnser.agent_workflow).not.toBeNull();
    expect(awnser.source_agent_response).not.toBeNull();
    expect(awnser.response).not.toBeNull();
  });

  test("Given a wrong user_id When agent receive Then must return a error", async () => {
    const userPrompt: AgentRequest = {
      message: "What is the capital of france",
      user_id: uuid(),
      conversation_id: "1e00db78-215d-44ae-80f7-05fa1b903c36"
    };

    await expect(agentService.generateResponse(userPrompt)).rejects.toBeInstanceOf(APIError);
    await expect(agentService.generateResponse(userPrompt)).rejects.toThrow("User not found by user_id");
  });

  afterAll(async () => {
    await redisClient.flushDb();
  });
});