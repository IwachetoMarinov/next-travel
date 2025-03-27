import React from "react";
import Link from "next/link";
import { navigation } from "@/constants/routes";
import { NavigationInterface } from "@/interfaces/NavigationInterface";

export default function Navigation() {
  return (
    <div className="flex flex-col md:flex-row flex-1 text-black gap-4">
      {navigation.map((item: NavigationInterface) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-4 text-xl hover:underline drop-shadow-md"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
