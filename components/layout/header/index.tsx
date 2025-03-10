// import clsx from "clsx";
import React from "react";
import UserProfile from "@/components/UserProfile";
import Navigation from "@/components/layout/navigation";

export default function Header() {
  return (
    <header className=" shadow-md sticky top-0 z-50 py-3">
      <div className="min-h-12 px-5 flex items-center justify-between">
        <div> logo</div>
        <div className="flex items-center gap-6">
          <Navigation />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
