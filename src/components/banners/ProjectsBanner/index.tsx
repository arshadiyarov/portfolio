import React from "react";
import BannerHeader from "@/components/ui/BannerHeader";
import Link from "next/link";
import ProjectsCard from "@/components/cards/ProjectsCard";
import Line from "@/components/ui/Line";

const ProjectsBanner = () => {
  return (
    <section className={"relative"}>
      <div className={"flex items-center justify-between"}>
        <BannerHeader text={"projects"} lineWidthClassName={"w-[510px]"} />
        <Link className={"text-secondary hover:text-white"} href={"/projects"}>
          View all ~~&gt;
        </Link>
      </div>
      <div className={"flex justify-between mt-12"}>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
      <img
        src="/img/rectangle.svg"
        alt="rectangle"
        width={155}
        className={"absolute bottom-[93px] -right-[230px]"}
      />
      <img
        src="/img/dots5x5.svg"
        alt="dots5x5"
        width={84}
        className={"absolute top-[65px] -left-[293px]"}
      />
    </section>
  );
};

export default ProjectsBanner;
