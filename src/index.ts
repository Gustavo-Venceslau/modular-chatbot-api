import dotenv from 'dotenv';
import type { Response } from 'express';
import express from 'express';
import { chatRouter } from './adapters/routes/chat.ts';
import { globalErrorHandler } from './adapters/middlewares/GlobalErrorHandler.ts';

dotenv.config();
export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(globalErrorHandler);

app.get('/health', (_, res: Response) => {
  return res.status(200).send(JSON.stringify(new Date().toISOString()));
});

app.use('/chat', chatRouter);
