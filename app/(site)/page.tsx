import Divider from "@/components/Divider";
import Header from "@/components/Header";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { SectionComponent } from "@/components/Section";
import { fetchHomeData } from "@/sanity/sanity-utils";
import Link from "next/link";
import BudgetCalculatorWrapper from "@/components/BudgetCalculatorWrapper";
import { Metadata } from "next";
import { cache } from "react";

const defaultTitle = "Studio Renée - Commercial, Retail, Office and Home Interiors | Bangalore";
const defaultDescription = "Transform your space with Studio Renée's expert interior design services in Bangalore. Specializing in commercial, retail, office, and home interiors. Get professional architectural solutions for modern, aesthetic spaces.";
const defaultKeywords = "interiors, architecture, home, commercial, design, interior design, commercial designer, commercial interior, home designer, home interior, modern interior design, interior architect, design architects, bangalore, india, interior designer bangalore, best interior designers bangalore, top interior designers, luxury interiors, office interiors, retail interiors, commercial spaces";

const getHomePageData = cache(async () => {
  const homePageData = await fetchHomeData();
  return homePageData;
});

export async function generateMetadata(): Promise<Metadata> {
  const homePageData = await getHomePageData();

  return {
    metadataBase: new URL("https://studiorenee.co.in"),
    title: defaultTitle,
    description: defaultDescription,
    keywords: (homePageData?.keywords || defaultKeywords).split(",").map(keyword => keyword.trim()),
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      type: "website",
      locale: "en_IN",
      siteName: "Studio Renée",
      images: [
        {
          url: "og_image.png",
          width: 1200,
          height: 630,
          alt: "Studio Renée - Interior Design Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["og_image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Home() {
  const homePageData = await getHomePageData();

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
      <Divider />
      <TestimonialSection
        heading="Client Testimonials"
        description="Hear what our happy customers have to say!"
        testimonials={homePageData?.featuredTestimonials ?? []}
      />
      <Divider visible={false} />
      <BudgetCalculatorWrapper />
    </div>
  );
}
