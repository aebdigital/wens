"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Lightbox from "@/components/Lightbox";
import { REFERENCE_TABS } from "@/lib/data";
import { REFERENCE_PROJECTS } from "@/lib/references";

function slugify(name: string, category: string) {
  return `${category}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`;
}

export default function ReferenciePage() {
  const [activeTab, setActiveTab] = useState("dvere");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = useMemo(
    () => REFERENCE_PROJECTS.filter((p) => p.category === activeTab),
    [activeTab]
  );

  const allImages = useMemo(
    () => filteredProjects.flatMap((p) => p.images),
    [filteredProjects]
  );

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  const scrollToProject = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHero title="Referencie" image="/sources/slider2.jpg">
        {/* Desktop tabs */}
        <div className="hidden md:flex flex-nowrap justify-center">
          {REFERENCE_TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-w-[120px] px-5 py-3 text-white font-medium text-sm uppercase tracking-[0.5px] transition-all duration-300 text-center whitespace-nowrap border border-white/30 backdrop-blur-[5px] cursor-pointer ${i < REFERENCE_TABS.length - 1 ? "border-r-0" : ""
                } ${activeTab === tab.id
                  ? "bg-black/60 backdrop-blur-[10px] border-white/40"
                  : "bg-white/15 hover:bg-white/25 hover:border-white/50 hover:-translate-y-px"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Mobile dropdown */}
        <div className="md:hidden w-full relative">
          {dropdownOpen && (
            <div
              className="fixed inset-0 bg-white/70 backdrop-blur-[5px] z-[100] md:hidden"
              onClick={() => setDropdownOpen(false)}
            />
          )}
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="w-full px-5 py-4 bg-white/15 backdrop-blur-[10px] text-white border border-white/50 text-sm font-medium uppercase tracking-[0.5px] cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-white/25 relative z-[102]"
          >
            <span>{REFERENCE_TABS.find((t) => t.id === activeTab)?.label}</span>
            <span className={`text-xs transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          <div
            className={`absolute top-full left-0 w-full bg-white border border-gray-200 border-t-0 z-[101] overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-[500px]" : "max-h-0 border-transparent"
              }`}
          >
            {REFERENCE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setDropdownOpen(false);
                }}
                className={`block w-full text-left px-5 py-4 text-sm uppercase tracking-[0.5px] border-t border-gray-200 cursor-pointer transition-colors duration-200 ${activeTab === tab.id
                  ? "bg-gray-200 font-semibold text-primary"
                  : "bg-white text-primary hover:bg-gray-100"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </PageHero>
      {/* Mobile dropdown blur overlay moved inside PageHero for stacking context */}


      {/* Gallery Content */}
      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="flex gap-10 items-start">
            {/* Main gallery */}
            <div key={activeTab} className="flex-1 min-w-0 animate-fadeInUp">
              {filteredProjects.map((project) => {
                const projectStartIndex = allImages.indexOf(project.images[0]);
                const projectId = slugify(project.name, project.category);
                return (
                  <div key={project.name + project.category} id={projectId} className="mb-12">
                    <div className="w-[60px] h-[3px] bg-accent mb-3" />
                    <h2 className="text-xl font-semibold text-black mb-1">
                      {project.name}
                    </h2>
                    {project.description && (
                      <p className="text-sm text-gray-500 mb-5">{project.description}</p>
                    )}
                    {!project.description && <div className="mb-5" />}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-[5px]">
                      {project.images.map((img, imgIdx) => (
                        <button
                          key={img.src}
                          onClick={() => openLightbox(projectStartIndex + imgIdx)}
                          className="group relative h-[200px] md:h-[280px] overflow-hidden cursor-pointer"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar - project navigation */}
            <div className="hidden lg:block w-[280px] shrink-0">
              <div className="bg-[#f8f9fa] rounded-lg p-5">
                <ul className="space-y-0">
                  {filteredProjects.map((project) => {
                    const projectId = slugify(project.name, project.category);
                    return (
                      <li key={projectId}>
                        <button
                          onClick={() => scrollToProject(projectId)}
                          className="w-full text-left text-sm text-primary py-3 px-4 rounded-md bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-x-[5px] relative overflow-hidden mb-1 cursor-pointer before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-accent before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100"
                        >
                          {project.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={allImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === 0 ? allImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === allImages.length - 1 ? 0 : prev + 1
          )
        }
      />
    </>
  );
}
