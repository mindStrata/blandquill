import BlogCard from "@/components/card";
import BlogCategory from "@/components/fixed/blog-category";
import Spinner from "@/components/fixed/spinner";
import { getAllBlogs } from "@/actions/get-all-blogs";
import { convertUtcDateToLocal } from "@/utils/date-converter";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Img from "../../public/article.png";
import WorkingPage from "@/components/fixed/working-page";
import SVG from "../../public/no-data.svg";

export default async function Home() {
  const blog = await getAllBlogs();
  const blogs = blog
    ?.reverse()
    .slice(0, blog.length - 1)
    .reverse();
  const lastBlog = blog?.slice(-1);

  return (
    <>
      <main className="container mx-auto flex flex-col justify-center px-4 md:px-8 gap-1 lg:px-9">
        <BlogCategory
          title="Recent Blogs"
          description={`Last posted ${blogs?.length} blogs`}
        />
        <div className="grid md:grid-cols-3 md:grid-rows-2">
          <div className="relative h-full w-full md:col-span-2 md:row-span-2 rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
            <Image
              src={Img}
              alt="image"
              height={7000}
              width={9000}
              priority={true}
              className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg brightness-95 h-full w-full"
            />
          </div>
          <div className="h-full w-full row-span-2 bg-zinc-200 px-3 py-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg flex items-center">
            <Suspense
              fallback={
                <div>
                  <Spinner />
                </div>
              }
            >
              {lastBlog?.map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <p className="font-semibold text-[12px]">
                        {item.category}
                      </p>
                    </div>
                    <div>
                      <h1
                        className={`text-[20px] lg:text-[36px] leading-6 md:leading-snug capitalize font-extrabold`}
                      >
                        <Link
                          href={`/blog/${item.id}/`}
                          className="hover:underline hover:underline-offset-2 hover:text-blue-700 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </h1>
                    </div>
                    <div>
                      <span className="text-zinc-800 text-sm flex items-center">
                        {item.author} <Dot />{" "}
                        {convertUtcDateToLocal(String(item.createdAt))}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Suspense>
          </div>
        </div>
        <div className="mb-7">
          {blogs?.length === 0 ? (
            <div>
              <WorkingPage
                title="No blog yet!"
                description="Stay tuned"
                image={SVG}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
              <Suspense
                fallback={
                  <div>
                    <Spinner />
                  </div>
                }
              >
                {blogs &&
                  blogs?.map((item) => {
                    return (
                      <BlogCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}
                        category={item.category}
                        createdAt={convertUtcDateToLocal(
                          String(item.createdAt)
                        )}
                      />
                    );
                  })}
              </Suspense>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
