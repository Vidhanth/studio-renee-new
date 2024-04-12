import { fetchProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
          <Image
            src={project.coverImage.url}
            alt={project.coverImage.alt || ""}
            width={350}
            height={350}
          />
        </div>
      ))}
    </div>
  );
}
