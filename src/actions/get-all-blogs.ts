import prisma from "@/lib/client";

/**
 * @function getAllBlogs() - replaced with api
 * @api GET /api/blog
 *
 */

export async function getBlogByUserId(id: string) {
  try {
    await prisma.$connect();
    const blogs = await prisma.blog.findMany({
      where: {
        userId: id!,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!blogs) return null;
    return blogs;
  } catch (error) {
    throw new Error("Error occured");
  } finally {
    await prisma.$disconnect();
  }
}
