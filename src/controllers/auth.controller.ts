import { AuthService } from "../services/auth.service";
import { AppRequest, AppResponse } from "../types/express";
import { StatusCode } from "../utils/constants/statusCode";
import { responseHelper } from "../utils/helpers";

export class AuthController {
  public static login = async (req: AppRequest, res: AppResponse) => {
    try {
      const data = await AuthService.login(req, res);
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
