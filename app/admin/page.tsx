import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function Admin() {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <h3>TEST</h3>
        <main className="w-full pt-16"></main>
      </div>
    </>
  );
}
