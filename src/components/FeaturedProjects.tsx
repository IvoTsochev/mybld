import { Link } from "react-router-dom";
import { ImageSkeleton } from "./ImageSkeleton";
import { useFeaturedProjectsData } from "../hooks/useSanityData";

export const FeaturedProjects = () => {
  const { data: sanityData, isLoading } = useFeaturedProjectsData();

  if (isLoading) {
    return (
      <section className="w-full bg-[#f8f9fa] py-24 px-[5%] font-sans" id="featured-projects">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="w-64 h-10 bg-gray-200 animate-pulse rounded mb-2"></div>
            <div className="w-15 h-1 bg-gray-300 mt-2 rounded-sm mb-6"></div>
            <div className="w-full max-w-2xl h-16 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                <ImageSkeleton className="w-full h-80" />
                <div className="p-10 grow flex flex-col">
                  <div className="w-3/4 h-8 bg-gray-200 animate-pulse rounded mb-4"></div>
                  <div className="w-full h-16 bg-gray-200 animate-pulse rounded mb-8 grow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const title = sanityData?.title || "Избрани Проекти";
  const description = sanityData?.description || "Разгледайте част от най-впечатляващите ни проекти, реализирани с безкомпромисно качество и внимание към детайла.";
  const featuredProjects = sanityData?.projects || [];

  return (
    <section className="w-full bg-[#f8f9fa] py-24 px-[5%] font-sans" id="featured-projects">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[2.5rem] font-extrabold text-[#1a1a24] mb-2 text-center">
            {title}
          </h2>
          <div className="w-15 h-1 bg-[#ff7043] mt-2 rounded-sm mb-6"></div>
          <p className="text-[#555] text-center max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProjects.map((project: any) => (
            <Link
              to={`/projects/${project._id}`}
              key={project._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full group block"
            >
              {/* Image Container */}
              <div className="w-full h-80 relative overflow-hidden bg-gray-100">
                {project.mainImage?.asset?.url ? (
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <ImageSkeleton className="w-full h-full" />
                )}

                {/* Decorative overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col grow">
                <h3 className="text-2xl font-bold text-[#1a1a24] mb-4 group-hover:text-[#ff7043] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#666666] leading-relaxed mb-8 grow">
                  {project.briefDescription}
                </p>

                {/* Visual anchor / pseudo-button */}
                <div className="mt-auto">
                  <span
                    className="inline-flex items-center text-sm font-semibold text-[#ff7043] uppercase tracking-wider"
                  >
                    Разгледай проекта
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            to="/projects" 
            className="bg-[#1a1a24] text-white px-8 py-4 rounded font-semibold transition-all duration-300 hover:bg-[#ff7043] hover:shadow-lg inline-flex items-center"
          >
            Всички проекти
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

