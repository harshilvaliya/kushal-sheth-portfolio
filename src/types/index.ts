import type { IconType } from "react-icons";

export interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  image: string;
}
