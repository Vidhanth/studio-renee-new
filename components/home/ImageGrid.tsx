"use client";

import { useEffect, useState } from "react";

type ImageGridProps = {
  images: string[];
};

export default function ImageGrid({ images }: ImageGridProps) {
  const quadImages = [...images, ...images, ...images, ...images];

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex h-full overflow-hidden gap-x-2">
      <div className="w-1/2">
        <div
          className={`flex flex-col items-center space-y-2 ${
            isAnimating ? "scroll-up" : ""
          }`}
        >
          {quadImages
            .filter((_, index) => index % 2 === 0)
            .map((url, index) => (
              <img
                key={`left-${index}`}
                src={url}
                alt={`Left Image ${index}`}
                className="max-w-full h-auto rounded-sm"
              />
            ))}
        </div>
      </div>
      <div className="w-1/2">
        <div
          className={`flex flex-col items-center space-y-2 ${
            isAnimating ? "scroll-down" : ""
          }`}
        >
          {quadImages
            .filter((_, index) => index % 2 !== 0)
            .map((url, index) => (
              <img
                key={`right-${index}`}
                src={url}
                alt={`Right Image ${index}`}
                className="max-w-full rounded-sm h-auto"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
