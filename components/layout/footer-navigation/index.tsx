import React from "react";
import Link from "next/link";
import { footerNavigation } from "@/constants/routes";
import { NavigationInterface } from "@/interfaces/NavigationInterface";

export default function FooterNavigation() {
  return (
    <div className="flex justify-center items-center">
      {footerNavigation.map((item: NavigationInterface) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-4 text-xl hover:underline"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
