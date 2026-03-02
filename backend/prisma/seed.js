import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.student.deleteMany();

  await prisma.student.createMany({
    data: [
      {
        first_name: 'Altay',
        last_name: 'Hodoglugil',
        check_in_time: new Date(),
      },
      {
        first_name: 'Lebron',
        last_name: 'James',
        check_in_time: new Date(),
      },
      {
        first_name: 'Stephen',
        last_name: 'Curry',
        check_in_time: new Date(),
      },
    ],
  });
  console.log('Database seeded');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
