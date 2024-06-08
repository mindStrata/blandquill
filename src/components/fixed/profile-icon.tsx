import { GetSession } from "@/actions/get-session";
import { signOut } from "@/auth";
import { Users } from "@/types/global-types";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ProfileIcon = async () => {
  const user = await GetSession();

  return (
    <>
      {user === null ? (
        <div className="px-4 py-2 bg-zinc-800 text-zinc-100 hover:bg-zinc-950 rounded-xl">
          <Link href={"/auth/login"}>
            <p>Login</p>
          </Link>
        </div>
      ) : (
        <div>
          <Dropdownmenu user={user!}>
            <div
              className={clsx({
                "h-9 w-9 rounded-full font-semibold text-white flex items-center justify-center cursor-pointer":
                  true,
                "bg-amber-500": user?.name?.charAt(0) === "A",
                "bg-blue-500": user?.name?.charAt(0) === "B",
                "bg-cyan-500": user?.name?.charAt(0) === "C",
                "bg-violet-500": user?.name?.charAt(0) === "D",
                "bg-emerald-500": user?.name?.charAt(0) === "E",
                "bg-fuchsia-500": user?.name?.charAt(0) === "F",
                "bg-gray-500": user?.name?.charAt(0) === "G",
                "bg-green-500": user?.name?.charAt(0) === "H",
                "bg-indigo-500": user?.name?.charAt(0) === "I",
                "bg-red-500": user?.name?.charAt(0) === "J",
                "bg-sky-500": user?.name?.charAt(0) === "K",
                "bg-lime-500": user?.name?.charAt(0) === "L",
                "bg-amber-600": user?.name?.charAt(0) === "M",
                "bg-neutral-500": user?.name?.charAt(0) === "N",
                "bg-orange-500": user?.name?.charAt(0) === "O",
                "bg-purple-500": user?.name?.charAt(0) === "P",
                "bg-green-600": user?.name?.charAt(0) === "Q",
                "bg-rose-500": user?.name?.charAt(0) === "R",
                "bg-stone-600": user?.name?.charAt(0) === "S",
                "bg-teal-600": user?.name?.charAt(0) === "T",
                "bg-fuchsia-600": user?.name?.charAt(0) === "U",
                "bg-violet-700": user?.name?.charAt(0) === "V",
                "bg-yellow-600": user?.name?.charAt(0) === "W",
                "bg-blue-600": user?.name?.charAt(0) === "X",
                "bg-orange-700": user?.name?.charAt(0) === "Y",
                "bg-green-700": user?.name?.charAt(0) === "Z",
              })}
            >
              B
            </div>
          </Dropdownmenu>
        </div>
      )}
    </>
  );
};
export default ProfileIcon;

const Dropdownmenu = ({
  children,
  user,
}: {
  children: ReactNode;
  user: Users;
}) => {
  return (
    <>
      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="font-medium">
            {user.email}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <Link href={"/dashboard/profile"}>
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href={"/dashboard/settings"}>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({ redirect: true, redirectTo: "/auth/login" });
            }}
          >
            <DropdownMenuItem className="cursor-pointer">
              <button type="submit">logout</button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
