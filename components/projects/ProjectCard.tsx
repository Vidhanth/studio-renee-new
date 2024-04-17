import { Project } from "@/types/Project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105">
      <img
        src={project.coverImage.url}
        alt={project.coverImage.alt}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-black">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className=" bg-background px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="text-black">
          View project {">"}
        </a>
      </div>
    </div>
  );
}
