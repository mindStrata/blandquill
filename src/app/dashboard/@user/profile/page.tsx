import { GetSession } from "@/actions/get-session";
import Profile from "@/components/profile";

const page = async () => {
  const session = await GetSession();
  return (
    <div>
      <Profile name={session?.name!} email={session?.email!} />
    </div>
  );
};
export default page;
