import SVG from "@/../../public/no-data.svg";
import { getBlogByCategory } from "@/actions/blog-category";
import BlogCard from "@/components/card";
import BlogCategory from "@/components/fixed/blog-category";
import Spinner from "@/components/fixed/spinner";
import WorkingPage from "@/components/fixed/working-page";
import Capitalize from "@/utils/capitalize";
import { Metadata } from "next";
import { FC, Suspense } from "react";

interface Category {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Dynamic Metadata
export async function generateMetadata({
  params: { category },
  searchParams,
}: Category): Promise<Metadata> {
  return {
    title: Capitalize(category as string) + " - BlandQuill",
    description: (category as string) + " - BlandQuill",
  };
}

const CategoryPage: FC<Category> = async ({
  params: { category },
  searchParams,
}) => {
  const blogs = await getBlogByCategory(category);

  return (
    <div className="container mx-auto flex flex-col justify-center px-4 md:px-8 gap-1 lg:px-14">
      <div className="my-7">
        <BlogCategory title={Capitalize(category as string)} />
        {blogs === null || !blogs?.length ? (
          <div className="my-7 flex justify-center">
            <WorkingPage
              title={`No blog content yet on "${Capitalize(
                category as string
              )}"`}
              image={SVG}
              description="Stay tuned"
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
