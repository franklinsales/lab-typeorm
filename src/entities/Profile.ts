// src/entities/Profile.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity() // This decorator marks the class as a database entity.
export class Profile {
  @PrimaryGeneratedColumn() // This decorator marks the property as a primary key and auto-generates its value.
  id!: number;

  @Column() // This decorator marks the property as a column in the database.
  bio!: string;

  @OneToOne(() => User, user => user.profile) // This decorator creates a one-to-one relationship with the User entity.
  @JoinColumn() // This decorator specifies that this column is the owner of the relationship. This means that this table will contain the foreign keys to the related table.
  user!: User;
}
