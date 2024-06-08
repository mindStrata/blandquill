import SVG from "@/../../public/error-delete.svg";
import { getBlogInfo } from "@/actions/blog-info";
import Spinner from "@/components/fixed/spinner";
import WorkingPage from "@/components/fixed/working-page";
import { convertUtcDateToLocal } from "@/utils/date-converter";
import { Dot } from "lucide-react";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, Suspense } from "react";
import GoBack from "./go-back";

interface ID {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Dynamic Metadata
export async function generateMetadata({
  params: { id },
  searchParams,
}: ID): Promise<Metadata> {
  const data = await getBlogInfo(id);
  return {
    title: data?.title,
    description: data?.description,
  };
}

const SingleBlogPage: FC<ID> = async ({ params: { id }, searchParams }) => {
  const data = await getBlogInfo(id);

  if (data === null || data === undefined) {
    return (
      <div className="my-4 lg:my-10">
        <WorkingPage
          title="Something went worng!!"
          description="Blog might be deleted!"
          image={SVG}
        />
      </div>
    );
  }

  return (
    <>
      <GoBack />
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <div>
          <div>
            <div>
              <h1 className="capitalize font-extrabold">{data?.title}</h1>
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
                    <span className="text-blue-600 capitalize">
                      {data?.category}
                    </span>
                    <Dot />
                    {convertUtcDateToLocal(String(data?.createdAt))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MDXRemote source={data?.description!} />
        </div>
      </Suspense>
    </>
  );
};
export default SingleBlogPage;
