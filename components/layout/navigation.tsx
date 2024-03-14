import { cn } from "@/lib/utils";
import Link from "next/link";
import { NAVIGATIONS } from "@/constants/navigations";

export default function Navigation() {
  return (
    <nav>
      {NAVIGATIONS.map((nav, index) => (
        <Link href={nav.href} className="px-2 cursor-pointer" key={index}>
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
