"use client";

import { FadeIn } from "@/transitions";
import { Image } from "@/types/Project";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

type OverlayDialogProps = {
  image: Image;
  isOpen: boolean;
  onClose: () => void;
};

const OverlayDialog = ({ image, isOpen, onClose }: OverlayDialogProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-background flex justify-center p-4 shadow-lg h-full w-full overflow-hidden">
        <FadeIn>
          <img
            src={image.url}
            alt={image.alt}
            className="h-full object-contain"
          />
        </FadeIn>
        <MdOutlineClose
          className="absolute top-5 text-black right-5 text-3xl z-51 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default OverlayDialog;
