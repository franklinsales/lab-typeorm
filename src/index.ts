// src/index.ts
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { User } from "./entities/User";
import { Profile } from "./entities/Profile";
import { Post } from "./entities/Post";
import { Tag } from "./entities/Tag";

const tag1 = new Tag();
tag1.name = "TypeScript";

const tag2 = new Tag();
tag2.name = "Node.js";

const tag3 = new Tag();
tag3.name = "ORM";

AppDataSource.initialize().then(async () => {
  console.log("📦 Banco conectado!");

  const userRepo = AppDataSource.getRepository(User);

  const profile = new Profile();
  profile.bio = "Desenvolvedor apaixonado por TypeScript";

  const user = new User();
  user.name = "João Silva";
  user.profile = profile;

  const post1 = new Post();
  post1.title = "Primeiro post";
  post1.tags = [tag1, tag2];

  const post2 = new Post();
  post2.title = "Segundo post";
  post2.tags = [tag3];

  user.posts = [post1, post2];

  await userRepo.save(user);

  const users = await userRepo.find({
    relations: {
      profile: true,
      posts: {
        tags: true,
      },
    },
  });

  console.dir(users, { depth: null });

  process.exit();
});
