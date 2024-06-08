import { CreateBlog } from "@/actions/create-blog";
import { GetSession } from "@/actions/get-session";
import MarkdownEditor from "@/components/fixed/markdown-editor";
import { SubmitButton } from "@/components/fixed/submit-button";
import Link from "next/link";

const page = async () => {
  const session = await GetSession();
  const data = {
    author: session?.name,
    role: session?.role!,
  };

  const handleCreateBlog = async (formdata: FormData) => {
    "use server";
    await CreateBlog(formdata);
  };

  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Create a new blog</h1>
        <Link href={"/dashboard/blog/blogs"}>
          <p className="hover:text-blue-600 underline underline-offset-4">
            All blogs
          </p>
        </Link>
      </div>
      <div>
        <div className="font-semibold text-black">Posted by</div>
        <div className="flex items-center gap-x-2">
          <div className="uppercase h-10 w-10 bg-zinc-800 flex items-center justify-center rounded-full text-zinc-200 font-semibold">
            {data.author?.charAt(0)}
          </div>
          <div className="-space-y-1">
            <div className="text-lg font-medium">{data.author}</div>
            <div className="flex items-center text-sm">
              <span className="text-blue-600">{data?.role}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        <form action={handleCreateBlog} className="space-y-3">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="rounded-lg w-full" />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title">Category</label>
            <select name="category" id="category" className="rounded-lg w-full">
              <option value="select">Select</option>
              <option value="technology">Technology</option>
              <option value="film">Film</option>
              <option value="education">Education</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title">Description</label>
            <MarkdownEditor name="description" />
          </div>
          <p className="text-xs font-medium my-2">
            *Please, do not add blog while in preview mode
          </p>
          <div>
            <SubmitButton text="Create blog" loadingText="Creating blog..." />
          </div>
        </form>
      </div>
    </div>
  );
};
export default page;
