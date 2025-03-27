import React from "react";
import { CheckMateGridInterface } from "@/interfaces/LayoutInterface";
import CheckmateGridItem from "@/components//checkmate-grid-item";

interface IProps {
  data: CheckMateGridInterface[];
}

const CheckmateGrid = ({ data }: IProps) => {
  return (
    <section className="page-container my-6 lg:my-12">
      {data.map((item: CheckMateGridInterface, index: number) => (
        <CheckmateGridItem key={index} data={item} index={index} />
      ))}
    </section>
  );
};

export default CheckmateGrid;
