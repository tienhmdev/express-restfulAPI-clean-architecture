import { SelectQueryBuilder } from "typeorm";
import { AppRequest } from "../../types/express";
import { DatabaseConstant } from "../../utils/constants";

export const addPaging = (
  builder: SelectQueryBuilder<any>,
  req: AppRequest,
  sortAlias: string,
) => {
  builder
    .offset(req.query?.metadata?.offset ?? 0)
    .limit(req.query?.metadata?.limit ?? DatabaseConstant.DefaultLimit)
    .orderBy(
      `${sortAlias}.${req.query?.metadata?.sortBy ?? "created_at"}`,
      req.query?.metadata?.orderBy ?? "ASC",
    );
};

export const addSearch = (
  builder: SelectQueryBuilder<any>,
  req: AppRequest,
  searchAlias: string,
) => {
  if (req.query?.searchBy && req.query?.searchKeywords) {
    builder.andWhere(
      `LOWER(${searchAlias}.${req.query?.searchBy?.escape() ?? "name"}) LIKE LOWER(:searchKeywords)`,
      {
        searchKeywords: `%${req.query?.searchKeywords?.escape()}%`,
      },
    );
  }
};
