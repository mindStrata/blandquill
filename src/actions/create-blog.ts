import prisma from "@/lib/client";
import { Category } from "@prisma/client";
import { GetSession } from "./get-session";

export async function CreateBlog(formdata: FormData) {
  const user = await GetSession();
  const title = formdata.get("title") as string;
  const category = formdata.get("category") as Category;
  const description = formdata.get("description") as string;
  //save the data to the database
  if (!title || !category || !description || !description) return;
  try {
    await prisma.$connect();
    await prisma.blog.create({
      data: {
        title: title,
        author: user?.name!,
        category: category,
        description: description,
        userId: user?.id,
      },
    });
  } catch (error) {
    throw new Error("Error occured");
  } finally {
    await prisma.$disconnect()
  }
}
