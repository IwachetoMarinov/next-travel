import clsx from "clsx";
import Navigation from "../navigation";
import UserProfile from "@/components/UserProfile";

export default function Header() {
  return (
    <header className="">
      <div className="min-h-12 px-5 flex items-center justify-between">
        <div> logo</div>
        <Navigation />
        <UserProfile />
      </div>
    </header>
  );
}
