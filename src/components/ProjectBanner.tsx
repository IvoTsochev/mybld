import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageSkeleton } from "./ImageSkeleton";

interface ProjectBannerProps {
  images: Array<{ asset?: { url: string | null } | null }>;
  alt: string;
}

export const ProjectBanner = ({ images, alt }: ProjectBannerProps) => {
  const validImages = images.filter(
    (image): image is { asset: { url: string } } => Boolean(image?.asset?.url),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: validImages.length > 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (validImages.length === 0) {
    return <ImageSkeleton className="w-full h-full opacity-50" />;
  }

  return (
    <div className="relative w-full h-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {validImages.map((image, index) => (
          <div key={index} className="relative flex-none w-full h-full">
            <img
              src={image.asset.url}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        ))}
      </div>

      {validImages.length > 1 && (
        <>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex ? "bg-[#ff7043] w-6" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
