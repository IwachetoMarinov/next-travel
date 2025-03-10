import React from "react";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  ClockIcon,
  FolderIcon,
  LocationIcon,
  WalletIcon,
} from "@/components/icons";
import { EventSidebarDataInteface } from "@/interfaces/EventInterface";

interface IProps {
  data: EventSidebarDataInteface;
}

const EventSidebarItem = ({ data }: IProps) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "calendar":
        return <CalendarDaysIcon width={24} height={24} />;
      case "money":
        return <WalletIcon width={24} height={24} />;
      case "star":
        return <BookmarkIcon width={24} height={24} />;
      case "location":
        return <LocationIcon width={24} height={24} />;
      case "event":
        return <FolderIcon width={24} height={24} />;
      case "clock":
        return <ClockIcon width={24} height={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f7f7f7] px-4 py-2 mb-4">
      <div className="flex items-center gap-4 mb-4">
        <div>{renderIcon(data.icon)}</div>
        <div className="text-base uppercase font-semibold ">{data.title}</div>
      </div>

      <p className="text-base text-[#111111] pl-10">{data?.value}</p>
    </div>
  );
};

export default EventSidebarItem;
