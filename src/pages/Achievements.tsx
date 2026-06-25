/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play, Volume2 } from "lucide-react";
import { Counter } from "../components/Counter";
import { Achievement } from "../types";

// EDIT CONTENT: all images and text for this component are here
const ACHIEVEMENTS_DATA: Achievement[] = [
  
 
];

// Animations
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};

export default function Achievements() {
  // Gallery array
  const galleryPhotos: { src: string | string[]; caption: string }[] = [
    {
      src: [
        "./ach/M.jpg",
        "./ach/M1.jpg",
        "./ach/M2.jpg",
        "./ach/M3.mp4" // The video file (extension must be .mp4, .webm, or .mov)
      ], 
      caption: "India's Most Prominent Architect and Design Award by MAMR" 
    },
   {
      src: [
        "./ach/G.jpg",
             ], 
      caption: "Award" 
    },
    {
      src: [
        "./ach/K.jpg",
             ], 
      caption: "Award" 
    },
    {
      src: [
        "./ach/L.jpg",
             ], 
      caption: "Award" 
    },
    
    
   
  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const isVideo = (src: string) => {
    if (!src || typeof src !== "string") return false;
    const path = src.split("?")[0].toLowerCase();
    return path.endsWith(".mp4") || path.endsWith(".webm") || path.endsWith(".mov") || path.endsWith(".m4v");
  };

  const getThumbnailSrc = (photo: { src: string | string[]; caption: string }) => {
    const list = Array.isArray(photo.src) ? photo.src : [photo.src];
    const firstImage = list.find((item) => !isVideo(item));
    return firstImage || list[0];
  };

  const currentPhoto = selectedPhotoIndex !== null ? galleryPhotos[selectedPhotoIndex] : null;
  const mediaList = currentPhoto
    ? (Array.isArray(currentPhoto.src) ? currentPhoto.src : [currentPhoto.src])
    : [];
  const currentMediaSrc = currentPhoto ? mediaList[activeMediaIndex] : "";

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setActiveMediaIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setActiveMediaIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  // Keyboard accessibility
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowRight") {
        setActiveMediaIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
      }
      if (e.key === "ArrowLeft") {
        setActiveMediaIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, mediaList.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen"
    >
      {/* SECTION 1: Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-[#F4F4F2]">
        <div className="max-w-3xl">
          <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block mb-3">
            RECOGNITION &amp; MILESTONES
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] font-semibold leading-none mb-4">
            Recognition &amp; Milestones
          </h1>
          <p className="text-base md:text-lg text-mid-grey font-sans">
            A journey measured in spaces built and lives changed
          </p>
        </div>
      </section>

      {/* SECTION 2: Large Stats Counter block */}
      <section className="bg-warm-grey py-16 md:py-20 px-6 md:px-12 border-b border-[#E4E4E2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Years of Excellence", value: "15+" },
            { label: "Projects Delivered", value: "300+" },
            { label: "Google Rating", value: "4.7★" },
            { label: "Happy Clients", value: "500+" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-2 pl-6 py-2 border-l-2 border-gold font-sans">
              <span className="text-[10px] font-sans tracking-widest text-[#9A9A9A] uppercase font-bold">
                METRIC RECORD
              </span>
              <div className="font-serif text-6xl md:text-7xl text-gold font-bold leading-none">
                <Counter value={stat.value} duration={1500} />
              </div>
              <span className="text-xs text-[#1C1C1C] tracking-wide uppercase font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Six Achievement cards grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {ACHIEVEMENTS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="flex flex-col space-y-3 border-l-2 border-gold pl-6 py-4 group hover:border-[#1C1C1C] transition-colors duration-300"
            >
              {/* Year Tag */}
              <span className="text-xs font-sans text-gold font-bold tracking-[0.2em] select-none block">
                YEAR {item.year}
              </span>

              {/* Title in Cormorant Garamond */}
              <h3 className="font-serif text-2xl text-[#1C1C1C] font-semibold md:leading-none group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description in DM Sans grey */}
              <p className="text-sm font-sans text-mid-grey leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: Moments & Milestones Masonry photo grid */}
      <section className="bg-warm-grey py-20 md:py-28 px-6 md:px-12 border-y border-[#E4E4E2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="space-y-3 mb-12 md:mb-16">
            <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block">
              MOMENTS &amp; MILESTONES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-semibold">
              The Journey Gallery
            </h2>
          </div>

          {/* Masonry-like Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-white border border-transparent hover:border-gold transition-all duration-300"
                onClick={() => {
                  setSelectedPhotoIndex(idx);
                  setActiveMediaIndex(0);
                }}
              >
                {/* Blurred background glow */}
                <img
                  src={getThumbnailSrc(photo)}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-50 select-none pointer-events-none"
                />
                {/* Sharp foreground image */}
                <img
                  src={getThumbnailSrc(photo)}
                  alt={photo.caption}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                />

                {/* Cover overlay on hover */}
                <div className="absolute inset-0 bg-pure-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold text-[10px] font-sans tracking-widest uppercase font-bold mb-1">
                    Enlarge Image
                  </span>
                  <p className="text-white font-serif text-base leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0ACC] backdrop-blur-md flex flex-col justify-between p-6 md:p-12"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full text-white">
              <span className="font-serif text-lg font-bold">MOMENTS &amp; MILESTONES GALLERY</span>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-3 bg-white/10 hover:bg-gold text-white hover:text-black rounded-none transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Selector Slider body */}
            <div className="my-auto relative max-w-4xl mx-auto w-full flex items-center justify-center p-4">
              
              {mediaList.length > 1 && (
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-0 md:-left-12 z-10 p-3 bg-white/10 hover:bg-gold hover:text-black text-white rounded-none transition-all"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <div className="bg-pure-black max-h-[65vh] aspect-video w-full overflow-hidden flex items-center justify-center relative">
                {isVideo(currentMediaSrc) ? (
                  <video
                    src={currentMediaSrc}
                    controls
                    playsInline
                    className="relative z-10 max-w-full max-h-full object-contain"
                  />
                ) : (
                  <>
                    {/* Blurred background glow */}
                    <img
                      src={currentMediaSrc}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 select-none pointer-events-none"
                    />
                    {/* Sharp foreground image */}
                    <img
                      src={currentMediaSrc}
                      alt={currentPhoto.caption}
                      className="relative z-10 max-w-full max-h-full object-contain"
                    />
                  </>
                )}
                {mediaList.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-pure-black/80 px-3 py-1 font-sans text-[11px] text-[#C4C4C2] rounded-none tracking-widest z-10">
                    {activeMediaIndex + 1} / {mediaList.length}
                  </div>
                )}
              </div>

              {mediaList.length > 1 && (
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-0 md:-right-12 z-10 p-3 bg-white/10 hover:bg-gold hover:text-black text-white rounded-none transition-all"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

            </div>

            {/* Footer Captions */}
            <div className="max-w-2xl mx-auto w-full text-white text-center">
              <p className="text-sm font-sans text-mid-grey">
                {currentPhoto.caption}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
