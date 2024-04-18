"use client";

import { Testimonial } from "@/types/Testimonial";
import Header from "../Header";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import FadeAnimation from "../FadeAnimation";

type Props = {
  heading?: string;
  description?: string;
  testimonials: Testimonial[];
};

export const TestimonialSection = ({
  heading,
  description,
  testimonials,
}: Props) => {
  if (testimonials.length == 0) return <div></div>;
  return (
    <section className="max-w-6xl px-6 mx-auto">
      <div>
        {heading && description && (
          <Header className="mb-10" title={heading} subtitle={description} />
        )}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={`${testimonial.testimonial}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type TestimonialItemProps = {
  testimonial: Testimonial;
};

export const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex gap-x-2">
        {Array(5)
          .fill(null)
          .map((_, starIndex) => {
            const roundedStars = Math.floor(testimonial.stars);
            const isHalfStar =
              roundedStars === starIndex && testimonial.stars % 1 !== 0;

            return (
              <FadeAnimation
                key={starIndex}
                overrideDirection="up"
                delay={(starIndex + 1) * 0.15}
                animateOnVisibility
              >
                <div className="relative mr-1">
                  <FaStar className="text-gray-300 size-6" />{" "}
                  {starIndex < roundedStars && (
                    <FaStar className="text-black size-6 absolute inset-0" />
                  )}
                  {isHalfStar && (
                    <FaStarHalf className="text-black size-6 absolute inset-0" />
                  )}
                </div>
              </FadeAnimation>
            );
          })}
      </div>
      <FadeAnimation overrideDirection="up" delay={0.2} animateOnVisibility>
        <blockquote
          className={`my-6 text-md leading-[1.4] before:content-['"'] after:content-['"'] md:my-8 md:text-lg`}
        >
          {testimonial.testimonial}
        </blockquote>
      </FadeAnimation>
      <FadeAnimation overrideDirection="up" delay={0.4} animateOnVisibility>
        <p className="font-semibold">{testimonial.name}</p>
      </FadeAnimation>
    </div>
  );
};
