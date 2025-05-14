// src/entities/Post.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";

@Entity()
export class Post {
  @PrimaryGeneratedColumn() // This decorator marks the property as a primary key and auto-generates its value.
  id!: number;

  @Column() // This decorator marks the property as a column in the database.
  title!: string;

  @ManyToOne(() => User, user => user.posts) // This decorator creates a many-to-one relationship with the User entity.
  author!: User;

  @ManyToMany(() => Tag, tag => tag.posts, { cascade: true }) // This decorator creates a many-to-many relationship with the Tag entity.
  @JoinTable() // This decorator specifies that this table is the owner of the relationship. This means that this table will contain the foreign keys to the related table.
  tags!: Tag[];
}
