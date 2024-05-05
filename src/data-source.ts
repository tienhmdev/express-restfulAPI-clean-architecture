import { DataSource } from "typeorm";
import { User } from "./models/user.entity";
import { ServerConfigs } from "./utils/configs";
import { UserMeta } from "./models/user-meta.entity";
import { Permission } from "./models/permission.entity";
import { Address } from "./models/address.entity";
import { RelUserPermission } from "./models/rel-user-permission.entity";
/* Import new entity */

const AppDataSource = new DataSource({
  type: ServerConfigs.DS_TYPE,
  host: ServerConfigs.DS_HOST,
  port: ServerConfigs.DS_PORT,
  username: ServerConfigs.DS_USERNAME,
  password: ServerConfigs.DS_PASSWORD,
  database: ServerConfigs.DS_DATABASE,
  synchronize: true,
  logging: ServerConfigs.DS_LOGGING,
  entities: [
    User,
    UserMeta,
    Permission,
    Address,
    RelUserPermission,
    /* Add new entity */
  ],
  migrations: ["src/migrations/**/*.ts"],
  ssl: false,
});

export class Entities {
  static repositories = AppDataSource;
  static repoUser = AppDataSource.getRepository(User);
  static repoRelUserPermission = AppDataSource.getRepository(RelUserPermission);
  static repoAddress = AppDataSource.getRepository(Address);
  static repoPermission = AppDataSource.getRepository(Permission);
  static repoUserMeta = AppDataSource.getRepository(UserMeta);
  /* Define new repository */
}

export default AppDataSource;
