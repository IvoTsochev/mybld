import React from "react";
import materialsBg from "../assets/materials.jpg";
import { ImageSkeleton } from "../components/ImageSkeleton";
import { dummyProjects } from "../data/projects";

export const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
      {/* Hero Section for Projects Page */}
      <div
        className="relative w-full h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${materialsBg})` }}
      >
        {/* Dark overlay to ensure text is readable regardless of the background image */}
        <div className="absolute inset-0 bg-[#0a0f1e]/70 z-10"></div>

        <div className="relative z-20 text-center px-5 mt-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Нашите Проекти
          </h1>
          <div className="w-[80px] h-1.5 bg-[#ff7043] mx-auto rounded-sm mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Разгледайте част от успешно реализираните ни обекти, които доказват
            нашето качество и прецизност.
          </p>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="max-w-[1440px] mx-auto px-[5%] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dummyProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1a1a24] mb-4 group-hover:text-[#ff7043] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#666666] leading-relaxed mb-8 flex-grow">
                  {project.subtitle}
                </p>

                {/* Visual anchor / pseudo-button since they aren't clickable yet */}
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-semibold text-[#ff7043] uppercase tracking-wider">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
