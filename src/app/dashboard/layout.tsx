import { GetSession } from "@/actions/get-session";
import { Metadata } from "next";
import { ReactNode } from "react";

interface Props {
  admin: ReactNode;
  user: ReactNode;
}

// Dynamic Metadata
export async function generateMetadata(): Promise<Metadata> {
  const user = await GetSession();
  return {
    title: user?.email,
  };
}

export default async function DashboardLayout({ admin, user }: Props) {
  const session = await GetSession();
  let role = session?.role;

  return <div>{role === "admin" ? admin : user}</div>;
}
