import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: Array<{ asset?: { url: string | null } | null }>;
  initialIndex: number;
  onClose: () => void;
}

export const ImageLightbox = ({
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) => {
  const validImages = images.filter(
    (image): image is { asset: { url: string } } => Boolean(image?.asset?.url),
  );
  const [currentIndex, setCurrentIndex] = useState(
    Math.min(initialIndex, Math.max(validImages.length - 1, 0)),
  );

  if (validImages.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + validImages.length) % validImages.length,
    );
  };

  // Handle Keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]); // Need currentIndex in dependency array for handleNext/Prev to have latest state if called from listener

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-100 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-100 px-4 py-2 bg-black/40 text-white rounded-full text-sm font-medium tracking-wider">
        {currentIndex + 1} / {validImages.length}
      </div>

      {/* Main Image */}
      <div className="relative z-40 max-w-[90vw] max-h-[90vh] flex items-center justify-center select-none">
        <img
          src={validImages[currentIndex].asset.url}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
        />
      </div>

      {/* Navigation Arrows */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 md:left-12 z-100 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/60 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 md:right-12 z-100 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/60 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}
    </div>
  );
};
