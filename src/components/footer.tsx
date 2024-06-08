import { Github } from "lucide-react";
import Logo from "./fixed/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-14 bg-zinc-100 flex justify-between items-center py-9">
        <div>
          <Link href={"/"}>
            <Logo className="text-xl font-medium" />
          </Link>
        </div>
        <div className="p-2 cursor-pointer rounded-xl hover:bg-zinc-200">
          <Link
            href={"https://github.com/mindStrata/blandquill"}
            target="_blank"
          >
            <Github size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
