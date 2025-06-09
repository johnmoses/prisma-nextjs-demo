import { PrismaClient } from '@prisma/client';
import { Users } from './data/users';
import {Posts} from './data/posts';

const prisma = new PrismaClient();

async function runSeeders() {
  // Users
  await Promise.all(
    Users.users.map(async (user: any) =>
      prisma.user.upsert({
        where : { id: user.id },
        update: {},
        create: user,
      })
    )
  );

  // Posts
  await Promise.all(
    Posts.posts.map(async (post: any) =>
      prisma.post.upsert({
        where: { id: post.id },
        update: {},
        create: post,
      })
    )
  );
}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });