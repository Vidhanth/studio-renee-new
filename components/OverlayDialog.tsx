"use client";

import { FadeIn } from "@/transitions";
import { Image } from "@/types/Project";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@relume_io/relume-ui";
import { useEffect, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward, IoMdClose } from "react-icons/io";
import clsx from "clsx";

type OverlayDialogProps = {
  images: Image[];
  startIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

const OverlayDialog = ({
  startIndex,
  images,
  isOpen,
  onClose,
}: OverlayDialogProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log(event.key);
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        api?.scrollPrev();
      }
      if (event.key === "ArrowRight") {
        api?.scrollNext();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [api, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-background flex justify-center p-4 shadow-lg h-full w-full overflow-hidden">
        <FadeIn>
          <Carousel
            setApi={setApi}
            opts={{ startIndex: startIndex, loop: true, align: "center" }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={`${image.url}-${index}`}
                  className="flex justify-center items-center h-screen"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="max-h-[80vh] max-w-[90vw] box-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </FadeIn>
        <div className="absolute top-5 right-5 flex gap-x-1">
          <div className=" border border-gray-600 rounded-full p-2">
            <IoMdArrowBack
              className="text-black right-5 text-xl  cursor-pointer"
              onClick={() => {
                api?.scrollPrev();
              }}
            />
          </div>
          <div className=" border border-gray-600  rounded-full p-2">
            <IoMdArrowForward
              className="text-black right-5 text-xl cursor-pointer"
              onClick={() => {
                api?.scrollNext();
              }}
            />
          </div>
          <div className=" border border-gray-600 rounded-full p-2 ml-2">
            <IoMdClose
              className=" text-black  text-xl cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="absolute bottom-5 flex w-full gap-x-1 items-start justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx("size-2 rounded-full", {
                "bg-primary": current === index + 1,
                " bg-tertiary": current !== index + 1,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlayDialog;
