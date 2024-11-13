import { GalleryInterface } from "@/interfaces/GalleryInterface";

export const mapGalleryImages = (gallery: any): GalleryInterface => {
  return gallery.map((item: any) => {
    return {
      src: item?.asset?.url || "",
      alt: item?.alt || "",
      caption: item?.caption || "",
    };
  });
};
