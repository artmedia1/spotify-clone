import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";



// Test local NextJs API /api/test method POST with variables
export const POST = async (req: Request) => {
  const { email, password } = await req.json();
  const jwtSecret = process.env.JWT_SECRET as string;
  let data;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "1h",
      });
      console.log(user);
      data = token;
    } else {
      data = "Invalid credentials";
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    data = "An unexpected error occurred";
  }

  console.log("logged in!")
  return NextResponse.json({
    data,
  });
};
