import React from "react";
import { DotsProps } from "@/components/ui/Dots/DotsProps";
import Dot from "@/components/ui/Dots/Dot";

const Dots: React.FC<DotsProps> = ({ col, row = col, gap = 4, styles }) => {
  const dotsArray = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dotsArray.push(<Dot key={`dot-${i}-${j}`} />);
    }
  }

  return (
    <div className={`grid grid-cols-${col} gap-${gap} w-fit ${styles}`}>
      {dotsArray}
    </div>
  );
};

export default Dots;
