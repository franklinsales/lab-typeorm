// src/data-source.ts
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Profile } from "./entities/Profile";
import { Post } from "./entities/Post";
import { Tag } from "./entities/Tag";


// The DataSource instance is used to connect to the database and manage entities.
// In this case, we are using SQLite as the database.
// The database file will be created in the root directory of the project.
// The synchronize option is set to true, which means that the database schema will be automatically created
// based on the entities defined in the code.
// The logging option is set to false, which means that no SQL queries will be logged to the console.
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: false,
  entities: [User, Profile, Post, Tag],
  migrations: ['src/migrations/*.ts'],
});
