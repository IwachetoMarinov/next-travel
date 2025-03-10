import React from "react";
import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import EventPrice from "@/components/pages/event/EventPrice";
import EventSidebar from "@/components/EventSidebar";
import { getSideBarData } from "@/services/transformDataService";
import Difficulty from "@/components/difficulty/iindex";
import RouteDescription from "@/components/RouteDescription";
import Equipments from "@/components/Equipments";

interface IProps {
  data: any;
}

const EventView = ({ data }: IProps) => {
  console.log("Evemt", data);

  const sideBarData = getSideBarData(data);

  return (
    <>
      <PageHeader
        title={data?.title ?? "Детайли за събитието"}
        textColor="text-[#0c4d67]"
      />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Main content */}
        <div className="col-span-1 lg:col-span-2">
          <Image
            src={data?.image?.asset?.url}
            className="mx-auto"
            width={1200}
            height={900}
            alt={data?.image?.alt ?? "Event image"}
          />
          <p className="text-xl lg:text-2xl text-[#0c4d67] my-4 md:my-6">
            {data?.short_description || "Липсва допълнително описание"}
          </p>

          {/* Main description */}
          <div className="text-lg md:text-xl">
            <PortableText value={data?.content || null} />
          </div>

          {/* Difficulty */}
          <Difficulty
            difficulty={data?.difficulty || "1"}
            content={data?.difficultyDescription || null}
          />

          {/* Days descriptin */}
          <RouteDescription data={data?.daysContent} />

          {/* Price */}
          <EventPrice prices={data?.priceContent || []} />

          {/* Equipments */}
          <Equipments data={data?.equipmentContent} />
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          <EventSidebar data={sideBarData} />
        </div>
      </section>
    </>
  );
};

export default EventView;
