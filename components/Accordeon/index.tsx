"use client";
import React, { useState } from "react";

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

const Accordeon = ({ children, title }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#0c4d67] pb-3 text-[#0c4d67] my-4 lg:my-6">
      <div className="flex items-center gap-4">
        <div
          className={`w-6 h-6 bg-[#0c4d67] text-white flex items-center justify-center text-base leading-6 opacity-${isOpen ? "100" : "80"}`}
        >
          <button className="flex-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </button>
        </div>

        {title && <p>{title}</p>}
      </div>
      {isOpen && <div className="mt-3 text-[#111111]">{children}</div>}
    </div>
  );
};

export default Accordeon;
