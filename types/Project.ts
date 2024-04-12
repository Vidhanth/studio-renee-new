interface Image {
  url: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  _id: string;
  _type: "project";
  name: string;
  shortDescription: string;
  tags: string[];
  subtitle: string;
  longDescription: string;
  coverImage: Image;
  descriptionImage: Image;
  images: Image[];
  slug: string;
}
