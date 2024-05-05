import { UserService } from "../services/user.service";
import { AppRequest, AppResponse } from "../types/express";
import { StatusCode } from "../utils/constants/statusCode";
import { responseHelper } from "../utils/helpers";

export class UserController {
  public static users = async (req: AppRequest, res: AppResponse) => {
    try {
      const { data, metadata } = await UserService.users(req);
      responseHelper.sendCollection(res, data, metadata);
    } catch (error) {
      responseHelper.sendError({
        res,
        code: StatusCode.INTERNAL_SERVER_ERROR,
        cause: error,
      });
    }
  };

  public static detail = async (req: AppRequest, res: AppResponse) => {
    try {
      const { data } = await UserService.detail(req);
      responseHelper.sendObject(res, data);
    } catch (error) {
      responseHelper.sendError({
        res,
        code: StatusCode.INTERNAL_SERVER_ERROR,
        cause: error,
      });
    }
  };
}
