import { auth } from "@/auth";
import prisma from "@/lib/client";

export async function GetSession() {
  const session = await auth();
  try {
    if (session) {
      await prisma.$connect();
      const user = await prisma.user.findUnique({
        where: { email: session.user?.email! },
      });
      if (!user) return null;
      return user;
    }
    return null;
  } catch (error) {
    throw new Error("Error occured");
  } finally {
    await prisma.$disconnect();
  }
}
