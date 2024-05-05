import { CollectionService } from "../services/collection.service";
import { AppRequest, AppResponse } from "../types/express";
import { StatusCode } from "../utils/constants/statusCode";
import { responseHelper } from "../utils/helpers";

export class CollectionController {
  public static collection = async (req: AppRequest, res: AppResponse) => {
    try {
      const { data, metadata } = await CollectionService.collection(req);
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
