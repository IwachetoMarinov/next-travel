import React, { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const Dropdown = ({ children }: IProps) => {
  return (
    <div className="absolute -bottom-6 left-1/2 translate-x-[-50%] bg-white p-1 shadow-sm">
      {children}
    </div>
  );
};

export default Dropdown;
