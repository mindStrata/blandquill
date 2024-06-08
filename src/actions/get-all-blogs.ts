import prisma from "@/lib/client";

export async function getAllBlogs() {
  try {
    await prisma.$connect();
    const blogs = await prisma.blog.findMany({
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
