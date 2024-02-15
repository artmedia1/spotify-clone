import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main(){
    // ... you will write your Prisma Client queries here

    // const user = await prisma.user.create({
    //     data: {
    //       email: 'alphabet2@example.com',
    //       firstName: 'John2',
    //       lastName: 'Doe3',
    //       password: 'encrypted_password_here', // Make sure this is securely hashed
    //       createdAt: new Date(), // Prisma automatically handles `createdAt` and `updatedAt`
    //       updatedAt: new Date()  // if these default values are defined in your model
    //     }
    //   });
    const password = "password"
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
          password: hashedPassword, // Make sure this is securely hashed
          createdAt: new Date(), // Prisma automatically handles `createdAt` and `updatedAt`
          updatedAt: new Date()  // if these default values are defined in your model
        }
      });
      
    const userEmail = 'alphabet';
    const findUser = await prisma.user.findMany({
        where: {
            email:{
                contains: userEmail
            }
        },
    });

    if (findUser) {
        console.log(findUser);
    } else {
        console.log(`No user found with email ${userEmail}`);
    }
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect
})