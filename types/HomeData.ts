import { Project } from "./Project";

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
  carouselImages: string[];
  sections: Section[];
  faq: FAQ[];
}
