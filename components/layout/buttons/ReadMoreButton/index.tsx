import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface IProps {
  link: string;
  className?: string;
  children: React.ReactNode;
}

const ReadMoreButton = ({ link, className = "uppercase font-semibild", children }: IProps) => {
  return (
    <Link href={link} className={`animated-button-arrow flex items-center gap-2 ${className}`}>
      {children}
      <div className="-rotate-45 animated-svg">
        <ArrowRightIcon />
      </div>
    </Link>
  );
};

export default ReadMoreButton;
