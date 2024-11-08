import React from "react";
import { navigation } from "@/constants/routes";
import Link from "next/link";

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
