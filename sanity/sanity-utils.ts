import { Project } from "@/types/Project";
import { groq } from "next-sanity";
import client from "./client";
import { TeamMember } from "@/types/TeamMember";
import { HomeData } from "@/types/HomeData";

export async function fetchHomeData(): Promise<HomeData | null> {
  const query = `*[_type == "homeScreenData"][0]{
        _id,
        header,
        subheader,
        featuredProjects[]->{
          _id,
          name,
          tags,
          shortDescription,
          "coverImage": {
            "url": coverImage.asset->url,
            "alt": coverImage.alt,
            "caption": coverImage.caption
          },
          "slug": slug.current
        },
        "carouselImages": carouselImages[].asset->url,
        sections[]{
          title,
          description,
          "image": image.asset->url,
          showOnLeft
        },
        faq[]{
          question,
          answer
        }
      }`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (err) {
    console.error("Fetch error", err);
    return null;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
    _id,
    name,
    type,
    shortDescription,
    tags,
    "coverImage": {
      "url": coverImage.asset->url,
      "alt": coverImage.alt,
      "caption": coverImage.caption
    },
    "images": images[].asset->{
      "url": url,
      "alt": alt,
      "caption": caption
    },
    "slug": slug.current
  }`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (err) {
    console.error("Fetch error", err);
    return [];
  }
}

export async function fetchProject(slug: string): Promise<Project | null> {
  console.log(slug);
  const query = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    shortDescription,
    descriptionTitle,
    tags,
    subtitle,
    longDescription,
    "coverImage": {
      "url": coverImage.asset->url,
      "alt": coverImage.alt,
      "caption": coverImage.caption
    },
    "descriptionImage": {
      "url": descriptionImage.asset->url,
      "alt": descriptionImage.alt,
      "caption": descriptionImage.caption
    },
    "images": images[].asset->{
      "url": url,
      "alt": alt,
      "caption": caption
    },
    "slug": slug.current
  }`;

  try {
    const project = await client.fetch(query, { slug });
    return project;
  } catch (err) {
    console.error("Fetch error", err);
    return null;
  }
}

export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  const query = `*[_type == "teamMember"]{
      _id,
      name,
      jobTitle,
      about,
      "picture": picture.asset->url
    }`;

  return await client.fetch(query);
};
