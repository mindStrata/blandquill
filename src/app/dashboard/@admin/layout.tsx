import Sidebar from "@/components/sidebar";
import SidebarMenu from "@/components/sidebar-mobile";
import { LayoutDashboard, Rss, Settings, User, Users } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const links = [
  {
    id: 1,
    href: "/dashboard/overview",
    icon: <LayoutDashboard size={22} />,
    label: "Overview",
  },
  {
    id: 3,
    href: "/dashboard/user",
    icon: <Users size={22} />,
    label: "User",
  },
  {
    id: 4,
    href: "/dashboard/blog" || "/dashboard/blog/blogs",
    icon: <Rss size={22} />,
    label: "Blog",
  },
  {
    id: 5,
    href: "/dashboard/profile",
    icon: <User size={22} />,
    label: "Profile",
  },
  {
    id: 6,
    href: "/dashboard/settings",
    icon: <Settings size={22} />,
    label: "Settings",
  },
];

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <SidebarMenu links={links} />
      <div className="lg:container lg:mx-auto lg:flex">
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
export default AdminLayout;
