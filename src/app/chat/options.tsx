import { Badge } from "@/components/ui/badge";
import React from "react";

interface OptionsProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Options: React.FC<OptionsProps> = ({ options, onSelect }) => {
  return (
    <div className="flex flex-col mt-2 gap-2">
      {options.map((option, index) => (
        <Badge
          className="w-fit bg-gray cursor-pointer"
          key={index}
          onClick={() => onSelect(option)}
        >
          {option}
        </Badge>
      ))}
    </div>
  );
};

export default Options;
