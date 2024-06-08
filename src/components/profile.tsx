"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";

interface USERDATA {
  readonly name: string;
  readonly email: string;
  readonly image?: string;
}

const Profile: FC<USERDATA> = ({ email, name, image }) => {
  const [value, setValue] = useState<USERDATA>({
    name: name,
    email: email,
  });

  return (
    <div>
      <form className="max-w-md mx-auto space-y-8">
        <div className="flex justify-center">
          {image === null || image === undefined ? (
            <div
              className={clsx({
                "h-24 w-24 rounded-full font-semibold text-white flex items-center justify-center text-2xl":
                  true,
                "bg-amber-500": name.charAt(0) === "A",
                "bg-blue-500": name.charAt(0) === "B",
                "bg-cyan-500": name.charAt(0) === "C",
                "bg-violet-500": name.charAt(0) === "D",
                "bg-emerald-500": name.charAt(0) === "E",
                "bg-fuchsia-500": name.charAt(0) === "F",
                "bg-gray-500": name.charAt(0) === "G",
                "bg-green-500": name.charAt(0) === "H",
                "bg-indigo-500": name.charAt(0) === "I",
                "bg-red-500": name.charAt(0) === "J",
                "bg-sky-500": name.charAt(0) === "K",
                "bg-lime-500": name.charAt(0) === "L",
                "bg-amber-600": name.charAt(0) === "M",
                "bg-neutral-500": name.charAt(0) === "N",
                "bg-orange-500": name.charAt(0) === "O",
                "bg-purple-500": name.charAt(0) === "P",
                "bg-green-600": name.charAt(0) === "Q",
                "bg-rose-500": name.charAt(0) === "R",
                "bg-stone-600": name.charAt(0) === "S",
                "bg-teal-600": name.charAt(0) === "T",
                "bg-fuchsia-600": name.charAt(0) === "U",
                "bg-violet-700": name.charAt(0) === "V",
                "bg-yellow-600": name.charAt(0) === "W",
                "bg-blue-600": name.charAt(0) === "X",
                "bg-orange-700": name.charAt(0) === "Y",
                "bg-green-700": name.charAt(0) === "Z",
              })}
            >
              {name?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <div className="h-24 w-24 rounded-full">
              <Image
                src={image!}
                alt={name}
                fill={true}
                className="object-cover object-center rounded-full"
              />
            </div>
          )}
        </div>
        <div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={value.name!}
              readOnly
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={value.email!}
            readOnly
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
      </form>
    </div>
  );
};
export default Profile;
