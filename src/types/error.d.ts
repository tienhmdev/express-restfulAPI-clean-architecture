import { AppResponse } from "./express";

type ErrorResponse = {
  res: AppResponse;
  code: number;
  message?: string;
  cause?: any;
};
