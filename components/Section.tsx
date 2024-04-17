import { archivo } from "@/fonts";
import { FadeInWhenVisible } from "@/transitions";
import { FadeInLeftWhenVisible } from "@/transitions/FadeInLeftWhenVisible";
import { Section } from "@/types/HomeData";

interface SectionProps {
  section: Section;
}

export function SectionComponent({ section }: SectionProps) {
  const imageSection = (
    <div
      className={`w-full py-0 md:py-0 md:w-1/2 ${
        section.showOnLeft ? "md:pr-10" : "md:pl-10"
      }`}
    >
      <FadeInWhenVisible delay={0.2}>
        <img
          src={section.image}
          alt=""
          className="w-full h-auto shadow-lg rounded-sm"
        />
      </FadeInWhenVisible>
    </div>
  );

  const textSection = (
    <div className="w-full md:w-1/2 pt-4">
      <FadeInLeftWhenVisible delay={0.6}>
        <h2
          className={`${archivo.className} text-3xl font-bold text-black mb-4`}
        >
          {section.title}
        </h2>
      </FadeInLeftWhenVisible>
      <FadeInLeftWhenVisible delay={0.8}>
        <p className="text-gray-700">{section.description}</p>
      </FadeInLeftWhenVisible>
    </div>
  );

  return (
    <div
      className={`max-w-6xl mx-auto px-6 flex text-center md:text-start ${
        section.showOnLeft
          ? "md:flex-row md:justify-between justify-center"
          : "md:flex-row-reverse md:justify-between justify-center"
      } flex-wrap items-center`}
    >
      {imageSection}
      {textSection}
    </div>
  );
}
