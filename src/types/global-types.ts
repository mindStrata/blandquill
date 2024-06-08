//Global types for the blog
import { Role, Verified } from "@prisma/client";

export interface BlogDataType {
  id?: string | number;
  author?: string;
  title: string;
  category: "sports" | "technology" | "education" | "film";
  description?: string;
  createdAt?: string;
  role?: Role;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  password: string | null;
  image: string | null;
  role: Role;
  isVerified: Verified;
  createdAt: Date;
  updatedAt: Date;
}
