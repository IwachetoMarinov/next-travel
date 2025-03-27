// import clsx from "clsx";
import React from "react";
import { FacebookIcon, MobilePhoneIcon } from "@/components/icons";
import FooterNavigation from "@/components/layout/footer-navigation";

export default function Footer() {
  return (
    <footer className="footer p-5 shadow-md bg-[#242625] text-white">
      <p className="text-center my-3 md:my-5 border-b pb-5 border-white">
        © BG Travel {new Date().getFullYear()}
      </p>
      <div className="flex items-center justify-center gap-24 lg:gap-5 my-2 lg:my-5">
        <p className="uppercase text-sm lg:text-base">Ивайло Маринов</p>
        {/* Facebook */}
        <div className="flex items-center gap-1">
          <FacebookIcon />
          <div>
            <a href="https://www.facebook.com/ivailo.marinov2">Ivaylo</a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-1">
          <MobilePhoneIcon />
          <div>
            <a href="tel:+359 888 888 888">+359 882 948 590</a>
          </div>
        </div>  
      </div>
      <FooterNavigation />
    </footer>
  );
}
