// import clsx from "clsx";
import React from "react";
import FooterNavigation from "@/components/layout/footer-navigation";

export default function Footer() {
  return (
    <footer className="footer p-5 shadow-md bg-[#242625] text-white">
      <p className="text-center my-3 md:my-5 border-b pb-5 border-white">
        © BG Travel {new Date().getFullYear()}
      </p>
      <p className="text-center my-3 md:my-5">All rights reserved</p>
      <FooterNavigation />
    </footer>
  );
}
