import { ZodError } from "zod";
import { APIError } from "../http/errors/APIError.ts";
import type { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  let { statusCode, message } = error;

  if (error instanceof ZodError) {
    const message = error.message;
    return next(new APIError(400, message));
  }

  if(!(error instanceof APIError)) {
    statusCode = 500;
    message = "Something went wrong";
  }

  console.error(`[${req.method}] ${req.originalUrl} ->`, error);

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  });
};