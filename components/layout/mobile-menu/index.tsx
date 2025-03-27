"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { MobileMenuIcon } from "@/components/icons";
import Navigation from "@/components/layout/navigation";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MobileMenuIcon />
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-5 flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button onClick={toggleDrawer} className="mb-5 self-end">
          <X size={24} />
        </button>

        {/* Navigation Links */}
        <div className="block md:hidden">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
