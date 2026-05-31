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
  {
    id: "ach-1",
    year: "2024",
    title: "Best Luxury Architect Award",
    description: "Honored with the Prayagraj Architecture Excellence Trophy for outstanding contribution in premium residential exterior structures."
  },
  {
    id: "ach-2",
    year: "2023",
    title: "300+ Successful Deliveries",
    description: "Successfully handed over keys to over 300 premium commercial projects, corporate hubs, and bespoke homes across India on schedule."
  },
  {
    id: "ach-3",
    year: "2022",
    title: "Eco-Responsive Pioneer",
    description: "Recognized as a regional champion for integration of solar active layouts and passive stone-cooling facades in institutional structures."
  },
  {
    id: "ach-4",
    year: "2020",
    title: "Vastu Integration Landmark",
    description: "Successfully finalized complete Vastu consulting designs for a 50-acre wellness spiritual retreat without demanding structural demolition."
  },
  {
    id: "ach-5",
    year: "2018",
    title: "Best Commercial Plaza Design",
    description: "Awarded premium distinction for Katra commercial arcade project, highlighting high light pathing and organic floor circulation."
  },
  {
    id: "ach-6",
    year: "2015",
    title: "Over a Decade of Excellence",
    description: "Milestone commemorating 10 continuous years of shaping the Civil Lines cityscape and architectural planning of UP."
  }
];

const IMAGES = {
  gallery1: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600",
  gallery2: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800&h=600",
  gallery3: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800&h=600",
  gallery4: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800&h=600",
  gallery5: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800&h=600",
  gallery6: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800&h=600",
};

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  // Gallery array
  const galleryPhotos = [
    { src: IMAGES.gallery1, caption: "Inauguration ceremony of Civil Lines landmark plaza" },
    { src: IMAGES.gallery2, caption: "Consultation and design session with Ar. Santosh Swapnakar" },
    { src: IMAGES.gallery3, caption: "Vastu calibration onsite for luxury Prayagraj villa" },
    { src: IMAGES.gallery4, caption: "Reviewing timber wood select panels for modular interior design" },
    { src: IMAGES.gallery5, caption: "Structural slab casting inspection under Project Management" },
    { src: IMAGES.gallery6, caption: "Handing over finalized turnkey penthouse in George Town" },
  ];

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIdx = galleryPhotos.findIndex((p) => p.src === selectedImage);
    const nextIdx = currentIdx === galleryPhotos.length - 1 ? 0 : currentIdx + 1;
    setSelectedImage(galleryPhotos[nextIdx].src);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIdx = galleryPhotos.findIndex((p) => p.src === selectedImage);
    const prevIdx = currentIdx === 0 ? galleryPhotos.length - 1 : currentIdx - 1;
    setSelectedImage(galleryPhotos[prevIdx].src);
  };

  // Keyboard accessibility
  useState(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        const currentIdx = galleryPhotos.findIndex((p) => p.src === selectedImage);
        setSelectedImage(galleryPhotos[currentIdx === galleryPhotos.length - 1 ? 0 : currentIdx + 1].src);
      }
      if (e.key === "ArrowLeft") {
        const currentIdx = galleryPhotos.findIndex((p) => p.src === selectedImage);
        setSelectedImage(galleryPhotos[currentIdx === 0 ? galleryPhotos.length - 1 : currentIdx - 1].src);
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
                onClick={() => setSelectedImage(photo.src)}
              >
                {/* SWAP IMAGE: Each gallery photo */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
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
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0ACC] backdrop-blur-md flex flex-col justify-between p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full text-white">
              <span className="font-serif text-lg font-bold">MOMENTS &amp; MILESTONES GALLERY</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-3 bg-white/10 hover:bg-gold text-white hover:text-black rounded-none transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Selector Slider body */}
            <div className="my-auto relative max-w-4xl mx-auto w-full flex items-center justify-center p-4">
              
              <button
                onClick={handlePrevPhoto}
                className="absolute left-0 md:-left-12 z-10 p-3 bg-white/10 hover:bg-gold hover:text-black text-white rounded-none transition-all"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="bg-pure-black max-h-[65vh] aspect-video w-full overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Enlarged Milestone Moment"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <button
                onClick={handleNextPhoto}
                className="absolute right-0 md:-right-12 z-10 p-3 bg-white/10 hover:bg-gold hover:text-black text-white rounded-none transition-all"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Footer Captions */}
            <div className="max-w-2xl mx-auto w-full text-white text-center">
              <p className="text-sm font-sans text-mid-grey">
                {galleryPhotos.find((p) => p.src === selectedImage)?.caption || "Milestone moment document"}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
