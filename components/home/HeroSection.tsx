import { FadeInLeft } from "@/transitions/FadeInLeft";
import ImageGrid from "./ImageGrid";
import { FadeIn } from "@/transitions";
import { archivo } from "@/fonts";

type HeroSectionProps = {
  images: string[];
  title: string;
  subtitle: string;
};

export default function HeroSection({
  images,
  title,
  subtitle,
}: HeroSectionProps) {
  const imageSection = (
    <div className="w-full overflow-hidden h-2/3 md:h-full md:w-1/2 md:p-0">
      <FadeIn delay={1.1}>
        <ImageGrid images={images}></ImageGrid>
      </FadeIn>
    </div>
  );

  const textSection = (
    <div className="w-full md:w-1/2 py-8">
      <FadeInLeft delay={0.6}>
        <h2
          className={`${archivo.className} text-4xl lg:text-5xl font-bold text-black mb-4`}
        >
          {title}
        </h2>
      </FadeInLeft>
      <FadeInLeft delay={0.9}>
        <p className="text-gray-700">{subtitle}</p>
      </FadeInLeft>
    </div>
  );

  return (
    <div
      className={`h-[calc(100vh-4rem)] flex max-w-6xl mx-auto px-6 md:flex-row flex-col md:justify-between md:items-center gap-x-10`}
    >
      {textSection}
      {imageSection}
    </div>
  );
}
