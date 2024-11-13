import Gallery from "@/components/gallery";
import { mapGalleryImages } from "@/services/mapImagesService";
import React from "react";

interface IProps {
  data: any;
}

const BlogPage = ({ data }: IProps) => {
  const images = mapGalleryImages(data?.gallery);

  return (
    <>
      <Gallery images={images} />
    </>
  );
};

export default BlogPage;
