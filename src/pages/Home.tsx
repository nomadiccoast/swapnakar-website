/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Counter } from "../components/Counter";
import { Project, Service } from "../types";

// EDIT CONTENT: all images and text for this component are here
const IMAGES = {
  heroMain: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=1600",
};

const SERVICES_DATA: Service[] = [
  {
    id: "planning",
    title: "Planning",
    description: "A perfect planning is the foundation stone of future convenience, comfort and best management of space and people. An integration of aesthetic work with regulatory framework, results in best laid township and complexes.",
    details: [],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Since ancient time till todays global age, the architect of numerous building and monuments have seen implausible changes. Swapnakar has this soul of architect and being delivering results since its inception.",
    details: [],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "In this competitive era where everyone is looking for a single window option, Swapnakar provides all the Project Management Solutions (we call it PMS) under one roof.",
    details: [],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "interior-designing",
    title: "Interior Designing",
    description: "A house is never a home without appealing interiors. With Swapnakar one gets the feel of <span style='color:#B8935A;font-weight:900;font-family:Georgia,serif;letter-spacing:2px;'>AWESOME</span>.",    details: [],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "vastu-consultant",
    title: "Vaastu Consultants",
    description: "Peace of mind, happiness of heart and prosperity is sought by everyone. Swapnakar specialty in Vaastu makes its project unique in its class.",
    details: [],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "landscape-designing",
    title: "Landscape Design",
    description: "Open space doesn't mesmerise anyone if its landscaping is not done in appropriate way. From designing till developing we offer turnkey solutions for landscaping.",
    details: [],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000&h=700"
  }
];

const PROJECTS_DATA: Project[] = [
  {
    id: "Hero-1",
    title: "Prayagraj Township",
    category: "Residential",
    images: [
      "./hero/1.jpg",
      ],
    description: "A luxury multi-generational residence in the heart of Civil Lines, featuring high soaring ceilings, custom carved jaali screens, and complete Vastu compliance.",
    location: "Civil Lines, Prayagraj",
    year: "2024"
  },
  {
    id: "Hero-2",
    title: "Residence",
    category: "Residential",
    images: [
      "./hero/2.jpg",
      ],
    description: "A luxury multi-generational residence in the heart of Civil Lines, featuring high soaring ceilings, custom carved jaali screens, and complete Vastu compliance.",
    location: "Chaak Ghaat, Rewa",
    year: "2024"
  },
  {
    id: "Hero-3",
    title: "Shringverpur Township",
    category: "Residential",
    images: [
      "./hero/3.jpg",
      ],
    description: "A luxury multi-generational residence in the heart of Civil Lines, featuring high soaring ceilings, custom carved jaali screens, and complete Vastu compliance.",
    location: "Shringverpur, Prayagraj",
    year: "2024"
  }
];

// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {

  // Split hero heading into words for custom text animations
  // EDIT TEXT: Hero heading words animation configuration
  const heroHeadingText = "Dream. Architect. Innovate.";
  const words = heroHeadingText.split(" ");

  // Use projects for the asymmetric grid
  const featuredProjects = PROJECTS_DATA;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full overflow-hidden bg-white"
    >
      {/* SECTION 1: HERO SECTION */}
      <section className="relative px-6 md:px-12 py-12 md:py-20 lg:py-28 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
        
        {/* Left Area: Typographical Headings */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          
          <div className="space-y-4">
            {/* Display section label */}
            <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block">
              ARCHITECTURE · INTERIOR · VASTU
            </span>

            {/* Large 3-line heading with animated staggered words */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-pure-black leading-[1.05] tracking-tight">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-3 md:mr-4"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* EDIT TEXT: core slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-mid-grey font-sans max-w-lg leading-relaxed"
          >
            Premium architectural, interior, Vaastu and planning solutions, inspired by the confluence of Sangam at Allahabad, established in 2000.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Button links to our projects with neat transitions */}
            <a
              href="./projects.html"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C1C1C] text-white hover:bg-gold transition-colors duration-300 font-sans font-semibold text-sm tracking-widest uppercase"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Tagline */}
            <span className="font-serif italic text-[#9A9A9A] text-lg select-none">
              SWAPNAKAR — Share Your Dreams
            </span>
          </motion.div>
        </div>

        {/* Right Area: Portrait main project image */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[550px] lg:h-[650px]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 border-l-[4px] border-gold z-10 pointers-none" />
            
            {/* SWAP VIDEO: hero main project video */}
            <video
              src="./hero_video.mp4"
              poster={IMAGES.heroMain}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover shadow-none select-none transition-transform duration-500 hover:scale-[1.01]"
            />
          </motion.div>
        </div>

      </section>

      {/* SECTION 2: SERVICES SECTION (CONCISE VERSION ON HOMEPAGE) */}
      <section id="services" className="bg-warm-grey py-16 md:py-24 px-6 md:px-12 border-y border-[#E4E4E2]">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block">
                OUR SERVICES
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-semibold">
                What We Create
              </h2>
            </div>
            
            <a
              href="./services.html"
              className="inline-flex items-center gap-2 group text-sm font-sans font-bold tracking-wider uppercase text-pure-black hover:text-gold transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* 6 Services Row. Mobile: horizontal scroll row, Desktop: 3-column grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex overflow-x-auto pb-4 md:pb-0 gap-6 md:gap-8 md:grid md:grid-cols-3 no-scrollbar scroll-smooth"
          >
            {SERVICES_DATA.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="shrink-0 w-[280px] md:w-auto bg-white p-6 md:p-8 flex flex-col justify-between border-b-[3px] border-transparent hover:border-gold transition-all duration-300 group"
              >
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-[#1C1C1C] font-medium mb-4 pb-2 border-b border-gold/40 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p
                    className="text-sm font-sans text-mid-grey leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
                
                <div className="pt-6">
                  <a
                    href="./services.html"
                    className="text-xs font-sans tracking-wide text-[#1C1C1C] group-hover:text-gold hover:underline transition-colors font-bold uppercase"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>



      {/* SECTION 5: FEATURED PROJECTS TEASER */}
      <section className="bg-warm-grey py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block">
                SELECTED WORKS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-semibold">
                Projects That Define Us
              </h2>
            </div>
            
            <a
              href="./projects.html"
              className="inline-flex items-center gap-2 group text-sm font-sans font-bold tracking-wider uppercase text-pure-black hover:text-gold transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Asymmetric editorial grid - 1 large card left, 2 smaller stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left large project block */}
            {featuredProjects[0] && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-7 flex flex-col group"
              >
                <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-white border border-transparent group-hover:border-gold transition-all duration-300 flex items-center justify-center">
                  {/* Blurred background */}
                  <img
                    src={featuredProjects[0].images[0]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-50 z-0 pointer-events-none"
                  />
                  {/* SWAP IMAGE: Featured large project photo */}
                  <img
                    src={featuredProjects[0].images[0]}
                    alt={featuredProjects[0].title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-pure-black text-white px-3 py-1 text-[10px] font-sans tracking-widest uppercase font-bold z-20">
                    {featuredProjects[0].category}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl text-[#1C1C1C] font-medium mt-4 group-hover:text-gold transition-colors duration-300">
                  {featuredProjects[0].title}
                </h3>
                <p className="text-xs text-mid-grey font-sans uppercase tracking-widest mt-1">
                  {featuredProjects[0].location}
                </p>
              </motion.div>
            )}

            {/* Right stacked projects block */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              {featuredProjects.slice(1, 3).map((project) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex flex-col group"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-white border border-transparent group-hover:border-gold transition-all duration-300 flex items-center justify-center">
                    {/* Blurred background */}
                    <img
                      src={project.images[0]}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-50 z-0 pointer-events-none"
                    />
                    {/* SWAP IMAGE: Featured project photo */}
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 bg-pure-black text-white px-3 py-1 text-[10px] font-sans tracking-widest uppercase font-bold z-20">
                      {project.category}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-[#1C1C1C] font-medium mt-4 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-mid-grey font-sans uppercase tracking-widest mt-1">
                    {project.location}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
}
