import SVG from "@/../../public/no-data.svg";
// import { getAllBlogs } from "@/actions/get-all-blogs";
import BlogCard from "@/components/card";
import BlogPosts from "@/components/client/getblogs";
import BlogCategory from "@/components/fixed/blog-category";
import Spinner from "@/components/fixed/spinner";
import WorkingPage from "@/components/fixed/working-page";
import { Suspense } from "react";

const Page = async () => {
  // const blogs = await getAllBlogs();

  return (
    <main className="container mx-auto flex flex-col justify-center px-4 md:px-8 gap-1 lg:px-14">
      <div className="my-7">
        <BlogCategory title="All Posts" />

        {/*  {blogs?.length === 0 ? (
          <div>
            <WorkingPage
              title="No blog yet!"
              description="Stay tuned"
              image={SVG}
            />
          </div>
        ) : (
          <div>
            <Suspense
              fallback={
                <div>
                  <Spinner />
                </div>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {blogs &&
                  blogs.map((item) => {
                    return (
                      <BlogCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}
                        category={item.category}
                        createdAt={String(item.createdAt)}
                      />
                    );
                  })}
              </div>
            </Suspense>
          </div>
        )} */}

        <BlogPosts />
      </div>
    </main>
  );
};
export default Page;
