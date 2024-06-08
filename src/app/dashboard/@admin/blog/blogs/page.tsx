import { getBlogByUserId } from "@/actions/get-all-blogs";
import { GetSession } from "@/actions/get-session";
import BlogCard from "@/components/card";
import { convertUtcDateToLocal } from "@/utils/date-converter";

const page = async () => {
  const sesssion = await GetSession();
  let blog = await getBlogByUserId(sesssion?.id!)!;
  let name = sesssion?.name;

  return (
    <div>
      {!blog?.length || blog === null ? (
        <div>
          <h1 className="text-2xl font-semibold">
            {name}, you do not have blog yet
          </h1>
          <p>Create a blog now!</p>
        </div>
      ) : (
        <div>
          {blog?.map((item) => {
            return (
              <BlogCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                author={item.author}
                role={sesssion?.role!}
                createdAt={convertUtcDateToLocal(String(item.createdAt))}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default page;
