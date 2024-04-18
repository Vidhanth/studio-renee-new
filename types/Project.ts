import { Testimonial } from "./Testimonial";

export interface Image {
  url: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  _id: string;
  _type: "project";
  name: string;
  type: string;
  shortDescription: string;
  tags: string[];
  subtitle: string;
  longDescription: string;
  coverImage: Image;
  descriptionImage: Image;
  descriptionTitle: string;
  images: Image[];
  testimonial: Testimonial;
  slug: string;
}
