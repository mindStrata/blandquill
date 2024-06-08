"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import clsx from "clsx";
import {
  Award,
  Clapperboard,
  Cpu,
  GalleryVerticalEnd,
  GraduationCap,
  List,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type LinkType = {
  href: string;
  icon: JSX.Element | null | undefined;
  label: string;
};

// Links
const links: LinkType[] = [
  {
    href: "/all-blogs",
    icon: <GalleryVerticalEnd size={18} />,
    label: "all blogs",
  },
  {
    href: "/category/technology",
    icon: <Cpu size={18} />,
    label: "Techology",
  },
  {
    href: "/category/sports",
    icon: <Award size={19} />,
    label: "sports",
  },
  {
    href: "/category/education",
    icon: <GraduationCap size={19} />,
    label: "education",
  },
  {
    href: "/category/film",
    icon: <Clapperboard size={18} />,
    label: "film",
  },
];

type Props = {
  title: string;
  description?: string;
  menu?: boolean;
};

export default function BlogCategory({
  title,
  description,
  menu = true,
}: Props) {
  const path = usePathname();

  return (
    <div>
      <div className="flex items-center justify-between my-6">
        <div>
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="text-sm text-zinc-600">{description}</p>
        </div>
        {menu === true && (
          <div>
            <div className="hidden md:flex items-center gap-x-2">
              {links?.map((item) => {
                return (
                  <Link href={item.href} key={item.href}>
                    <p
                      className={clsx({
                        "flex items-center gap-x-1 px-2 py-1 hover:bg-zinc-200 hover:text-zinc-800 transition-colors w-fit rounded-lg text-md cursor-pointer capitalize":
                          true,
                        "bg-zinc-200 text-zinc-900": path === item.href,
                      })}
                    >
                      {item.icon} {item.label}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className="flex md:hidden">
              <ShowCategory>
                <p className="flex items-center gap-x-1 px-2 py-1 transition-colors w-fit rounded-lg text-md cursor-pointer font-bold">
                  <List size={18} /> Category
                </p>
              </ShowCategory>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ctegory for small device e.g, mobile phone
function ShowCategory({ children }: { children: ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Blog category</DrawerTitle>
            <DrawerDescription>Get blogs category wise</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col">
              {links?.map((item) => {
                return (
                  <Link href={item.href} key={item.href}>
                    <p
                      className={clsx({
                        "flex items-center gap-x-1 px-2 py-2 hover:bg-zinc-100 transition-colors cursor-pointer rounded-lg capitalize w-full":
                          true,
                      })}
                    >
                      {item.icon} {item.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cancel
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
