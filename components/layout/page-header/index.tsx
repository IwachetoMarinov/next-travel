import React from "react";

interface IProps {
  title: string;
  textColor?: string;
}

export default function PageHeader({
  title,
  textColor = "text-[#1e1e1e]",
}: IProps) {
  return (
    <h1
      className={`text-3xl lg:text-[50px] uppercase text-center my-6 lg:my-10 font-bold ${textColor}`}
    >
      {title}
    </h1>
  );
}
