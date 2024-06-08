import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(
      new URL("/auth/login?callbackUrl=authentication is required", req.nextUrl)
    );
  } else {
    return NextResponse.next();
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
