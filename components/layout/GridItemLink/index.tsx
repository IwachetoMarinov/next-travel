import React from "react";
import Link from "next/link";

interface IProps {
  href: string;
  animated?: boolean;
  className?: string;
  children: React.ReactNode;
}

const GridItemLink = ({
  href,
  children,
  animated = false,
  className = "uppercase text-lg lg:text-2xl font-bold",
}: IProps) => {
  return (
    <Link
      href={href}
      className={`line-clamp-2 mb-5 lg:mb-8 text-[#0C4D67] ${className} ${animated ? "hover:underline" : ""}`}
    >
      {children}
    </Link>
  );
};

export default GridItemLink;
