import { app } from "src/index.ts";
import { AgentRequest } from "src/types/Agent.ts";
import { randomUUID as uuid } from "crypto";
import request from "supertest";
import { logger } from "src/utils/logger.ts";

describe("Chat Controller", () => {
  test("SGiven a user prompt When agent receive Then must return a anwser", async () => {
    const userPrompt: AgentRequest = {
      message: "What is the capital of france",
      user_id: uuid(),
      conversation_id: "1e00db78-215d-44ae-80f7-05fa1b903c36"
    };

    const response = await request(app).post("/chat/receive/")
      .send(userPrompt);

    logger.info(response.body);

    const { response: agentResponse, source_agent_response, agent_workflow} = response.body;

    expect(response.status).toBe(200);
    expect(agentResponse).not.toBeNull();
    expect(source_agent_response).not.toBeNull();
    expect(agent_workflow).not.toBeNull();
  });
});