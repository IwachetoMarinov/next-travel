import React from "react";
import GridItem from "./grid-item";
import { IThreeColumnGridInterface } from "@/interfaces/ThreeColumnGridInterface";
// import NewItem from "./components/new-item";

interface Iprops {
  data: IThreeColumnGridInterface[];
}

export default function ThreeColumnDrid({ data }: Iprops) {
  return (
    <section className="grid grid-cols-3 gap-4">
      {data.map((item: any) => (
        <GridItem data={item} key={item._id} />
      ))}
    </section>
  );
}
