import React from "react";
import BannerHeader from "@/components/ui/BannerHeader";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactsBanner = () => {
  return (
    <section className={"relative"}>
      <BannerHeader text={"contacts"} lineWidthClassName={"w-[127px]"} />
      <div className={"mt-11"}>
        <div className={"flex justify-between"}>
          <p className={"text-secondary w-[500px]"}>
            If you have any requests or questions, don&apos;t hesitate to
            contact me <span className={"text-primary"}>--&gt;</span>
          </p>
          <div className={"border w-fit p-4 space-y-4"}>
            <h3 className={"text-center border-b pb-4 font-semibold text-xl"}>
              Message me here
            </h3>
            <div className={"text-secondary space-y-2"}>
              <Link
                href={"https://t.me/armatT_14"}
                target={"_blank"}
                className={"flex items-center gap-2 hover:text-white"}
              >
                <FaTelegramPlane className={"text-2xl"} />
                @armatT_14
              </Link>
              <Link
                href={"mailto:shadiyarovarmat@gmail.com"}
                target={"_blank"}
                className={"flex items-center gap-2 hover:text-white"}
              >
                <MdEmail className={"text-2xl"} />
                shadiyarovarmat@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/img/dots5x5.svg"
        alt="dots5x5"
        width={103}
        className={"absolute bottom-0 -left-[275px]"}
      />
    </section>
  );
};

export default ContactsBanner;
