import prisma from "@/lib/client";

export async function getBlogInfo(id: string) {
  try {
    await prisma.$connect();
    const blogInfo = await prisma.blog.findUnique({
      where: { id },
    });
    if (!blogInfo) return null;
    return blogInfo;
  } catch (error) {
    throw new Error("Error occured.")
  } finally {
    await prisma.$disconnect()
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.$connect();
    await prisma.blog.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Error occured while deleting blog");
  } finally {
    await prisma.$disconnect();
  }
}
