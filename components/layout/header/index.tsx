import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Navigation from "../navigation";

export default function Header() {
  return (
    <header className="">
      <div className="min-h-12 px-5 flex items-center justify-between">
        <div> logo</div>
        <Navigation />
        <div>
          User profile
          <Button>Click me</Button>
        </div>
      </div>
    </header>
  );
}
