export interface ImageInterface {
  src: string;
  alt: string;
}

export interface ButtonInterface {
  text: string;
  link?: string;
}

export interface BannerInterface {
  image: ImageInterface;
  imageOverlay: ImageInterface;
  heading: string;
  description?: string;
  button?: ButtonInterface;
}

export interface CheckMateGridInterface{
    title: string;
    link: string;
    date: string;
    author: string;
    description: string;
    mainImage: ImageInterface;
    images: ImageInterface[];
    button?: ButtonInterface;
}
