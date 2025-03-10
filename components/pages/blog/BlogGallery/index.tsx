import React from "react";
import Gallery from "@/components/gallery";
// import { GalleryInterface } from "@/interfaces/GalleryInterface";
import { mapGalleryImages } from "@/services/mapImagesService";

interface IProps {
  data: any;
}

const BlogGallery = ({ data }: IProps) => {
  const images: any = mapGalleryImages(data?.gallery);

  return (
    <>
      <Gallery images={images} />
    </>
  );
};

export default BlogGallery;
