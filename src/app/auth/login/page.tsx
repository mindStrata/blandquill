import { auth } from "@/auth";
import Login from "@/components/login";
import { redirect, RedirectType } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <div>
      <Login />
    </div>
  );
};
export default Page;
