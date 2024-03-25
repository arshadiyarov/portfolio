import React from "react";
import { BannerHeaderProps } from "@/components/ui/BannerHeader/BannerHeaderProps";
import Line from "@/components/ui/Line";

const BannerHeader: React.FC<BannerHeaderProps> = ({
  text,
  lineWidthClassName,
}) => {
  return (
    <div className={"flex items-center gap-4"}>
      <h2 className={"text-3xl"}>
        <span className={"text-primary"}>#</span>
        {text}
      </h2>
      <div className={lineWidthClassName}>
        <Line />
      </div>
    </div>
  );
};

export default BannerHeader;
