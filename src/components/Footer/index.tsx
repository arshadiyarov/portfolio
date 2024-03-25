import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={"border-t border-secondary"}>
      <div className={"w-[1024px] mx-auto py-8 space-y-7"}>
        <div className={"flex justify-between mb-16"}>
          <div className={"space-y-4"}>
            <div className={"flex gap-3"}>
              <Link
                href={"/"}
                className={"flex items-center font-bold gap-2.5"}
              >
                <img src="/img/logo.svg" alt="logo" width={16} />
                Armat Shadiyarov
              </Link>
              <p className={"text-secondary hover:text-white"}>
                <Link href="mailto:shadiyarovarmat@gmail.com">
                  shadiyarovarmat@gmail.com
                </Link>
              </p>
            </div>
            <div>
              <p>Front-end developer</p>
            </div>
          </div>
          <div className={"space-y-3"}>
            <h3 className={"text-2xl"}>Media</h3>
            <div className={"text-secondary text-2xl flex gap-2"}>
              <Link
                href={"https://github.com/arshadiyarov"}
                target={"_blank"}
                className={"hover:text-white"}
              >
                <FaGithub />
              </Link>
              <Link
                href={"https://t.me/armatT_14"}
                target={"_blank"}
                className={"hover:text-white"}
              >
                <FaTelegramPlane />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/armat-shadiyarov-3969892b9/"}
                target={"_blank"}
                className={"hover:text-white"}
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <p className={"text-center text-secondary"}>
          <span className={"text-primary"}>{"<p>"}</span>Made by Armat
          <span className={"text-primary"}>{"</p>"}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
