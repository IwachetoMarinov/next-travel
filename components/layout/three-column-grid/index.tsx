import React from "react";
import GridItem from "./grid-item";
import { ThreeColumnGridInterface } from "@/interfaces/ThreeColumnGridInterface";

interface Iprops {
  data: ThreeColumnGridInterface[];
}

export default function ThreeColumnGrid({ data }: Iprops) {
  return (
    <section className="page-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item: any) => (
        <GridItem data={item} key={item._id} />
      ))}
    </section>
  );
}
