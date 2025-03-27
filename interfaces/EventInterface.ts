import { ImageInterface } from "@/interfaces";

export interface EventPriceInterface {
  price: string;
  _type: string;
  name: string;
  _key: string;
}

export interface EventSidebarInteface {
  date: string;
  price: number;
  difficulty: number;
  location: string;
  type: string;
  duration: string;
}

export interface EventSidebarDataInteface {
  title: string;
  icon: string;
  value: string | number | undefined;
}

export interface DaysDescriptionInterface {
  dayTitle: string;
  _type: string;
  _key: string;
  content?: any[];
}

export interface EquipmentInterface {
  _type: string;
  name: string;
  icon?: string;
  _key: string;
}

export interface EventCheckmateInterface {
  date?: string;
  title: string;
  link: string;
  description: string;
  author: string;
  mainImage: ImageInterface;
  images: ImageInterface[] | string[];
  button: {
    text: string;
    link: string;
  };
}
