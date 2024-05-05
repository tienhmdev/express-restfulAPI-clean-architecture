import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { DatabaseConstant } from "../utils/constants";
import { User } from "./user.entity";

@Entity(DatabaseConstant.TABLE.address)
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @ManyToOne(() => User, { eager: false, nullable: true })
  @JoinColumn({
    name: "address_id",
    referencedColumnName: "id",
  })
  user: User;

  @Column({ nullable: true })
  user_id: number;

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
