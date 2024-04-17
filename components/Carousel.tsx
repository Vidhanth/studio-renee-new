"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Image } from "@/types/Project";
import OverlayDialog from "./OverlayDialog";
import { archivo } from "@/fonts";
import { FadeInLeftWhenVisible } from "@/transitions/FadeInLeftWhenVisible";

type Props = {
  heading: string;
  description: string;
  images: Image[];
};

export type CarouselProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const ProjectCarousel = ({
  heading,
  description,
  images,
}: CarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isShowingOverlay, setIsShowingOverlay] = useState(false);
  const [imageToShow, setImageToShow] = useState<Image>(images[0]);

  // for all available options: https://www.embla-carousel.com/api/options/
  const options = {
    loop: true,
    align: "start",
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden max-w-6xl mx-auto px-6 mb-10">
      <div className="flex flex-col gap-y-3 mb-10">
        <FadeInLeftWhenVisible>
          <h2 className={`${archivo.className} text-5xl font-bold`}>
            {heading}
          </h2>
        </FadeInLeftWhenVisible>
        <FadeInLeftWhenVisible delay={0.3}>
          <p>{description}</p>
        </FadeInLeftWhenVisible>
      </div>
      <Carousel setApi={setApi} opts={options}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={`${image.url}-${index}`}
              className="basis-auto pr-2 md:pr-4"
            >
              <FadeInLeftWhenVisible delay={0.2 * index}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-[314px] sm:h-[408px] md:h-[408px]"
                  onClick={() => {
                    setImageToShow(image);
                    setIsShowingOverlay(true);
                  }}
                />
              </FadeInLeftWhenVisible>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-[38px] flex items-center justify-between">
          <div className="mt-4 flex w-full items-start justify-start">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                  "bg-primary": current === index + 1,
                  " bg-tertiary": current !== index + 1,
                })}
              />
            ))}
          </div>
          <div className="flex items-end justify-end gap-2 md:gap-4">
            <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
            <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
          </div>
        </div>
      </Carousel>
      <OverlayDialog
        image={imageToShow}
        isOpen={isShowingOverlay}
        onClose={() => {
          setIsShowingOverlay(false);
        }}
      />{" "}
    </section>
  );
};
