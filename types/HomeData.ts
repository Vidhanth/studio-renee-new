interface Section {
  title: string;
  description: string;
  image: string; // Image URL as a string
  showOnLeft: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface HomeData {
  _id: string;
  featuredProjects: { _id: string; name: string }[]; // Assuming simplified structure
  carouselImages: string[]; // Image URLs as strings
  sections: Section[];
  faq: FAQ[];
}
