import { TagService } from "../services/tag.service";
import { AppRequest, AppResponse } from "../types/express";
import { StatusCode } from "../utils/constants/statusCode";
import { responseHelper } from "../utils/helpers";

export class TagController {
  public static tag = async (req: AppRequest, res: AppResponse) => {
    try {
      const { data, metadata } = await TagService.tag(req);
      responseHelper.sendCollection(res, data, metadata);
    } catch (error) {
      responseHelper.sendError({
        res,
        code: StatusCode.INTERNAL_SERVER_ERROR,
        cause: error,
      });
    }
  };
}
