import { ProjectCarousel } from "@/components/Carousel";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { TestimonialItem } from "@/components/home/TestimonialSection";
import { SectionComponent } from "@/components/Section";
import { defaultMetadata } from "@/constants";
import { fetchProject } from "@/sanity/sanity-utils";
import { FadeIn } from "@/transitions";
import { FadeInLeft } from "@/transitions/FadeInLeft";
import { toTitleCase } from "@/utils/string";

type Props = {
  params: {
    slug: string;
  };
};

export const metadata = {
  ...defaultMetadata,
  title: `Portfolio - ${defaultMetadata.title}`,
};

export default async function ProjectPage({ params }: Props) {
  const project = await fetchProject(params.slug);
  return (
    <div className="mt-10">
      <Header title={project!.name} subtitle={project!.subtitle} />
      <div className="flex justify-center space-x-4 mb-10 mt-5">
        {project?.tags.map((tag, index) => (
          <FadeInLeft delay={index * 0.2 + 0.2} key={tag}>
            <div
              className={`rounded min-w-24 py-1 text-sm text-center font-medium text-black bg-tertiary `}
            >
              {toTitleCase(tag)}
            </div>
          </FadeInLeft>
        ))}
      </div>
      <FadeIn delay={0.8}>
        <img
          className="max-w-6xl mx-auto max-h-svh w-full px-6 object-contain"
          src={project?.coverImage.url}
          alt={project?.coverImage.alt}
        />
      </FadeIn>
      <Divider />
      <SectionComponent
        section={{
          title: project!.descriptionTitle,
          description: project!.longDescription,
          image: project!.descriptionImage.url,
        }}
      />
      <Divider />
      <ProjectCarousel
        images={project?.images || []}
        heading={"Image Gallery"}
        description={"Check out other images from this project."}
      />
      {project?.testimonial && (
        <>
          <Divider />
          <Header
            title={"Client's Review"}
            subtitle="We value feedback from our clients"
          />
          <div className="grid mt-8 mx-auto place-items-center max-w-lg px-6">
            <TestimonialItem testimonial={project.testimonial} />
          </div>
          <Divider visible={false} />
        </>
      )}
    </div>
  );
}
