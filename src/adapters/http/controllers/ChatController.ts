import type { Request, Response } from "express";
import { AgentService } from "src/services/AgentService.ts";
import { logger } from "src/utils/logger.ts";

export class ChatController {
  constructor() {}

  async receive(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const agentService = new AgentService();

      const agentResponse = await agentService.generateResponse(body);

      return res.status(200).json(agentResponse);
    }
    catch(error: any) {
      logger.error(error.message);
      return res.status(500).send("It's not possible to return a generate the message");
    }
  }
}