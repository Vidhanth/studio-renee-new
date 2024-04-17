import TeamMemberSection from "@/components/about/TeamMemberSection";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { SectionComponent } from "@/components/Section";
import { defaultMetadata } from "@/constants";
import { archivo } from "@/fonts";
import { fetchTeamMembers } from "@/sanity/sanity-utils";

export const metadata = {
  ...defaultMetadata,
  title: `About Us - ${defaultMetadata.title}`,
};

export default async function AboutPage() {
  const members = await fetchTeamMembers();
  return (
    <>
      <Header
        title={"Welcome to Studio Reneé"}
        subtitle={
          "Where design meets joy, creating spaces that reflect your unique style."
        }
        bgTexture="pre-footer"
      />
      <Divider visible={false} />
      <SectionComponent
        section={{
          title:
            "Experience personalized design journeys that bring your vision to life.",
          description:
            "At Studio Renee, we believe in creating sustainable designs that not only enhance your space but also contribute to a better future.",
          image: "/img/about-section.png",
          showOnLeft: false,
        }}
      />
      <Divider />
      <div className="max-w-6xl mx-auto text-center items-center md:text-start flex flex-col md:flex-row justify-between gap-x-10 px-6">
        <h2
          className={
            archivo.className + " text-3xl font-bold text-black md:w-1/2"
          }
        >
          Creating Joyful and Refreshing Designs that Reflect Our Design
          Philosophy
        </h2>
        <p className="text-gray-700 md:w-1/2">
          At Renée, we believe in giving life to ideas that are joyful and
          refreshing as a reflection of everything we stand for as designers.
          We, as a team, hope that our enthusiasm and passion help us in
          consistently delivering exhilarating and utilitarian ideas and we
          forward to accomplish our promise as you accompany us on this journey!
        </p>
      </div>
      <Divider />
      <TeamMemberSection members={members} />
      <div className="my-10"></div>
    </>
  );
}
