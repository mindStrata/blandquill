"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Links {
  id: number | string;
  href: string;
  icon: JSX.Element;
  label: string;
}

type SideBarProps = {
  links: Links[];
};

const Sidebar: FC<SideBarProps> = ({ links }) => {
  const path = usePathname();

  return (
    <div>
      <div className="w-[80px] lg:w-56 px-1 lg:px-4 border-r border-zinc-200">
        <div className="my-10 space-y-3 overflow-auto">
          {links &&
            links.map((i) => {
              return (
                <Link href={i.href} key={i.id}>
                  <div className="my-3">
                    <div
                      className={clsx({
                        "px-5 py-2 rounded-lg cursor-pointer hover:bg-zinc-200 transition-colors":
                          true,
                        "bg-zinc-950  font-semibold hover:bg-zinc-950 text-zinc-200":
                          path === i.href,
                      })}
                    >
                      <p className="flex items-center gap-x-2 ">
                        {i.icon}
                        <span className="hidden lg:flex">{i.label}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
