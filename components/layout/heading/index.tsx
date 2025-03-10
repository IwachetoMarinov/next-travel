import React from "react";

interface IProps {
  title: string;
  styleCLass?: string;
}

const Heading = ({ title, styleCLass }: IProps) => {
  return (
    <h2
      className={`text-2xl text-center my-5 lg:my-12 ${styleCLass && styleCLass}`}
    >
      {title}
    </h2>
  );
};

export default Heading;
