import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma"; // Import your PrismaClient instance

const id = 1;

const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send("An unexpected error occurred");
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }

  export async function GET(){
    return NextResponse.json({
        hello:"World"
    })
}