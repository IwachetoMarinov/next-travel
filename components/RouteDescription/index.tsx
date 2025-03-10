import React from "react";
import { DaysDescriptionInterface } from "@/interfaces/EventInterface";
import Accordeon from "@/components/Accordeon";
import { PortableText } from "@portabletext/react";

interface IProps {
  data: DaysDescriptionInterface[];
}

const RouteDescription = ({ data }: IProps) => {
  return (
    <div>
      <h3 className="text-xl lg:text-2xl mb-3 lg:mb-5">
        Подробности за похода
      </h3>

      {data?.map((item: DaysDescriptionInterface, index: number) => (
        <Accordeon key={index} title={item?.dayTitle}>
          <PortableText value={item?.content || null} />
        </Accordeon>
      ))}
    </div>
  );
};

export default RouteDescription;
