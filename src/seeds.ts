/**
 * This file is used to seed the database with initial data.
 * It connects to the database and inserts a user with a profile and a post.
 */
import { AppDataSource } from "../src/data-source";
import { User } from "./entities/User";
import { Profile } from "./entities/Profile";
import { Post } from "./entities/Post";
import { Tag } from "./entities/Tag";

async function seed() {
  await AppDataSource.initialize();

  const userRepo = AppDataSource.getRepository(User);

  const profile = new Profile();
  profile.bio = "Dev Fullstack apaixonado por arquitetura de software";

  const tag1 = new Tag();
  tag1.name = "TypeScript";

  const tag2 = new Tag();
  tag2.name = "Node.js";

  const post1 = new Post();
  post1.title = "Entendendo TypeORM";
  post1.tags = [tag1, tag2];

  const user = new User();
  user.name = "Maria Clara";
  user.profile = profile;
  user.posts = [post1];

  await userRepo.save(user);

  console.log("✅ Seeds inseridos com sucesso!");

  process.exit();
}

seed();
