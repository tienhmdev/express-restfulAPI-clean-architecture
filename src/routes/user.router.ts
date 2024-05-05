import express from "express";
import { UserController } from "../controllers/user.controller";
import { queryMetaValidator } from "../validations/common/meta.validator";
import { authenticated } from "../middleware/common/authen.middleware";
import { querySearchValidator } from "../validations/common/search.validator";
import { isUserIdExisted } from "../middleware/user.middleware";
import { userValidator } from "../validations/user.validator";

const userRouter = express.Router();

userRouter.get(
  "/",
  [...queryMetaValidator, ...querySearchValidator, authenticated],
  UserController.users,
);
userRouter.get(
  "/:id",
  [...userValidator, isUserIdExisted, authenticated],
  UserController.detail,
);

export default userRouter;
