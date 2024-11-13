import React from "react";
import Link from "next/link";
import { navigation } from "@/constants/routes";

export default function Navigation() {
  return (
    <div className="flex-1">
      {navigation.map((item) => (
        <Link key={item.href} href={item.href} className="px-4 text-xl">
          {item.title}
        </Link>
      ))}
    </div>
  );
}
