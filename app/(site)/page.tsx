import Divider from "@/components/Divider";
import Header from "@/components/Header";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { SectionComponent } from "@/components/Section";
import { fetchHomeData } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const homePageData = await fetchHomeData();

  return (
    <div className="overflow-hidden">
      <HeroSection
        images={homePageData?.carouselImages!}
        title={homePageData?.header!}
        subtitle={homePageData?.subheader!}
      />
      <Divider />
      {homePageData?.sections.map((section) => (
        <div key={section.title}>
          <SectionComponent section={section} />
          <Divider />
        </div>
      ))}
      <FAQSection faqItems={homePageData?.faq!} />
      <Divider />
      <Header
        title="Discover Our Work"
        subtitle={"Happy clients means happy places."}
      />
      <ProjectGallery
        projects={homePageData?.featuredProjects ?? []}
        showFilters={false}
        animateOnVisibility={true}
      />
      <Link href="/portfolio" className="flex justify-center">
        <button className="border-primary rounded-sm border py-2 px-4 hover:bg-primary hover:text-white transition-colors">
          View All
        </button>
      </Link>
      <Divider visible={false} />
    </div>
  );
}
