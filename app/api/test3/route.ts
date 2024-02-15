import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

// Test local NextJs API /api/test method GET with parameters
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  const reqData = Object.fromEntries(searchParams);
  console.log(reqData);
  const haha = reqData["id"];
  let data;

  try {
    const id = reqData["id"];
    console.log(id);
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (user) {
      data = user;
    } else {
      data = "User not found";
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      data = "An unexpected error occurred";
    }
  }
  return NextResponse.json({
    data,
  });
};

// Test local NextJs API /api/test method POST with variables
export const POST = async (req: Request) => {
  const reqData = await req.json();
  console.log(reqData);
  return NextResponse.json({
    message: "Test postApiResponse POST success!",
    method: "POST",
    reqData,
  });
};
