import { AppNextFunction, AppRequest, AppResponse } from "../types/express";
import { Entities } from "../data-source";
import { responseHelper } from "../utils/helpers";
import { httpStatusCodes } from "../utils/constants/httpStatusCodes";

export const isUserIdExisted = async (
  req: AppRequest,
  res: AppResponse,
  next: AppNextFunction,
) => {
  const userId = req?.params?.id;
  if (!userId)
    return responseHelper.sendError({ res, code: httpStatusCodes.NOT_FOUND });
  const user = await Entities.repoUser.findOne({ where: { id: userId } });
  if (!user)
    return responseHelper.sendError({ res, code: httpStatusCodes.NOT_FOUND });
  next();
};
