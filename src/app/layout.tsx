import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ReactJS Dev | Portfolio",
  description: "Armat Shadiyarov, React FrontEnd Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-firaCode bg-main text-white"}>
        <div className={"w-[1024px] mx-auto"}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
