import { getBlogByCategory } from "@/actions/blog-category";
import { getAllBlogs } from "@/actions/get-all-blogs";
import BarChart from "@/components/barchart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/client";
import { Rss, ShieldCheck, Users } from "lucide-react";

const page = async () => {
  const technology = await getBlogByCategory("technology");
  const education = await getBlogByCategory("education");
  const sports = await getBlogByCategory("sports");
  const film = await getBlogByCategory("film");
  const data = [
    {
      name: "Technology",
      total: String(technology?.length),
    },
    {
      name: "Education",
      total: String(education?.length),
    },
    {
      name: "Sports",
      total: String(sports?.length),
    },
    {
      name: "Film",
      total: String(film?.length),
    },
  ];
  let isFetching = false;

  const totalBlogs = await getAllBlogs();
  const user = await prisma.user.findMany();
  const admin = user.filter((user) => user.role === "admin");

  const overView = [
    {
      id: 1,
      title: "Total Blogs",
      icon: <Rss size={19} />,
      data: String(totalBlogs?.length),
    },
    {
      id: 2,
      title: "Total user",
      icon: <Users size={19} />,
      data: String(user.length),
    },
    {
      id: 5,
      title: "Admins",
      icon: <ShieldCheck size={19} />,
      data: String(admin.length),
    },
  ];

  return (
    <div>
      <div>
        <div className="flex justify-evenly md:justify-between lg:justify-evenly flex-wrap gap-3 md:gap-4">
          {overView &&
            overView.map((i) => {
              return (
                <Card key={i.id} className="w-full md:w-64">
                  <CardHeader>
                    <CardTitle className="text-xl flex justify-between items-center">
                      <span>{i.title}</span>
                      <span>{i.icon}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-semibold text-2xl">
                    {i.data}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
      <div className="my-8">
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>
              Total number of blogs based on category
            </CardDescription>
          </CardHeader>
          <CardContent className="lg:px-36">
            <BarChart data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default page;
