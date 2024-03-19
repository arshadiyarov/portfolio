import React from "react";
import { ButtonProps } from "@/components/ui/buttons/ButtonProps";

const PrimaryButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={
        "border border-primary bg-opacity-0 font-medium px-4 py-2 hover:bg-primary hover:bg-opacity-20"
      }
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
