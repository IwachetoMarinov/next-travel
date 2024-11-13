import React from "react";
import { MountainIcon } from "@/components/icons";

interface IProps {
  difficulty: string;
}

const Difficulty = ({ difficulty }: IProps) => {
  const array = Array.from({ length: 5 }, (_, i) => i);
  const difficultyArray = array.map((_, index) => {
    return {
      index,
      color: index < +difficulty ? "#b45309" : "#e5e7eb",
    };
  });

  return (
    <div className="flex items-center gap-3 my-3">
      <p className="font-bold">Ниво на трудност</p>
      <div className="flex items-center gap-1">
        {difficultyArray.map((i, index) => (
          <MountainIcon key={index} fill={i.color} width={20} height={20} />
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
