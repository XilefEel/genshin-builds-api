import { NextFunction, Request, Response } from "express";

class CustomError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  console.error(err);
  res.status(500).json({
    message: err.message,
  });
};

export { CustomError };
export default errorHandler;
