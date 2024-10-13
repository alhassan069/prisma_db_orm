import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Prisma queries

    // 1 Create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "ali",
    //         email: "ali@gmail.com"
    //     },
    // });

    // console.log(user)

    // 2 Get all users
    // const users = await prisma.user.findMany();
    // console.log(users);

    // 3 Create an article and associate it with user
    
}

main()
    .then(async ()=>{
        await prisma.$disconnect();
    })
    .catch(async (e)=>{
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })