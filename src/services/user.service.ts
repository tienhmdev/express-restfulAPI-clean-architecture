import { Entities } from "../data-source";
import { UserMeta } from "../models/user-meta.entity";
import { AppRequest } from "../types/express";
import { columnExists } from "./helpers/check";
import { addPaging, addSearch } from "./helpers/search";

type DetailUserRequest = AppRequest<
  any,
  {
    id: string | undefined;
  },
  any
>;

export class UserService {
  public static users = async (request: AppRequest) => {
    const { query } = request;

    const usersQuery = Entities.repoUser
      .createQueryBuilder("user")
      .leftJoinAndMapOne(
        "user.meta",
        UserMeta,
        "meta",
        "meta.id = user.meta_id",
      );
    addPaging(usersQuery, request, "user");

    if (
      columnExists(Entities.repoUser, request.query?.searchBy) &&
      request.query?.searchKeywords
    )
      addSearch(usersQuery, request, "user");

    const total = await usersQuery.getCount();
    const usersResult = await usersQuery.getMany();

    return { data: usersResult, metadata: { ...query?.metadata, total } };
  };

  public static detail = async (request: DetailUserRequest) => {
    const { params } = request;

    const userQuery = Entities.repoUser
      .createQueryBuilder("user")
      .where("user.id = :id", { id: params?.id });

    const userResult = await userQuery.getOne();

    return { data: userResult };
  };
}
