import { ErrorResponse } from "../../types/error";
import { AppResponse } from "../../types/express";
import { httpMessages } from "../constants/httpMessages";
import { httpStatusCodes } from "../constants/httpStatusCodes";

export const sendObject = (res: AppResponse, data: any) => {
  res.status(httpStatusCodes.OK).json({
    data,
  });
};

export const sendCollection = (res: AppResponse, data: any, meta: any) => {
  res.status(httpStatusCodes.OK).json({
    data,
    meta,
  });
};

export const sendError = ({ res, code, message, cause }: ErrorResponse) => {
  res.status(code).json({
    status: res.status,
    message:
      message ??
      httpMessages?.[code] ??
      `Don't worry, we're fixing this. Please try again after some time.`,
    cause: Object.keys(cause ?? {}).length || {
      fromDev: `Don't worry, we're fixing this. Please try again after some time.`,
    },
    code,
  });
};
