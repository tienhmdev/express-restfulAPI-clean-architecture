import { validationResult } from "express-validator";
import { AppNextFunction, AppRequest, AppResponse } from "../../types/express";
import { responseHelper } from ".";
import { httpStatusCodes } from "../constants/httpStatusCodes";

export const check = () => {
  return (req: AppRequest, res: AppResponse, next: AppNextFunction) => {
    try {
      const errors = validationResult(req) as unknown;
      if (errors && typeof errors === "object" && "errors" in errors) {
        if (
          errors?.errors &&
          Array.isArray(errors.errors) &&
          errors.errors.length
        ) {
          return responseHelper.sendError({
            res,
            code: httpStatusCodes.BAD_REQUEST,
            message: errors.errors.shift().msg,
            cause: errors.errors,
          });
        }
      }
      next();
    } catch (err) {
      return responseHelper.sendError({
        res,
        code: httpStatusCodes.BAD_REQUEST,
        message: "Unknown validation error!",
      });
    }
  };
};
