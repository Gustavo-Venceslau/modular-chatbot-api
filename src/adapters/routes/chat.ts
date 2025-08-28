import { Router } from "express";
import { ChatController } from "../http/controllers/ChatController.ts";

export const chatRouter = Router();
const chatController = new ChatController();

chatRouter.post("/receive", chatController.receive);