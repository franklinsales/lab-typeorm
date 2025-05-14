// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "./Profile";
import { Post } from "./Post";

@Entity() // This decorator marks the class as a database entity.
export class User {
  @PrimaryGeneratedColumn() // This decorator marks the property as a primary key and auto-generates its value.
  id!: number;

  @Column() // This decorator marks the property as a column in the database.
  name!: string;

  // This decorator creates a one-to-one relationship with the Profile entity.
  @OneToOne(() => Profile, profile => profile.user, { cascade: true })
  profile!: Profile;

  // This decorator creates a one-to-many relationship with the Post entity.
  @OneToMany(() => Post, post => post.author)
  posts!: Post[];
}
