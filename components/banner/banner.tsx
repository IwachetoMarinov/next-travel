import React from "react";
import Image from "next/image";
import { BannerInterface } from "@/interfaces/LayoutInterface";

interface IProps {
  data: BannerInterface;
}

const Banner = ({ data }: IProps) => {
  return (
    <section className="relative -z-2 -mt-[72px] md:overflow-hidden hero-banner h-[480px] lg:h-[800px]">
      {/* Ensure the container has a defined height */}
      <div className="relative w-full h-full">
        <Image
          src={data.image.src}
          alt={data?.image?.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Image */}
      <div className="relative z-10 -m-14 top-5 md:top-0">
        <Image
          src={data.imageOverlay.src}
          alt={data?.imageOverlay?.alt}
          width={2000}
          height={114}
          layout="intrinsic"
        />
      </div>

      {/* Content */}
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col text-white">
        <h1 className="text-xl md:text-6xl font-bold text-center uppercase mb-5 lg:mb-10">
          {data.heading}
        </h1>
        {data.description && (
          <p className="text-center text-lg md:text-xl max-w-[600px] mx-auto">
            {data.description}
          </p>
        )}
        {data.button &&
          // Button
          null}
      </div>
    </section>
  );
};

export default Banner;
