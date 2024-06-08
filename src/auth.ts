import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;
        if (!email || !password) await prisma.$connect();
        const user = await prisma.user.findUnique({
          where: { email },
        });
        const isMatched = user?.password === password;
        if (!isMatched) throw new Error("Invalid credentials");
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
});
