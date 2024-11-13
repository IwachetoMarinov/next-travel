"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GalleryInterface } from "@/interfaces/GalleryInterface";
import CustomNextArrow from "./components/CustomNextArrow";
import CustomPrevArrow from "./components/CustomPrevArrow";
import Image from "next/image";
// Dynamically import react-slick only on the client side
// const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface IProps {
  images: GalleryInterface[];
}

const Gallery = ({ images }: IProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="w-full carousel-container">
      <Slider {...settings}>
        {images.map((image: GalleryInterface, index: number) => (
          <div key={index}>
            <Image
              src={image?.src || ""}
              alt={image?.alt || ""}
              width={1200}
              height={500}
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
