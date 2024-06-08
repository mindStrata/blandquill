import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MdxSingleBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*  <div className="absolute -z-50 h-80 w-full bg-gradient-to-t from-white to-purple-200"></div> */}
      <div
        className={`${poppins.className} container mx-auto px-4 md:px-7 flex justify-center`}
      >
        <div className="prose md:prose-lg prose-zinc prose-h1:text-[21px] prose-h1:font-extrabold md:prose-h1:text-[40px] prose-p:text-[16px] md:prose-p:text-[18px] prose-a:text-[16px] md:prose-a:text-[18px] prose-a:text-blue-600 prose-a:after:content-['_↗'] prose-a:font-normal hover:prose-a:text-blue-500 prose-img:rounded-xl prose-img:mb-2 prose-p:leading-7  prose-em:font-semibold prose-em:not-italic prose-em:text-sm prose-em:leading-3 prose-em:text-center before:prose-p:content-none after:prose-p:content-none prose-code:font-ibm-mono">
          {children}
        </div>
      </div>
    </>
  );
}
