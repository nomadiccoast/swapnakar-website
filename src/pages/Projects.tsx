/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { Project } from "../types";

// EDIT CONTENT: all images and text for this component are here
const PROJECTS_DATA: Project[] = [
  {
    id: "civil-lines-villa",
    title: "The Grand Civil Lines Estate",
    category: "Residential",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "A luxury multi-generational residence in the heart of Civil Lines, featuring high soaring ceilings, custom carved jaali screens, and complete Vastu compliance.",
    location: "Civil Lines, Prayagraj",
    year: "2024"
  },
  {
    id: "high-street-retail",
    title: "Avant-Garde Commercial Hub",
    category: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "A modern commercial plaza with dynamic glazing elements designed for maximum footfall, premium tenant spaces, and energy-efficient climate control systems.",
    location: "Katra High Street, Prayagraj",
    year: "2023"
  },
  {
    id: "sangam-retreat",
    title: "The Riverscape Wellness Resort",
    category: "Institutional",
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "An institutional wellness center aligned to the sunrise axis. Incorporating quiet meditation courtyards, green roofs, and passive cooling stone facades.",
    location: "Sangam Coastline, Prayagraj",
    year: "2025"
  },
  {
    id: "prayagraj-airport",
    title: "The badlands",
    category: "Residential",
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "A luxury residential complex in the heart of Prayagraj, featuring high soaring ceilings, custom carved jaali screens, and complete Vastu compliance.",
    location: "Prayagraj Airport, Prayagraj",
    year: "2025"
  },
  {
    id: "minimalist-penthouse",
    title: "The Monochrome Sky Penthouse",
    category: "Interior Design",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "A sleek interior design concept featuring premium Italian marble surfaces, smart concealed automation, custom built brass panels, and modular kitchen suites.",
    location: "George Town, Prayagraj",
    year: "2024"
  },
  {
    id: "tagore-town-mansion",
    title: "Classical Colonial Manor",
    category: "Residential",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "Reviving vintage colonial aesthetics in Tagore Town. Spanning large wraparound verandas, premium teakwood doorways, and lush structural gardens.",
    location: "Tagore Town, Prayagraj",
    year: "2023"
  },
  {
    id: "creative-office-loft",
    title: "Synergy Creative Workspace",
    category: "Interior Design",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    description: "An open workspace featuring custom interactive breakout desks, acoustically insulated phone booths, and vibrant vertical planting panels.",
    location: "Civil Lines Corporate Hub, Prayagraj",
    year: "2024"
  }
];

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
};

type CategoryType = "Residential" | "Commercial" | "Institutional" | "Interior Design";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryType>("Residential");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const tabs: CategoryType[] = ["Residential", "Commercial", "Institutional", "Interior Design"];

  // Filter project instances based on active tab selection
  const filteredProjects = PROJECTS_DATA.filter(
    (project) => project.category === activeTab
  );

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev: number) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev: number) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // Keyboard accessibility for lightbox
  useState(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev: number) => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev: number) => 
          prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block mb-3">
            SELECTED PORTFOLIO
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] font-semibold leading-none mb-4">
            Our Work
          </h1>
          <p className="text-base md:text-lg text-mid-grey font-sans mb-3">
            Every project is a story. Every space, a life transformed.
          </p>
        </div>

        {/* Horizontal Navigation Filtering Tabs */}
        <div className="border-b border-[#F4F4F2] mb-12 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex space-x-8 md:space-x-12 whitespace-nowrap min-w-max pb-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative pb-3 text-sm font-sans tracking-widest uppercase font-bold transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  <span className={isActive ? "text-[#1C1C1C]" : "text-mid-grey hover:text-[#1C1C1C]"}>
                    {tab}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Masonry / Editorial Asymmetric Layout Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout sizing allocation based on index
            // Large cards span 7 columns, small span 5, default handles 6 etc.
            const gridClass = 
              idx % 3 === 0 
                ? "lg:col-span-7" 
                : idx % 3 === 1 
                ? "lg:col-span-5" 
                : "lg:col-span-12 max-w-5xl mx-auto w-full";

            const aspectClass = idx % 3 === 2 ? "aspect-[21/9]" : "aspect-[3/2]";

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`${gridClass} flex flex-col cursor-pointer group`}
                onClick={() => openLightbox(project)}
              >
                {/* Visual Image container with slide hover effects */}
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-warm-grey border border-transparent group-hover:border-gold transition-all duration-300`}>
                  
                  {/* SWAP IMAGE: Each project showcase thumbnail image */}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Absolute subtle category label */}
                  <div className="absolute top-4 left-4 bg-pure-black text-white px-3 py-1 text-[10px] font-sans tracking-widest uppercase font-bold z-10">
                    {project.category}
                  </div>

                  {/* Premium Slide-Up Title Overlay */}
                  <div className="absolute inset-0 bg-pure-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <p className="text-gold text-xs font-sans tracking-widest uppercase font-bold mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      View Details &amp; Gallery
                    </p>
                    <h3 className="font-serif text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>

                </div>

                {/* Flat Details list */}
                <div className="pt-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1C1C] font-semibold group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-mid-grey font-sans uppercase tracking-widest mt-1">
                      {project.location}
                    </p>
                  </div>
                  <span className="text-xs text-[#9A9A9A] font-sans tracking-wider border border-[#F4F4F2] px-2 py-0.5">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State warning */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-mid-grey">No projects available for this category yet.</p>
          </div>
        )}

      </div>

      {/* FULLSCREEN CUSTOM LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0ACC] backdrop-blur-md flex flex-col justify-between p-6 md:p-12"
            onClick={closeLightbox}
          >
            {/* Modal Navigation Header */}
            <div className="flex items-center justify-between w-full text-white">
              <div className="flex flex-col">
                <span className="text-[10px] font-sans tracking-widest text-[#B8935A] uppercase font-bold">
                  {selectedProject.category} PORTFOLIO
                </span>
                <span className="font-serif text-lg md:text-xl font-bold">
                  {selectedProject.title}
                </span>
              </div>

              {/* Close Action button */}
              <button
                onClick={closeLightbox}
                className="p-3 bg-white/10 hover:bg-gold text-white hover:text-black rounded-none transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Showcase content area */}
            <div className="my-auto relative max-w-5xl mx-auto w-full flex items-center justify-center p-4">
              
              {/* Prev control */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-0 md:-left-12 z-10 p-3 bg-white/10 hover:bg-gold hover:text-black text-white rounded-none transition-all"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Image box frame */}
              <div className="bg-pure-black max-h-[60vh] md:max-h-[70vh] aspect-video w-full overflow-hidden flex items-center justify-center relative">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} - Space Frame ${activeImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                
                {/* Visual Image Pagination trackers */}
                <div className="absolute bottom-4 left-4 bg-pure-black/80 px-3 py-1 font-sans text-[11px] text-[#C4C4C2] rounded-none tracking-widest">
                  {activeImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Next control */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-0 md:-right-12 z-10 p-3 bg-white/10 hover:bg-gold hover:text-black text-white rounded-none transition-all"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

            </div>

            {/* Gallery description block footer */}
            <div className="max-w-4xl mx-auto w-full text-white text-center md:pb-4 space-y-3">
              <p className="text-sm md:text-base font-sans text-[#D4D4D2] max-w-2xl mx-auto">
                {selectedProject.description}
              </p>
              
              <div className="flex items-center justify-center gap-6 text-xs text-mid-grey font-sans uppercase tracking-widest">
                {selectedProject.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {selectedProject.location}
                  </span>
                )}
                {selectedProject.year && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {selectedProject.year}
                  </span>
                )}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
