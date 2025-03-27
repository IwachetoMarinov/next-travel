import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import IconText from "@/components/IconText";
// import { PortableText } from "@portabletext/react";
import AnimatedImage from "@/components/animated-image";
import { CalendarIcon, PencilIcon } from "@/components/icons";
import { CheckMateGridInterface } from "@/interfaces/LayoutInterface";
import ReadMoreButton from "@/components/layout/buttons/ReadMoreButton";

interface IProps {
  index: number;
  data: CheckMateGridInterface;
}

const CheckmateGridItem = ({ data, index }: IProps) => {
  return (
    <div
      className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-2`}
    >
      <div className="flex-1">
        <AnimatedImage image={data.mainImage} />
      </div>
      <div className="flex-1 p-5 lg:p-10">
        {/* Date and author */}
        <div className="flex items-center gap-4 text-base text-[#878787]">
          <IconText
            text={dayjs(data?.date).format("MMMM D, YYYY")}
            icon={<CalendarIcon width={16} height={16} fill="#878787" />}
          />

          <IconText
            text={data?.author}
            animated={true}
            icon={<PencilIcon width={16} height={16} fill="#878787" />}
          />
        </div>
        {/* Title */}
        <Link href={data.link}>
          <h2 className="text-2xl font-bold mb-5 text-[#0C4D67] cursor-pointer">
            {data.title}
          </h2>
        </Link>
        {/* Description */}
        <div className="text-lg ld:text-xl text-[#878787] mb-6">
          {data.description}
          {/* <PortableText value={data?.description || null} /> */}
        </div>
        {/* Button */}
        <ReadMoreButton link={data.link}> Прочети повече </ReadMoreButton>
      </div>
    </div>
  );
};

export default CheckmateGridItem;
