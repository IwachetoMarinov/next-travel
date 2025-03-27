import React from "react";
import { getEquipmentIcon } from "@/services/equipment";
import { EquipmentInterface } from "@/interfaces/EventInterface";

interface IProps {
  data: EquipmentInterface;
}

const EquipmentItem = ({ data }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      <div>{getEquipmentIcon(data?.icon)}</div>
      <p>{data?.name}</p>
    </div>
  );
};

export default EquipmentItem;
