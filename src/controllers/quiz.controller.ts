import { CollectionService } from "../services/collection.service";
import { QuizService } from "../services/quiz.service";
import { AppRequest, AppResponse } from "../types/express";
import { StatusCode } from "../utils/constants/statusCode";
import { responseHelper } from "../utils/helpers";

export class QuizController {
  public static quiz = async (req: AppRequest, res: AppResponse) => {
    try {
      const { data, metadata } = await QuizService.quiz(req);
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
      const data = await QuizService.detail(req, res);
      responseHelper.sendObject(res, data);
    } catch (error) {
      console.log({ error });

      responseHelper.sendError({
        res,
        code: StatusCode.INTERNAL_SERVER_ERROR,
        cause: error,
      });
    }
  };
}
