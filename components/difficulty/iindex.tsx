import React from "react";
import { MountainIcon } from "@/components/icons";
import { PortableText } from "@portabletext/react";
import { getDifficultyColor, getDifficultyColorSVG } from "@/services/colors";
import Accordeon from "@/components/Accordeon";

interface IProps {
  difficulty: string;
  content?: any;
}

const Difficulty = ({ difficulty, content }: IProps) => {
  const array = Array.from({ length: 5 }, (_, i) => i);
  const difficultyArray = array.map((_, index) => {
    return {
      index,
      // color: index < +difficulty ? "#b45309" : "#e5e7eb",
      color: index < +difficulty ? getDifficultyColorSVG(index) : "#e5e7eb",
    };
  });

  return (
    <div className="my-4 lg:my-5">
      <p
        className={`font-bold uppercase mb-2 text-${getDifficultyColor(+difficulty)}`}
      >
        Ниво на трудност
      </p>
      <div className="flex items-center gap-1">
        {difficultyArray.map((i, index) => (
          <MountainIcon key={index} fill={i.color} width={20} height={20} />
        ))}
      </div>

      {content && (
        <Accordeon>
          <PortableText value={content ?? null} />
        </Accordeon>
      )}
    </div>
  );
};

export default Difficulty;
