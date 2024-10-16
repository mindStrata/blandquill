import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await prisma.$connect();
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!blogs) return NextResponse.json({ blog: null });
    return NextResponse.json({ blogs });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}
