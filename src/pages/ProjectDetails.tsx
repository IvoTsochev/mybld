import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProjectById } from "../hooks/useSanityData";
import { PortableText } from "@portabletext/react";
import { ImageSkeleton } from "../components/ImageSkeleton";
import { ImageLightbox } from "../components/ImageLightbox";
import { ProjectBanner } from "../components/ProjectBanner";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedField } from "../lib/i18n";

export const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project, isLoading } = useProjectById(id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { locale } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[50vh] bg-gray-200 animate-pulse rounded-xl mb-8"></div>
          <div className="h-10 w-3/4 bg-gray-200 animate-pulse rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Проектът не е намерен</h2>
          <Link
            to="/projects"
            className="text-[#ff7043] font-semibold hover:underline"
          >
            ← Обратно към всички проекти
          </Link>
        </div>
      </div>
    );
  }

  const title = getLocalizedField(project, "title", locale);
  const briefDescription = getLocalizedField(project, "briefDescription", locale);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Portable Text blocks, matches the loose typing already used for Sanity data elsewhere in this file
  const fullDescription = getLocalizedField<any[]>(project, "fullDescription", locale);

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      {/* Hero Header */}
      <div className="relative w-full h-[60vh] min-h-100 bg-gray-900">
        <ProjectBanner
          images={[
            ...(project.mainImage ? [project.mainImage] : []),
            ...(project.images ?? []),
          ]}
          alt={title || "Image"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1e] to-transparent opacity-90 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-6xl mx-auto z-10">
          <Link
            to="/projects"
            className="text-[#ff7043] font-semibold flex items-center mb-6 hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Всички проекти
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-[#ff7043] rounded-sm"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-[5%] mt-16">
        {/* Main Content (Portable Text) */}
        <div className="w-full max-w-none text-xl text-gray-700 leading-relaxed">
          {fullDescription ? (
            <PortableText value={fullDescription} />
          ) : (
            <p className="text-gray-600">{briefDescription}</p>
          )}
        </div>
      </div>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="max-w-6xl mx-auto px-[5%] mt-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1a1a24] mb-2">
              Галерия
            </h2>
            <div className="w-12 h-1 bg-[#ff7043] rounded-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index: number) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md h-72 group cursor-pointer relative"
                onClick={() => setLightboxIndex(index)}
              >
                {image.asset?.url ? (
                  <>
                    <img
                      src={image.asset.url}
                      alt={`${title} - \u0421\u043D\u0438\u043C\u043A\u0430 ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </>
                ) : (
                  <ImageSkeleton className="w-full h-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={project.images ?? []}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};
