"use client";

/**
 *
 * @module getBlog
 * @author Mind Strata
 */

import { Skeleton } from "@/components/ui/skeleton";
import { Blog } from "@/types/global-types";
import { convertUtcDateToLocal } from "@/utils/date-converter";
import { Category, User } from "@prisma/client";
import { Dot } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Spinner from "../fixed/spinner";

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from the API
  const fetchPosts = async (): Promise<void> => {
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      const response = await fetch("http://localhost:3000/api/blog");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json(); // Type assertion for API data

      const newData: Blog[] = data.blogs;
      setPosts(newData); // Update state with the fetched posts
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Set error state in case of failure
      }
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <div>
      <h1>Blog Posts</h1>
      {/* <button onClick={fetchPosts}>Fetch Posts</button>{" "} */}
      {/* Trigger fetch on click */}
      {loading && (
        <div className="flex justify-center space-x-4">
          <Spinner />
          {/* <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div> */}
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {posts &&
        posts?.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <p className="font-semibold text-[12px]">{item.category}</p>
              </div>
              <div>
                <h1
                  className={`text-[20px] lg:text-[36px] leading-6 md:leading-snug capitalize font-extrabold`}
                >
                  <Link
                    href={`/blog/${item.id}/`}
                    className="hover:underline hover:underline-offset-2 hover:text-blue-700 transition-colors"
                  >
                    {item.title}
                  </Link>
                </h1>
              </div>
              <div>
                <span className="text-zinc-800 text-sm flex items-center">
                  {item.author} <Dot />{" "}
                  {convertUtcDateToLocal(String(item.createdAt))}
                </span>
              </div>
            </div>
          );
        })}
      {/*  <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default BlogPosts;
