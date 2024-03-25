import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <div className={"w-[1024px] mx-auto mb-auto"}>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
