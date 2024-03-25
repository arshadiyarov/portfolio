import React from "react";
import { SkillBoxProps } from "@/components/ui/SkillBox/SkillBoxProps";

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => {
  return (
    <div
      className={"border border-secondary w-fit max-w-[390px]  leading-6 h-fit"}
    >
      <div className={"px-3 py-2 border-b border-b-secondary font-semibold"}>
        {title}
      </div>
      <div className={"px-3 py-2 text-secondary"}>
        {skills.map((skill) => skill + " ")}
      </div>
    </div>
  );
};

export default SkillBox;
