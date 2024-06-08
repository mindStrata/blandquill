// import deleteBlog from "@/actions/blog/delete-blog";
import { deleteBlog } from "@/actions/blog-info";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BlogDataType } from "@/types/global-types";
import { convertUtcDateToLocal } from "@/utils/date-converter";
import { Dot, Trash2 } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { FC, ReactNode } from "react";

const BlogCard: FC<BlogDataType> = ({
  id,
  category,
  author,
  title,
  createdAt,
  description,
  role,
}) => {
  return (
    <>
      <div>
        <div className="w-full">
          <div className="col-span-1 py-1 m-3 flex flex-col justify-between">
            <div>
              <p className="text-xs flex justify-between ">
                <span className="font-semibold text-[12px] capitalize">
                  {category}
                </span>
                {role === "admin" && (
                  <span className="cursor-pointer hover:text-red-700 transition-colors">
                    <DeleteBlog id={id as string} title={title}>
                      <Trash2 size={18} />
                    </DeleteBlog>
                  </span>
                )}
              </p>
              <h1
                className={`text-[20px] lg:text-[26px] leading-6 md:leading-snug capitalize font-bold`}
              >
                <Link
                  href={`/blog/${id}/`}
                  className="hover:underline hover:underline-offset-2 hover:text-blue-700 transition-colors"
                >
                  {title}
                </Link>
              </h1>
            </div>
            <div className="space-y-1">
              <span className="text-zinc-800 text-sm flex items-center">
                {author} <Dot /> {convertUtcDateToLocal(createdAt as string)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;

type Props = {
  children: ReactNode;
  id: string;
  title: string;
};

//Delete blog by id
export function DeleteBlog({ children, id, title }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="text-zinc-800">&quot;{title}&quot;</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form
            action={async () => {
              "use server";
              await deleteBlog(id);
              revalidatePath("/(b)/all-blogs");
            }}
          >
            <AlertDialogAction type="submit" className="w-full">
              Continue
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
