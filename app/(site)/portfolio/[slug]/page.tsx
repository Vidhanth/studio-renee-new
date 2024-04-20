import { ProjectCarousel } from "@/components/Carousel";
import Divider from "@/components/Divider";
import FadeAnimation from "@/components/FadeAnimation";
import Header from "@/components/Header";
import { TestimonialItem } from "@/components/home/TestimonialSection";
import { SectionComponent } from "@/components/Section";
import { defaultMetadata } from "@/constants";
import { fetchProject } from "@/sanity/sanity-utils";
import { FadeIn } from "@/transitions";

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
      <Header title={project!.name} />

      <FadeAnimation
        animateOnVisibility
        overrideDirection="up"
        delay={0.6}
        className="max-w-6xl px-6 mx-auto py-5 text-center flex flex-col md:flex-row justify-center gap-y-1"
      >
        <div>
          What: {project?.what} | Where: {project?.location}
        </div>
        <div className="hidden md:block">&nbsp;|&nbsp;</div>
        <div>When: {project?.year}</div>
      </FadeAnimation>

      {project?.tags.map((tag, index) => (
        <div key={index} className={`invisible text-sm size-1`}>
          {tag}
        </div>
      ))}
      <FadeIn delay={0.8}>
        <img
          className="max-w-6xl mx-auto max-h-svh w-full px-6 object-contain"
          src={project?.descriptionImage.url}
          alt={project?.descriptionImage.alt}
        />
      </FadeIn>
      <Divider />
      <SectionComponent
        section={{
          title: project!.descriptionTitle,
          description: project!.longDescription,
          image: project!.coverImage.url,
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
