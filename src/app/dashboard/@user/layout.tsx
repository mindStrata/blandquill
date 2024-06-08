import Sidebar from "@/components/sidebar";
import SidebarMenu from "@/components/sidebar-mobile";
import { User } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const links = [
  {
    id: 5,
    href: "/dashboard/profile",
    icon: <User size={22} />,
    label: "Profile",
  },
];

const UserLayout = ({ children }: Props) => {
  return (
    <>
      <SidebarMenu links={links} />
      <div className="container mx-auto flex">
        <div className="hidden lg:flex">
          <Sidebar links={links} />
        </div>
        <div className="w-full px-1 md:px-4 lg:px-6 my-2 md:my-4 lg:my-6 overflow-auto">
          {children}
        </div>
      </div>
    </>
  );
};
export default UserLayout;
