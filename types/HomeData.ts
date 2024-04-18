import { Project } from "./Project";
import { Testimonial } from "./Testimonial";

export interface Section {
  title: string;
  description: string;
  image: string;
  showOnLeft?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HomeData {
  _id: string;
  header: string;
  subheader: string;
  featuredProjects: Project[];
  featuredTestimonials: Testimonial[];
  carouselImages: string[];
  sections: Section[];
  faq: FAQ[];
}
