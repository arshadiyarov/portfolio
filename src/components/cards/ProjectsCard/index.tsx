import React from "react";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

const ProjectsCard = () => {
  return (
    <div className={"border border-secondary w-[330px]"}>
      <img
        src="https://placehold.co/330x200/000000/FFFFFF/png"
        alt="project1"
      />
      <div className={"text-secondary border-y border-secondary p-2"}>
        REACT TAILWIND TYPESCRIPT RESPONSIVE
      </div>
      <div className={"p-4 space-y-4"}>
        <h4 className={"text-2xl font-medium"}>IMDb</h4>
        <p className={"text-secondary"}>
          Mini clone of popular online movie database
        </p>
        <div>
          <PrimaryButton text={"Live <~>"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
