import { AppNextFunction, AppRequest, AppResponse } from "../../types/express";
import { DatabaseConstant } from "../../utils/constants";
import { MetaDataDefault } from "../../types/request";
import { responseHelper } from "../../utils/helpers";
import { StatusCode } from "../../utils/constants/statusCode";
import { mockRootUser } from "../../mocks/user";

export const authenticated = (
  req: AppRequest<any, any, MetaDataDefault>,
  res: AppResponse,
  next: AppNextFunction,
) => {
  const { query } = req;

  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader)
    return responseHelper.sendError({ res, code: StatusCode.UNAUTHORIZED });
  const token = tokenHeader.split(" ")[1];
  const isValidToken = mockRootUser.access_token === token;
  if (!isValidToken)
    return responseHelper.sendError({ res, code: StatusCode.UNAUTHORIZED });

  console.log(`ミ Access Granted: ${token}🌲`);

  const metaData: MetaDataDefault["metadata"] = {
    offset: query?.offset ?? 0,
    limit: query?.limit ?? DatabaseConstant.DefaultLimit,
    orderBy: query?.orderBy ?? "ASC",
    sortBy: query?.sortBy,
    total: 0,
  };
  if (req.query) req.query.metadata = metaData;
  next();
};
