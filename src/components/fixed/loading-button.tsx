"use client";

import clsx from "clsx";
import { useState } from "react";

const LoadingButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <div>
        <button
          className={clsx({
            "w-full bg-zinc-950 h-14 md:h-16 text-white text-center rounded-xl my-3 hover:bg-zinc-800":
              true,
            "cursor-wait bg-zinc-800": loading,
          })}
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 5000);
          }}
          disabled={loading}
        >
          {loading ? "Loading more..." : "Load more"}
        </button>
      </div>
    </div>
  );
};
export default LoadingButton;
