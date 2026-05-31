/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TeamMember } from "../types";

// EDIT CONTENT: all images and text for this component are here
const TEAM_DATA: TeamMember[] = [
  {
    id: "team-1",
    name: "Ar. Santosh Swapnakar",
    designation: "PRINCIPAL ARCHITECT & FOUNDER",
    description: "Over 15 years of rich architectural design expertise cataloging major premium commercial structures and private luxury townships across Uttar Pradesh.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: "team-2",
    name: "Ar. Shruti Mishra",
    designation: "SENIOR ARCHITECTURAL DESIGNER",
    description: "Specializing in high-performance urban master planning layouts. Spearheading innovative facade geometries and passive climate building models.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: "team-3",
    name: "Aditya Srivastava",
    designation: "DIRECTOR OF INTERIOR EXPERTIZE",
    description: "Devoted to luxury spatial experiences, custom textile curations, and material research that infuses comfort into high modernist aesthetics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: "team-4",
    name: "Pt. Ramesh Chand Shastri",
    designation: "SENIOR VASTU CONSULTANT",
    description: "A highly respected scholar advising on directional energy rules, magnetic axis calibration, and traditional spatial alignment formulas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: "team-5",
    name: "Er. Vivek Kushwaha",
    designation: "HEAD OF CONSTRUCTION & PROJECT MGMT",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./media/download.png"
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading Header */}
        <div className="max-w-3xl text-center mx-auto mb-16 md:mb-24">
          <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block mb-3">
            THE INTELLECT &amp; CRAFT
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] font-semibold leading-tight mb-4">
            The People Behind The Spaces
          </h1>
          {/* EDIT TEXT: team subtitle */}
          <p className="text-base md:text-lg text-mid-grey font-sans">
            Meet the team of architects, planners, designers, and consultants that turns your vision into reality.
          </p>
        </div>

        {/* Team layout grid. 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 xl:gap-x-16"
        >
          {TEAM_DATA.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Avatar 160px diameter (w-40 h-40 is exactly 160px) */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 bg-warm-grey border border-transparent group-hover:border-gold transition-all duration-300">
                {/* SWAP IMAGE: team member photo */}
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.designation}`}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* EDIT TEXT: Member name & roles */}
              <h3 className="font-serif text-2xl text-[#1C1C1C] font-bold mb-1 group-hover:text-gold transition-colors duration-300">
                {member.name}
              </h3>
              
              <span className="text-[11px] font-sans text-gold uppercase tracking-[0.2em] font-extrabold mb-3 select-none">
                {member.designation}
              </span>

              <p className="text-sm font-sans text-mid-grey max-w-xs leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
