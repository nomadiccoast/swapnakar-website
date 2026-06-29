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
    name: "Ar. Vishal Chandra Khare",
    designation: "PRINCIPAL ARCHITECT & FOUNDER",
    description: ".",
    image: "./PHOTOS/vishal.jpg",
    imageOffset: { x: "0px", y: "0px", scale: 1.05, position: "top" }
  },
  {
    id: "team-2",
    name: "Jaya Khare",
    designation: "DIRECTOR",
    description: "Specializing in high-performance urban master planning layouts. Spearheading innovative facade geometries and passive climate building models.",
    image: "./PHOTOS/jaya.jpg",
    imageOffset: { x: "0px", y: "0px", scale: 1.05, position: "top" }
  },
  {
    id: "team-3",
    name: "Nidhi Kesarwani",
    designation: "Interior Designer",
    description: "Devoted to luxury spatial experiences, custom textile curations, and material research that infuses comfort into high modernist aesthetics.",
    image: "./PHOTOS/nidhi.jpeg",
    imageOffset: { x: "8px", y: "0px", scale: 1.05 }
  },
  {
    id: "team-5",
    name: "Arshad Khan",
    designation: "Civil Engineer & Drafter",
    description: "A highly respected scholar advising on directional energy rules, magnetic axis calibration, and traditional spatial alignment formulas.",
    image: "./PHOTOS/arshad.jpg",
    imageOffset: { x: "0px", y: "15px", scale: 1.2, position: "top" }
  },
  {
    id: "team-4",
    name: "ER. Sanjeev Mishra",
    designation: "Civil Engineer",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/sanjeev.jpeg",
    imageOffset: { x: "0px", y: "0px", scale: 1.05, position: "top" }
  },
  {
    id: "team-6",
    name: "Ajay Maurya",
    designation: "Site Engineer",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/ajay.jpeg",
    imageOffset: { x: "0px", y: "0px", scale: 1.1, position: "top" }
  },
  {
    id: "team-7",
    name: "Shri Kant Kushwaha",
    designation: "3D Visualizer",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/shri2.jpeg",
    imageOffset: { x: "0px", y: "15px", scale: 1.25, position: "top" }
  },
  
  {
    id: "team-9",
    name: "Mohammad Umar",
    designation: "Estimator & Development Authority Work",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/umar.jpeg",
    imageOffset: { x: "0px", y: "15px", scale: 1.2, position: "top" }
  },
  {
    id: "team-10",
    name: "Chandra Deep Prajapati",
    designation: "Structural Engineer",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/chandra.jpeg",
    imageOffset: { x: "15px", y: "-15px", scale: 1.2, position: "top" }
  },
  {
    id: "team-11",
    name: "Saif Ullah",
    designation: "Interior Designer",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/saif.jpeg",
    imageOffset: { x: "0px", y: "-10px", scale: 1.2, position: "top" }
  },
  {
    id: "team-12",
    name: "Arvind Sharma",
    designation: "Interior Decorator",
    description: "Executing complex projects flawlessly on site. Ensuring seamless schedule workflows, cost management, and structural safety guidelines.",
    image: "./PHOTOS/arvind.jpg",
    imageOffset: { x: "0px", y: "-10px", scale: 1.05 }
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
  const getRow = (ids: string[]) => ids.map(id => TEAM_DATA.find(m => m.id === id)).filter((m): m is TeamMember => !!m);

  const row1 = getRow(["team-1", "team-2"]);
  const row2 = getRow(["team-4", "team-10", "team-11"]);
  const row3 = getRow(["team-7", "team-5", "team-3"]);
  const row4 = getRow(["team-6", "team-9", "team-12"]);

  const renderMemberCard = (member: TeamMember) => (
    <motion.div
      key={member.id}
      variants={itemVariants}
      className="flex flex-col items-center text-center group w-64"
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
          style={{
            transform: `translate(${member.imageOffset?.x || "0px"}, ${member.imageOffset?.y || "0px"}) scale(${member.imageOffset?.scale || 1})`,
            objectPosition: member.imageOffset?.position || "center"
          }}
        />
      </div>

      {/* EDIT TEXT: Member name & roles */}
      <h3 className="font-serif text-2xl text-[#1C1C1C] font-bold mb-1 group-hover:text-gold transition-colors duration-300">
        {member.name}
      </h3>
      
      <span className="text-[11px] font-sans text-gold uppercase tracking-[0.2em] font-extrabold mb-3 select-none">
        {member.designation}
      </span>
    </motion.div>
  );

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

        {/* Grouped Team Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-20 md:space-y-24"
        >
          {/* Row 1: Leadership (Vishal and Jaya centered at top) */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {row1.map((member) => renderMemberCard(member))}
          </div>

          {/* Row 2: Design Leads (3 members below them) */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {row2.map((member) => renderMemberCard(member))}
          </div>

          {/* Row 3: Civil & Site Engineers */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {row3.map((member) => renderMemberCard(member))}
          </div>

          {/* Row 4: Engineering & Technical Support */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {row4.map((member) => renderMemberCard(member))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
