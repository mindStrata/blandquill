import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BlandQuill",
  description:
    "Discover the stories that ignite your passion and illuminate your path - BalndQuill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader showSpinner={true} color="#1955b5" height={4} />
        <Navbar />
        <hr />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
