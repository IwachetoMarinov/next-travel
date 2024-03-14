"use client";
import Header from "@/components/layout/header";

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <h3>HOME</h3>
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
