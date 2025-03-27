// import clsx from "clsx";
"use client";
import React, { useEffect } from "react";
import UserProfile from "@/components/UserProfile";
import Navigation from "@/components/layout/navigation";
import MobileMenu from "@/components/layout/mobile-menu";

export default function Header() {
  const handleScroll = () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      const banner = document.querySelector(".hero-banner");
      const bannerElement = banner as HTMLElement;

      if (bannerElement && header) {
        if (window.scrollY > bannerElement.clientHeight) {
          header.classList.add("bg-white");
        } else {
          header.classList.remove("bg-white");
        }
      } else {
        // Check if banner is not available
        if (header) header.classList.add("bg-white");
      }
    });
  };

  useEffect(() => {
    // Add event listener scroll to check banner and header
    handleScroll();
  }, []);

  return (
    <header className=" shadow-md sticky top-0 z-50 py-3">
      <div className="min-h-12 px-5 flex items-center justify-between">
        <div> logo</div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 md:ml-auto">
          <Navigation />
          <UserProfile />
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
