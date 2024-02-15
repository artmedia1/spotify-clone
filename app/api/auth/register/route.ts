import { NextResponse } from "next/server";
import { z } from 'zod';
import { checkIfRegistered } from '../../../../lib/functions'

// Define the schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" })
});

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const validatedData = loginSchema.parse({ email, password });
    console.log("Validation passed", validatedData);
    console.log({ email, password });

    const user = await checkIfRegistered(email);
    const message = user ? "Ok" : "No";
    console.log(message);
    return NextResponse.json({
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      message:{message}});

  } catch (e) {
    if (e instanceof z.ZodError) {
      // Handle validation errors
      return new NextResponse(JSON.stringify({ error: e.errors }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // Handle other errors
      console.error(e);
      return new Response(JSON.stringify({ error: "An unexpected error occurred" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}
