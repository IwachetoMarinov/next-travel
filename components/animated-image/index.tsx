"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ImageInterface } from "@/interfaces/LayoutInterface";

interface IProps {
  degrees?: number;
  image: ImageInterface;
}

const AnimatedImage = ({ image, degrees = 14 }: IProps) => {
  const [style, setStyle] = useState({
    transform: "rotateX(0deg) rotateY(0deg)",
  });

  const handleMouseMove = (e: any) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Normalize values (-1 to 1)
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);

    // Apply transform
    setStyle({
      transform: `rotateX(${y * degrees}deg) rotateY(${x * degrees}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  };
  return (
    <div
      className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <Image src={image.src} alt={image.alt} layout="fill" />
    </div>
  );
};

export default AnimatedImage;
