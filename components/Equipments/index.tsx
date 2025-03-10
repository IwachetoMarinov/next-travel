import React from "react";
import EquipmentItem from "@/components/EquipmentItem";
import { EquipmentInterface } from "@/interfaces/EventInterface";

interface IProps {
  data: EquipmentInterface[];
}

const Equipments = ({ data }: IProps) => {
  return (
    <div className="my-5 lg:my-8">
      <h3 className="text-xl lg:text-2xl mb-3 lg:mb-5">
        Необходима екипировка
      </h3>

      {data.map((item: EquipmentInterface, index: number) => (
        <EquipmentItem key={index} data={item}/>
      ))}
    </div>
  );
};

export default Equipments;
