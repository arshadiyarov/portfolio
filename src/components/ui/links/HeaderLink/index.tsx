import React from "react";
import Link from "next/link";
import { LinkProps } from "@/components/ui/links/LinkProps";

const HeaderLink: React.FC<LinkProps> = ({ to, text }) => {
  return (
    <Link
      href={`${to}`}
      className={
        "text-secondary hover:text-white focus:font-medium focus:text-white"
      }
    >
      <span className={"text-primary"}>#</span>
      {text}
    </Link>
  );
};

export default HeaderLink;
