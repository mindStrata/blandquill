"use client";

import clsx from "clsx";
import {
  Bold,
  Code,
  Eye,
  Heading,
  ImagePlus,
  Italic,
  Link,
  Pen
} from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  name: string;
};

const MarkdownEditor = ({ name }: Props) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [isPreview, setIsPreview] = useState<boolean>(false);

  return (
    <>
      <div className="py-2 px-2 my-1 rounded-2xl border border-zinc-200">
        <div className="flex flex-col md:flex-row items-center md:justify-between min-h-11 bg-gray-100 my-2 border border-zinc-300 px-3 rounded-lg">
          <div className="flex items-center">
            <div>
              <button
                type="button"
                className={clsx({
                  "flex items-center gap-x-2 hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600":
                    true,
                  "bg-white": isPreview === false,
                })}
                onClick={() => setIsPreview(false)}
              >
                <Pen size={19} />
              </button>
            </div>
            <div>
              <button
                type="button"
                className={clsx({
                  "flex items-center gap-x-2 hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600":
                    true,
                  "bg-white": isPreview === true,
                })}
                onClick={(e) => {
                  setIsPreview(true);
                }}
              >
                <Eye />
              </button>
            </div>
          </div>
          {isPreview === false && (
            <div className="flex items-center px-6 my-2">
              <span className="hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600">
                <Heading
                  size={19}
                  onClick={() => setMarkdown((pre) => pre + "** **")}
                />
              </span>
              <span className="hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600">
                <Bold
                  size={19}
                  onClick={() => setMarkdown((pre) => pre + "** **")}
                />
              </span>
              <span className=" hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600">
                <Italic
                  size={19}
                  onClick={() => setMarkdown((pre) => pre + "_ _")}
                />
              </span>
              <span className=" hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600">
                <Link
                  size={19}
                  onClick={() => setMarkdown((pre) => pre + "[text](url)")}
                />
              </span>
              <span className=" hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600">
                <Code
                  size={19}
                  onClick={() => setMarkdown((pre) => pre + "``` ```")}
                />
              </span>
              <span className=" hover:bg-zinc-200 px-3 py-1 rounded-md cursor-pointer text-zinc-600">
                <ImagePlus
                  size={19}
                  onClick={() =>
                    setMarkdown((pre) => pre + "![alt-name](image_url)")
                  }
                />
              </span>
            </div>
          )}
        </div>
        {isPreview === false ? (
          <div>
            <textarea
              name={name}
              id="markdown"
              placeholder="Write your thoughts here..."
              className="w-full rounded-xl text-sm md:text-md lg:text-lg"
              value={markdown!}
              rows={5}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>
        ) : (
          <div className="max-h-96 overflow-auto prose md:prose-2xl prose-zinc prose-h1:text-[21px] prose-h1:font-bold md:prose-h1:text-[40px] prose-h2:text-[18px] md:prose-h2:text-[30px] prose-p:text-[16px] md:prose-p:text-[18px] prose-a:text-[16px] md:prose-a:text-[18px] prose-a:text-blue-600 prose-a:font-normal hover:prose-a:text-blue-500 prose-img:rounded-xl prose-img:mb-2 prose-p:leading-7  prose-em:font-semibold prose-em:not-italic prose-em:text-sm prose-em:text-center before:prose-p:content-none after:prose-p:content-none prose-code:font-jetbrains prose-code:font-ibm-mono">
            {markdown!.length <= 0 ? (
              <p className="text-md py-5">No content to preview</p>
            ) : (
              <ReactMarkdown>{markdown}</ReactMarkdown>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default MarkdownEditor;
