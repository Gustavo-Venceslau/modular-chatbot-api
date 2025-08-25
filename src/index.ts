import dotenv from 'dotenv';
import type { Response } from 'express';
import express from 'express';
import { chatRouter } from './routes/chat.ts';

dotenv.config();
export const app = express();

app.get('/health', (_, res: Response) => {
  return res.status(200).send(JSON.stringify(new Date().toISOString()));
});

app.use('/chat', chatRouter);
