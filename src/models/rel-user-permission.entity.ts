import { Entity, Column, BaseEntity } from "typeorm";
import { DatabaseConstant } from "../utils/constants";

@Entity(DatabaseConstant.TABLE.relUserPermission)
export class RelUserPermission extends BaseEntity {
  @Column({ primary: true })
  user_id: number;

  @Column({ primary: true })
  permission_id: number;
}
