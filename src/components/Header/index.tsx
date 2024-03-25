import React from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import HeaderLink from "@/components/ui/links/HeaderLink";

const Header = () => {
  return (
    <header className={"flex items-end justify-between pt-8 pb-2"}>
      {/* Add when hover logo : underline from center with primary color */}
      <Link href={"/"} className={"flex items-center font-bold gap-2.5"}>
        <img src="/img/logo.svg" alt="logo" width={16} />
        Armat Shadiyarov
      </Link>
      <div className={"flex gap-8"}>
        <ul className={"flex gap-8"}>
          <li>
            <HeaderLink to={"/"} text={"home"} />
          </li>
          <li>
            <HeaderLink to={"/projects"} text={"projects"} />
          </li>
          <li>
            <HeaderLink to={"/about-me"} text={"about-me"} />
          </li>
          <li>
            <HeaderLink to={"/contacts"} text={"contacts"} />
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
