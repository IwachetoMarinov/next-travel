import Gallery from "@/components/gallery";
import { GalleryInterface } from "@/interfaces/GalleryInterface";
import { mapGalleryImages } from "@/services/mapImagesService";
import React from "react";

interface IProps {
  data: any;
}

const BlogPage = ({ data }: IProps) => {
  const images: any = mapGalleryImages(data?.gallery);

  return (
    <>
      <Gallery images={images} />
    </>
  );
};

export default BlogPage;
