import React from "react";
// import GoogleMapComponent from "@/components/Map";
import EventSidebarItem from "@/components/EventSidebarItem";
import { EventSidebarInteface } from "@/interfaces/EventInterface";
import { sideBarDataToArray } from "@/services/transformDataService";

interface IProps {
  data: EventSidebarInteface;
  mapData?: {
    lat: number;
    lng: number;
  } | null;
}

const EventSidebar = ({ data, mapData }: IProps) => {
  console.log("EventSidebar", data);

  const sidabarData = sideBarDataToArray(data);

  return (
    <aside className="border border-[#e6e6e6] p-5">
      {sidabarData.map((item, index) => (
        <EventSidebarItem key={index} data={item} />
      ))}

      {/* Map */}
      {/* <GoogleMapComponent
        data={
          mapData
            ? mapData
            : {
                lat: 37.7749,
                lng: -122.4194,
              }
        }
      /> */}

      <iframe
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${mapData?.lat},${mapData?.lng}&output=embed&z=13`}
      ></iframe>
    </aside>
  );
};

export default EventSidebar;
