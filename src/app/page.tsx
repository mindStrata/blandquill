import BlogPosts from "@/components/client/getblogs";
import BlogCategory from "@/components/fixed/blog-category";

export default async function Home() {
  return (
    <>
      <main className="container mx-auto flex flex-col justify-center px-4 md:px-8 gap-1 lg:px-9">
        <BlogCategory
          title="Recent Blogs"
          description={`Last posted ${10} blogs`}
        />
        <BlogPosts />
      </main>
    </>
  );
}
