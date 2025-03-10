import React from "react";

interface IProps {
  text: string;
  className?: string;
  animated?: boolean;
  icon: React.ReactNode;
}

const IconText = ({
  text,
  icon,
  animated = false,
  className = "flex items-center gap-2 mb-4",
}: IProps) => {
  return (
    <div className={className}>
      {/* Icon */}
      {icon}

      {/* Text */}
      <p
        className={`cursor-pointer hover:text-[#59815b] my-element ${animated ? "animated-uderline" : ""}`}
      >
        {text}
      </p>
    </div>
  );
};

export default IconText;
