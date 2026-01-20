import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupSchema } from "@/app/schemas/signup.schema";
import { prisma } from "@/lib/prisma";
import { ZodError } from "zod";
import { signJwt } from "@/lib/jwt";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    
    const validatedData = signupSchema.parse(body);
    const { name, email, password } = validatedData;

    
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

   
    const hashedPassword = await bcrypt.hash(password, 12);

    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    
    const token = signJwt({
      userId: user.id,
      email: user.email,
    });

    
    const response = NextResponse.json(
      { message: "Signup successful" },
      { status: 201 }
    );

    response.cookies.set("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
