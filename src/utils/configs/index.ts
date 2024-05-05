import * as dotenv from "dotenv";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
dotenv.config(); // Initialize .env.

export const ServerConfigs = {
  PORT: +(process.env.PORT ?? "3000"),
  DS_TYPE: (process.env.DS_TYPE ?? "postgres") as any,
  DS_HOST: process.env.DS_HOST ?? "--missing / src/utils/config--",
  DS_PORT: +(process.env.DS_PORT ?? "5432"),
  DS_USERNAME: process.env.DS_USERNAME ?? "--missing / src/utils/config--",
  DS_PASSWORD: process.env.DS_PASSWORD ?? "--missing / src/utils/config--",
  DS_DATABASE: process.env.DS_DATABASE ?? "--missing / src/utils/config--",
  DS_LOGGING: Boolean(process.env.DS_LOGGING ?? "false"),
  API_VERSION: process.env.API_VERSION ?? "v1",
};
