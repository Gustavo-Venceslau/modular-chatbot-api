import { Router } from "express";
import type { Request, Response } from "express";

export const chatRouter = Router();

chatRouter.post("/receive", (req: Request, res: Response) => {
  return "Received"
});