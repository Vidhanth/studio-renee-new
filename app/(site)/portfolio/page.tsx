import Divider from "@/components/Divider";
import Header from "@/components/Header";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { defaultMetadata } from "@/constants";
import { fetchProjects } from "@/sanity/sanity-utils";

export const metadata = {
  ...defaultMetadata,
  title: `Portfolio - ${defaultMetadata.title}`,
};

export default async function PortfolioPage() {
  const projects = await fetchProjects();

  return (
    <div>
      <Divider visible={false} />
      <Header
        title={"Explore Our Stunning Portfolio"}
        subtitle={"Discover our featured projects and get inspired."}
        preheader="Our Work"
      />
      <ProjectGallery projects={projects} />
    </div>
  );
}
