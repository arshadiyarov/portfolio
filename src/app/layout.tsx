import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Armat Shadiyarov | Portfolio",
  description: "Armat Shadiyarov, React FrontEnd Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"font-firaCode bg-main text-white flex flex-col h-screen"}
      >
        <div className={"w-[1024px] mx-auto mb-auto relative"}>
          <div
            className={
              "flex flex-col items-center text-2xl gap-2 text-secondary absolute -left-[220px]"
            }
          >
            <div className={"w-0.5 h-[190px] bg-secondary"}></div>
            <Link
              href={"https://github.com/arshadiyarov"}
              className={"hover:text-white"}
              target={"_blank"}
            >
              <FaGithub />
            </Link>
          </div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
