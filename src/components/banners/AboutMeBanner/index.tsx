import React from "react";
import BannerHeader from "@/components/ui/BannerHeader";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

const Index = () => {
  return (
    <section className={"relative"}>
      <div className={"flex justify-between"}>
        <div>
          <BannerHeader text={"about-me"} lineWidthClassName={"w-[340px]"} />
          <div className={"mt-6 space-y-6 w-[525px]"}>
            <p className={"text-secondary"}>Hello, i’m Elias!</p>
            <p className={"text-secondary"}>
              I’m a self-taught front-end developer based in Almaty, Kazakhstan.
              I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className={"text-secondary"}>
              Transforming my creativity and knowledge into a websites has been
              my passion for almost a year. I have been creating various
              projects to gain knowledge and practice. I always strive to learn
              about the newest technologies and frameworks.
            </p>
            <PrimaryButton text={"Read More ->"} />
          </div>
        </div>
        <div className={"w-fit h-[505px] relative"}>
          <img
            src="/img/Image2.png"
            alt="Image2"
            className={"border-b border-primary"}
          />
          <img
            src="/img/dots5x5.svg"
            alt="dots5x5"
            className={"absolute top-[60px] left-0"}
          />
          <img
            src="/img/dots4x5.svg"
            alt="dots4x5"
            className={"absolute bottom-[172px] right-4"}
          />
        </div>
      </div>

      <img
        src="/img/rectangle.svg"
        alt="rectangle"
        width={155}
        className={"absolute top-[134px] -left-[325px]"}
      />
      <img
        src="/img/dots5x5.svg"
        alt="dots5x5"
        width={103}
        className={"absolute -right-[200px] bottom-[102px]"}
      />
    </section>
  );
};

export default Index;
