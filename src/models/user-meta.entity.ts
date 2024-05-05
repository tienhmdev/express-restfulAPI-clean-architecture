import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { DatabaseConstant } from "../utils/constants";
import { cryptoHelper } from "../utils/helpers";
import { User } from "./user.entity";

@Entity(DatabaseConstant.TABLE.userMeta)
export class UserMeta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  data: string;

  @OneToOne(() => User, (user) => user.meta)
  @JoinColumn()
  user: User;

  @Column()
  user_id: string;

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
}
