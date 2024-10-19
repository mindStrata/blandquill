import prisma from "@/lib/client";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next/types";

// Create a single Prisma client instance (connection pooling)
/* const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // Enable Prisma logging for query analysis and debugging
}); */

// Utility function to format error responses
const createErrorResponse = (statusCode: number, message: string) => {
  return NextResponse.json({ error: message }, { status: statusCode });
};

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Retrieve blogs sorted by createdAt in descending order
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Check if blogs were found
    if (!blogs || blogs.length === 0) {
      return createErrorResponse(404, "No blogs found");
    }

    // Return blogs with a success response
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    // Improved error handling
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle known Prisma errors
      console.error("Prisma error:", error.message);
      return createErrorResponse(400, "Database error");
    } else if (error instanceof Error) {
      // Log general errors
      console.error("General error:", error.message);
      return createErrorResponse(500, "Internal server error");
    } else {
      // Fallback for unknown errors
      console.error("Unknown error:", error);
      return createErrorResponse(500, "Something went wrong");
    }
  }
};

// Ensure Prisma client is properly disconnected on process exit (connection pooling cleanup)
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
});
