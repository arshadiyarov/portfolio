import React from "react";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import Dots from "@/components/ui/Dots";

const MainBanner = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <div className={"space-y-6 w-1/2"}>
        <h1 className={"font-semibold text-[32px]"}>
          Armat is a <span className={"text-primary"}>front-end developer</span>
        </h1>
        <p className={"text-secondary"}>
          He crafts responsive websites using modern technologies like React,
          TypeScript, and TailwindCSS.
        </p>
        <PrimaryButton text={"Contact me!!"} />
      </div>
      <div className={"relative"}>
        <img
          src="/img/logo-outline.svg"
          alt="logo-ouline"
          width={155}
          className={"absolute -z-10 top-[84px] -left-3"}
        />
        <img src="/img/Image.png" alt="Image" />
        <Dots col={5} styles={"absolute z-10 bottom-14 right-4"} />
      </div>
    </div>
  );
};

export default MainBanner;
