import React from "react";
import EventSidebarItem from "@/components/EventSidebarItem";
import { EventSidebarInteface } from "@/interfaces/EventInterface";
import { sideBarDataToArray } from "@/services/transformDataService";

interface IProps {
  data: EventSidebarInteface;
}

const EventSidebar = ({ data }: IProps) => {
  console.log("", data);

  const sidabarData = sideBarDataToArray(data);

  return (
    <aside className="border border-[#e6e6e6] p-5">
      {sidabarData.map((item, index) => (
        <EventSidebarItem key={index} data={item} />
      ))}
    </aside>
  );
};

export default EventSidebar;
