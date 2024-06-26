"use client";

import { Project } from "@/types/Project";
import { toTitleCase } from "@/utils/string";
import Link from "next/link";
import { useState } from "react";
import FadeAnimation from "../FadeAnimation";

type ProjectGalleryProps = {
  projects: Project[];
  animateOnVisibility?: boolean;
  showFilters?: boolean;
};

export default function ProjectGallery({
  projects,
  animateOnVisibility = false,
  showFilters = true,
}: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const projectCategories = new Set(projects.map((project) => project.type));
  const categories = Array.from(projectCategories);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.type.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10 mb-10">
      {showFilters && (
        <div className="flex flex-wrap md:flex-row no-scrollbar justify-center md:justify-center mb-10 md:space-x-2">
          {["All", ...categories].map((category, index) => (
            <FadeAnimation
              delay={(index + 1) * 0.2 + 0.5}
              key={`${category}-${index}`}
              className="mr-2 md:mr-0"
            >
              <button
                className={`border rounded my-1 py-1 px-3 text-sm font-medium ${
                  activeCategory === category
                    ? "text-black bg-tertiary border-primary"
                    : "text-black bg-tertiary border-transparent"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {toTitleCase(category)}
              </button>
            </FadeAnimation>
          ))}
        </div>
      )}
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {...filteredProjects.map((project, index) => (
          <FadeAnimation
            animateOnVisibility={animateOnVisibility}
            delay={(index + 1) * 0.2}
            key={`${project._id}-${index}`}
          >
            <Link href={`/portfolio/${project.slug}`}>
              <div className="relative group text-white w-full h-[408px] mb-0 overflow-hidden rounded-sm">
                <img
                  src={project.coverImage.url}
                  alt={project.coverImage.alt || project.name}
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute flex flex-col justify-end h-full bottom-0 left-0 right-0 bg-gradient-to-tr from-black/90 via-transparent to-transparent p-4">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-sm">{project.shortDescription}</p>
                </div>
              </div>
            </Link>
          </FadeAnimation>
        ))}
      </div>
    </div>
  );
}
