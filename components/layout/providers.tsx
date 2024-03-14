"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
export default function Providers({ children }: { children: any }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
