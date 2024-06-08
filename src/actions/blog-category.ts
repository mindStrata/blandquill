import prisma from "@/lib/client";
import { Category } from "@prisma/client";

export async function getBlogByCategory(category: string | Category) {
  try {
    await prisma.$connect();
    const blogCategory = await prisma.blog.findMany({
      where: {
        category: category as Category,
      },
    });
    if (!blogCategory) return null;
    return blogCategory;
  } catch (error) {
    throw new Error("Error occured.");
  } finally {
    await prisma.$disconnect()
  }
}
