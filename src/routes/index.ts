import express from "express";
/* Import part router */
import userRouter from "./user.router";
import { ServerConfigs } from "../utils/configs";

const appRouter = express.Router();

/* Use part router */
appRouter.use("/users", userRouter);

export default (app: express.Application) => {
  app.use(`/api/${ServerConfigs.API_VERSION}`, appRouter);
};
