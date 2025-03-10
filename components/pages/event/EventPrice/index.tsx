import React from "react";
import { EventPriceInterface } from "@/interfaces/EventInterface";

interface IProps {
  prices: EventPriceInterface[];
}

const EventPrice = ({ prices }: IProps) => {
  return (
    <div>
      <h3 className="text-lg md:text-xl mb-4">Цена:</h3>
      {prices.map((price: EventPriceInterface) => (
        <div key={price._key} className="flex items-center gap-6 text-lg">
          <p>{price.name}:</p>
          <p className="font-bold">{price.price} лв.</p>
        </div>
      ))}
    </div>
  );
};

export default EventPrice;
