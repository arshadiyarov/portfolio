import React from "react";
import { ButtonProps } from "@/components/ui/buttons/ButtonProps";

const SecondaryButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={
        "text-secondary border border-secondary font-medium px-4 py-2 hover:bg-secondary hover:bg-opacity-20"
      }
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
