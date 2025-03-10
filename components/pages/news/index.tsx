import React from "react";
import NewItem from "./components/new-item";

interface IProps {
  data: any;
}

export default function News({ data }: IProps) {
  return (
    <section className="grid grid-cols-3 gap-4">
      {data.map((item: any) => (
        <NewItem data={item} key={item._id} />
      ))}
    </section>
  );
}
