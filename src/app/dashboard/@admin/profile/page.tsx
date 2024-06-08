import { GetSession } from "@/actions/get-session";
import Profile from "@/components/profile";

const page = async () => {
  const session = await GetSession();
  return (
    <div>
      <Profile email={session?.email!} name={session?.name!} />
    </div>
  );
};
export default page;
