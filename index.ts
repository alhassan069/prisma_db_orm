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
    // const article = await prisma.article.create({
    //     data: {
    //         title: "My first Article", 
    //         body: "This is my first article dedicated to learning prisma orm",
    //         author: {
    //             connect: {
    //                 id: 1,
    //             },
    //         },
    //     },
    // });

    // 4 get an article
    // const article = await prisma.article.findMany();
    // console.log(article)
    
    // create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Alimul",
    //         email: "alimul@gmail.com",
    //         articles: {
    //             create: {
    //                 title: "Alimul's first article",
    //                 body: "This is alimul's first article"
    //             }
    //         }
    //     }
    // })
    // console.log(user)

    // 5 get all users with their articles
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // });
    // // console.log(users)
    // users.forEach((user)=>{
    //     console.log(`User: ${user.name}, Email: ${user.email}`);
    //     console.log('Articles');
    //     user.articles.forEach((article)=>{
    //         console.log(`-Title: ${article.title}, Body: ${article.body}`);
    //     })
    //     console.log('\n');
    // })

    // 6 Uppdate data
    // const user = await prisma.user.update({
    //     where: {
    //         id:1
    //     },
    //     data: {
    //         name: 'John Doe Jr.',
    //     },
    // });
    // console.log(user);

    // 6 Delete data
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 2
    //     },
    // });
    // console.log(article);
    // const articles = await prisma.article.findMany();
    // console.log(articles)

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })