"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <div>
      <span
        className="flex gap-x-2 items-center cursor-pointer text-[17px] my-2 text-zinc-600 hover:text-zinc-950 transition-colors"
        onClick={() => router.back()}
      >
        <ArrowLeft size={17} /> Go back
      </span>
    </div>
  );
};
export default GoBack;
