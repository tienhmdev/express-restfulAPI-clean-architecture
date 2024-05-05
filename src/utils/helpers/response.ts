import { ErrorResponse } from "../../types/error";
import { AppResponse } from "../../types/express";
import { ErrorMessages } from "../constants/errorMessages";
import { StatusCode } from "../constants/statusCode";

export const sendObject = (res: AppResponse, data: any) => {
  res.status(StatusCode.OK).json({
    data,
  });
};

export const sendCollection = (res: AppResponse, data: any, meta: any) => {
  res.status(StatusCode.OK).json({
    data,
    meta,
  });
};

export const sendError = ({ res, code, message, cause }: ErrorResponse) => {
  res.status(code).json({
    status: res.status,
    message:
      message ??
      ErrorMessages?.[code] ??
      `Don't worry, we're fixing this. Please try again after some time.`,
    cause: Object.keys(cause ?? {}).length || {
      fromDev: `Don't worry, we're fixing this. Please try again after some time.`,
    },
    code,
  });
};
