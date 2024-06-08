import BlogCard from "@/components/card";
import BlogCategory from "@/components/fixed/blog-category";
import Spinner from "@/components/fixed/spinner";
import Capitalize from "@/utils/capitalize";
import { FC, Suspense } from "react";
import { getAllBlogs } from "@/actions/get-all-blogs";

interface QUERY {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchQuery: FC<QUERY> = async ({ searchParams }) => {
  const blogData = await getAllBlogs();
  const blogs = blogData?.filter((blog) =>
    blog.title.toLowerCase().includes(String(searchParams.query).toLowerCase())
  );

  return (
    <div className="container mx-auto flex flex-col justify-center px-4 md:px-8 gap-1 lg:px-14">
      <div className="mt-7">
        <BlogCategory
          title={
            "Search Results for : " + Capitalize(searchParams.query as string)
          }
          description={
            blogs === undefined
              ? "No search results"
              : `${blogs.length} search results`
          }
          menu={false}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
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
        </Suspense>
      </div>
    </div>
  );
};
export default SearchQuery;
