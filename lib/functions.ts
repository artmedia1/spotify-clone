import Email from "next-auth/providers/email";
import prisma from "../lib/prisma"; // Import your PrismaClient instance

export async function checkIfRegistered(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
  
  export async function registerUser(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }