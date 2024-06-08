"use client";

import clsx from "clsx";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Links {
  id: number | string;
  href: string;
  icon: JSX.Element;
  label: string;
}

type Link = {
  links: Links[];
};

const SidebarMenu = ({ links }: Link) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };
    handleScroll();
  }, [showMenu]);

  return (
    <>
      <div
        className="w-full h-10 z-50 bg-white backdrop-filter backdrop-blur-xl bg-opacity-20 flex justify-between items-center lg:hidden cursor-pointer px-4"
        onClick={() => setShowMenu(true)}
      >
        <span className="text-black">Menu</span>
        <span>
          <ChevronDown />
        </span>
      </div>
      <hr />
      <Sidebarmobile
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        links={links}
      />
    </>
  );
};
export default SidebarMenu;

type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  links: Links[];
};

function Sidebarmobile({ showMenu, setShowMenu, links }: Props) {
  const path = usePathname();
  return (
    <div
      className={clsx({
        "fixed flex flex-col w-full h-[100vh] lg:hidden duration-700 z-50 delay-700":
          true,
        "hidden bg-white": showMenu === false,
        "flex bg-white": showMenu === true,
      })}
    >
      <div className="flex justify-end px-7 md:px-24 lg:px-56">
        <span
          className="p-2 cursor-pointer rounded-xl hover:bg-zinc-300"
          onClick={() => setShowMenu(false)}
        >
          <X size={25} />
        </span>
      </div>

      <div className="w-full lg:w-56 px-6 border-r border-zinc-300 dark:border-zinc-600">
        <div className="my-10 space-y-3">
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
                        <span>{i.label}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <div>
          <p className="px-2 bg-blue-200 text-blue-950 rounded-full w-fit">
            Admin
          </p>
        </div>
      </div>
    </div>
  );
}
