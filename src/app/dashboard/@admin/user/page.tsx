import DataTable from "@/components/data-table";
import prisma from "@/lib/client";

const page = async () => {
  const data = await prisma.user.findMany();

  return (
    <div className="overflow-auto">
      <DataTable TableTitle="All User" userData={data} />
    </div>
  );
};
export default page;
