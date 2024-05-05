import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  OneToMany,
  ManyToMany,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { DatabaseConstant } from "../utils/constants";
import { cryptoHelper } from "../utils/helpers";
import { Address } from "./address.entity";
import { Permission } from "./permission.entity";
import { UserMeta } from "./user-meta.entity";

@Entity(DatabaseConstant.TABLE.user)
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Address, "user_id")
  @JoinTable()
  addresses: Address[];

  @ManyToMany(() => Permission, (permission) => permission.users)
  @JoinTable({
    name: "rel_user_permission",
    joinColumn: { name: "user_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "permission_id", referencedColumnName: "id" },
  })
  permissions: Permission[];

  @OneToOne(() => UserMeta, (meta) => meta.user)
  @JoinColumn()
  meta: UserMeta;

  @Column({ nullable: true })
  meta_id: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    name: "created_at",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
    name: "updated_at",
  })
  updated_at: Date;

  public setPassword(password: string) {
    this.password = cryptoHelper.hash(password, "UQSystem");
  }

  public checkIsUserPassword(password: string) {
    const hash = cryptoHelper.hash(password, "UQSystem");
    return hash === this.password;
  }
}
