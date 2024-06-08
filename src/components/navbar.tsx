import Link from "next/link";
import Logo from "./fixed/logo";
import ProfileIcon from "./fixed/profile-icon";
import Search from "./fixed/search";

const Navbar = async () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-14 bg-white z-50 backdrop-filter backdrop-blur-2xl bg-opacity-65">
          <div className="flex flex-row justify-between items-center py-4">
            <div>
              <Link href={"/"}>
                <Logo className="text-xl font-medium" />
              </Link>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="hidden lg:flex">
                <Search />
              </div>
              <div>
                <ProfileIcon />
              </div>
            </div>
          </div>
          <div className="block lg:hidden w-full my-1">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
