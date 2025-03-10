import { GalleryInterface } from "@/interfaces/GalleryInterface";

export const mapGalleryImages = (gallery: any): GalleryInterface | string[] => {
  if (!gallery?.length) return [];

  return gallery.map((item: any) => {
    return {
      src: item?.asset?.url || "",
      alt: item?.alt || "",
      caption: item?.caption || "",
    };
  });
};
