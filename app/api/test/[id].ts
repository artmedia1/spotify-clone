// pages/api/users/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"; // Import your PrismaClient instance

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
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
}
