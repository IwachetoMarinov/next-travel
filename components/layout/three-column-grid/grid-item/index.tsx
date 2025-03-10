import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { ThreeColumnGridInterface } from "@/interfaces/ThreeColumnGridInterface";
import IconText from "@/components/IconText";
import { CalendarIcon } from "@/components/icons";
import GridItemLink from "@/components/layout/GridItemLink";

interface IProps {
  data: ThreeColumnGridInterface;
}

export default function GridItem({ data }: IProps) {
  return (
    <article>
      {/* Main Image */}
      {data?.image && (
        <div className="relative w-full h-[320px] lg:h-[420px] mb-5 lg:mb-6">
          <Image
            src={data?.image}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            alt="Picture of the author"
          />
        </div>
      )}

      <IconText
        text={dayjs(data?.date).format("MMMM D, YYYY")}
        icon={<CalendarIcon width={16} height={16} fill="#878787" />}
      />

      <GridItemLink href={data.href}>{data.title}</GridItemLink>
    </article>
  );
}
