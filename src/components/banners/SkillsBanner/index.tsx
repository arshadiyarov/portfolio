import React from "react";
import BannerHeader from "@/components/ui/BannerHeader";
import SkillBox from "@/components/ui/SkillBox";

const SkillsBanner = () => {
  return (
    <section className={""}>
      <BannerHeader text={"skills"} lineWidthClassName={"w-[255px]"} />
      <div className={"flex justify-between"}>
        <div className={"w-[350px] h-[280px] relative mt-3 ml-8 mb-7"}>
          <img
            src="/img/logo-outline.svg"
            alt="logo-outline"
            width={113}
            className={"absolute bottom-0 left-4"}
          />
          <img
            src="/img/dots5x5.svg"
            alt="dots5x5"
            width={63}
            className={"absolute bottom-20 right-28"}
          />
          <img
            src="/img/dots5x5.svg"
            alt="dots5x5"
            width={63}
            className={"absolute top-12"}
          />
          <img
            src="/img/rectangle.svg"
            alt="rectangle"
            className={"absolute right-10"}
          />
          <img
            src="/img/rectangle.svg"
            alt="rectangle"
            width={52}
            className={"absolute bottom-8 right-0"}
          />
        </div>
        <div className={"flex items-end"}>
          <div className={"flex gap-4 w-[568px]"}>
            <div className={"space-y-4"}>
              <SkillBox
                title={"Databases"}
                skills={["PostgreSQL", "MongoDB"]}
              />
              <SkillBox
                title={"Other"}
                skills={["TailwindCSS", "SCSS", "Sass", "AdaptiveLayout"]}
              />
            </div>
            <div className={"space-y-4"}>
              <SkillBox
                title={"Tools"}
                skills={[
                  "VSCode",
                  "WebStorm",
                  "Figma",
                  "Photoshop",
                  "Git",
                  "ReactIcons",
                ]}
              />
              <SkillBox
                title={"Frameworks"}
                skills={[
                  "React",
                  "ReduxToolKit",
                  "TypeScript",
                  "Axios",
                  "Formik",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBanner;
