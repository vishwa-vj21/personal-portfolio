import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  wrapperClassName?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  imgClassName,
  wrapperClassName,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("overflow-hidden", wrapperClassName)}>
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        afterLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-500",
          isLoaded ? "scale-100 blur-0" : "scale-105 blur-sm",
          imgClassName
        )}
        wrapperClassName={cn("w-full h-full", className)}
      />
    </div>
  );
};

export default LazyImage;
