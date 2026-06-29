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
    id: "hotel 1",
    title: "Hotel Heaven View",
    category: "Commercial",
    images: [
      "./COMMERCIAL/hotel_1.jpg",
      "./COMMERCIAL/hotel_2.jpg",
    ],
    description: "Hotel",
    location: "Gopiganj,Bhadohi",
    year: "2022",
  },
   {
    id: "hotel_jssp",
    title: "Jai Shree Sarovar",
    category: "Commercial",
    images: [
      "./COMMERCIAL/jssp1.jpg",
      "./COMMERCIAL/jssp2.jpg",
    ],
    description: "Hotel",
    location: "Manjhan pur,Kausambhi",
    year: "2026"
  },
  {
    id: "sports-club",
    title: "Prayagraj Sports CLub",
    category: "Commercial",
    images: [
      "./COMMERCIAL/sports-club.jpg",
      "./COMMERCIAL/sports-club1.jpg",
    ],
    description: "Sports Club",
    location: "Civil Lines, Prayagraj",
    year: "2024"
  },
   
  {
    id: "panchsheel-hotel",
    title: "Hotel Panchsheel",
    category: "Commercial",
    images: [
      "./COMMERCIAL/hotel-panchsheel.jpg",
      "./COMMERCIAL/hotel-panchsheel1.jpg",
    ],
    description: "Hotel",
    location: "Ayodhya",
    year: "2026"
  },
  {
    id: "bharvari",
    title: "Hotel Bharavari",
    category: "Commercial",
    images: [
      "./COMMERCIAL/bharvari-hotel.jpg",
      "./COMMERCIAL/bharvari-hotel1.jpg",
    ],
    description: "Hotel",
    location: "Kausambhi",
    year: "2025"
  },
  {
    id: "vitthal-hotel",
    title: "Hotel Vitthal",
    category: "Commercial",
    images: [
      "./COMMERCIAL/hotel-vitthal.jpg",
    ],
    description: "Hotel",
    location: "Prayagraj",
    year: "2015"
  },
   {
    id: "complex",
    title: "Commercial Complex",
    category: "Commercial",
    images: [
      "./COMMERCIAL/complex.jpg",
    ],
    description: "Commercial Complex",
    location: "Prayagraj",
    year: "2019"
  },
  {
    id: "hotel-rosewood",
    title: "Rosewood Hotel",
    category: "Commercial",
    images: [
      "./COMMERCIAL/hotel-rosewood.jpg",
    ],
    description: "Hotel",
    location: "Prayagraj",
    year: "2021"
  },
  {
    id: "emerald-complex",
    title: "Commercial Complex",
    category: "Commercial",
    images: [
      "./COMMERCIAL/emerald-complex.jpg",
    ],
    description: "Commercial Complex",
    location: "Prayagraj",
    year: "2026"
  },
  {
    id: "comm-complex",
    title: "Commercial Complex",
    category: "Commercial",
    images: [
      "./COMMERCIAL/comm-complex.jpg",
    ],
    description: "Commercial Complex",
    location: "Karchana,Prayagraj",
    year: "2026"
  },
  {
    id: "hospital-parikh",
    title: "Parikh Hospital",
    category: "Commercial",
    images: [
      "./COMMERCIAL/parikh-hospital.jpg",
    ],
    description: "Parikh Hospital",
    location: "Prayagraj",
    year: "2019"
  },
  {
    id: "mill",
    title: "Floor Mill",
    category: "Commercial",
    images: [
      "./COMMERCIAL/mill0.jpg",
      "./COMMERCIAL/mill1.jpeg",
      "./COMMERCIAL/mill2.jpeg",
      "./COMMERCIAL/mill3.jpeg",
      "./COMMERCIAL/mill4.jpeg",
    ],
    description: "Floor Mill",
    location: "Chunaar",
    year: "2020"
  },
  {
    id: "guest-house",
    title: "Guest House",
    category: "Commercial",
    images: [
      "./COMMERCIAL/guest-house.jpg",
    ],
    description: "Guest House",
    location: "Prayagraj",
    year: "2023"
  },
  {
    id: "hotel-golden",
    title: "Golden Hotel",
    category: "Commercial",
    images: [
      "./COMMERCIAL/hotel-golden.jpg",
    ],
    description: "Golden Hotel",
    location: "Naini Prayagraj",
    year: "2023"
  },
  {
    id: "Institutional-1",
    title: "CBSE School",
    category: "Institutional",
    images: [
      "./INSTITUTIONAL/1.jpg",
       "./INSTITUTIONAL/2.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "Institutional-2",
    title: "X-EED School and College",
    category: "Institutional",
    images: [
      "./INSTITUTIONAL/B.jpg",
      "./INSTITUTIONAL/B1.jpg",
      "./INSTITUTIONAL/B2.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "Institutional-3",
    title: "CBSE School and College",
    category: "Institutional",
    images: [
      "./INSTITUTIONAL/3.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "Institutional-4",
    title: "CBSE School",
    category: "Institutional",
    images: [
      "./INSTITUTIONAL/M.png",
       "./INSTITUTIONAL/M1.png",
       "./INSTITUTIONAL/M2.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "Institutional-4",
    title: "School and College",
    category: "Institutional",
    images: [
      "./INSTITUTIONAL/R7.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "Institutional-5",
    title: "Radhe Shyam Tiwari CBSE School",
    category: "Institutional",
    images: [
      "./INSTITUTIONAL/W.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },


  {
    id: "1-interior",
    title: "Office",
    category: "Interior Design",
    images: [
      "./INTERIOR/1.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "2-interior",
    title: "Bar",
    category: "Interior Design",
    images: [
      "./INTERIOR/A.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "3-interior",
    title: "Bedroom",
    category: "Interior Design",
    images: [
      "./INTERIOR/B.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "4-interior",
    title: "Saloon",
    category: "Interior Design",
    images: [
      "./INTERIOR/barber-1.jpg",
      "./INTERIOR/barber-2.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "5-interior",
    title: "Office",
    category: "Interior Design",
    images: [
      "./INTERIOR/C.jpg",
      "./INTERIOR/C1.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "6-interior",
    title: "Hall",
    category: "Interior Design",
    images: [
      "./INTERIOR/D.jpg",
      "./INTERIOR/D1.jpg",
      "./INTERIOR/D2.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "7-interior",
    title: "Hall",
    category: "Interior Design",
    images: [
      "./INTERIOR/di.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "8-interior",
    title: "Office",
    category: "Interior Design",
    images: [
      "./INTERIOR/E.jpg",
      "./INTERIOR/E1.jpg",
      "./INTERIOR/E2.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "9-interior",
    title: "Store",
    category: "Interior Design",
    images: [
      "./INTERIOR/I.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "10-interior",
    title: "Hall",
    category: "Interior Design",
    images: [
      "./INTERIOR/K.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "11-interior",
    title: "Bedroom",
    category: "Interior Design",
    images: [
      "./INTERIOR/L.jpg",
      "./INTERIOR/L1.jpg",
      "./INTERIOR/L2.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "12-interior",
    title: "Full Interior",
    category: "Interior Design",
    images: [
      "./INTERIOR/M.jpg",
      "./INTERIOR/M1.jpg",
      "./INTERIOR/M2.jpg",
      "./INTERIOR/M3.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "13-interior",
    title: "Hall",
    category: "Interior Design",
    images: [
      "./INTERIOR/O.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "14-interior",
    title: "Bedroom",
    category: "Interior Design",
    images: [
      "./INTERIOR/P.jpg",
      "./INTERIOR/P1.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "15-interior",
    title: "Office",
    category: "Interior Design",
    images: [
      "./INTERIOR/solar.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "16-interior",
    title: "Bedroom",
    category: "Interior Design",
    images: [
      "./INTERIOR/V2.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "17-interior",
    title: "Restaurant",
    category: "Interior Design",
    images: [
      "./INTERIOR/X.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "18-interior",
    title: "Full Interior",
    category: "Interior Design",
    images: [
      "./INTERIOR/Y.jpg",
      "./INTERIOR/Y1.jpg",
      "./INTERIOR/Y2.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "19-interior",
    title: "Kitchen",
    category: "Interior Design",
    images: [
      "./INTERIOR/Z.jpg",
      "./INTERIOR/Z1.jpg",
    ],
    description: "",
    location: "",
    year: ""
  },

  {
    id: "1-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/1.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "2-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/2.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "3-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/3.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "4-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/4.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "5-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/5.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "6-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/6.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  
  {
    id: "8-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/8.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "9-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/9.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "10-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/10.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "11-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/11.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "12-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/12.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "13-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/13.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "14-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/14.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "15-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/15.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "16-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/16.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "17-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/K.jpg",
     "./RESIDENTIAL/K1.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "18-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/O.jpg",
     "./RESIDENTIAL/O1.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
  {
    id: "19-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/P.jpg",
     "./RESIDENTIAL/P1.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },
{
    id: "20-residential",
    title: "House",
    category: "Residential",
    images: [
     "./RESIDENTIAL/X.jpg",
     "./RESIDENTIAL/X1.jpg"
    ],
    description: "",
    location: "",
    year: ""
  },

  {
    id: "temple-1",
    title: "Temple",
    category: "Religious",
    images: [
      "./religious/1.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "temple-2",
    title: "Temple",
    category: "Religious",
    images: [
      "./religious/2.png",
      ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "temple-3",
    title: "Mosque",
    category: "Religious",
    images: [
      "./religious/3.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "temple-4",
    title: "Temple",
    category: "Religious",
    images: [
      "./religious/4.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "temple-5",
    title: "Mosque",
    category: "Religious",
    images: [
      "./religious/5.jpg",
      ],
    description: "",
    location: "",
    year: ""
  },
   {
    id: "temple-6",
    title: "Temple",
    category: "Religious",
    images: [
      "./religious/6.jpg",
      ],
    description: "",
    location: "",
    year: ""
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

type CategoryType = "Residential" | "Commercial" | "Institutional" | "Interior Design" | "Religious";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryType>("Residential");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const tabs: CategoryType[] = ["Residential", "Commercial", "Institutional", "Interior Design" , "Religious"];

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
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-warm-grey border border-transparent group-hover:border-gold transition-all duration-300 flex items-center justify-center`}>
                  
                  {/* Blurred background */}
                  <img
                    src={project.images[0]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-50 z-0 pointer-events-none"
                  />

                  {/* SWAP IMAGE: Each project showcase thumbnail image */}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Absolute subtle category label */}
                  <div className="absolute top-4 left-4 bg-pure-black text-white px-3 py-1 text-[10px] font-sans tracking-widest uppercase font-bold z-10">
                    {project.category}
                  </div>

                  {/* Premium Slide-Up Title Overlay */}
                  <div className="absolute inset-0 bg-pure-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 z-20">
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
                {/* Blurred background */}
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-105 pointer-events-none"
                />
                {/* Sharp foreground image */}
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} - Space Frame ${activeImageIndex + 1}`}
                  className="relative z-10 w-full h-full object-contain"
                />
                
                {/* Visual Image Pagination trackers */}
                <div className="absolute bottom-4 left-4 bg-pure-black/80 px-3 py-1 font-sans text-[11px] text-[#C4C4C2] rounded-none tracking-widest z-20">
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
