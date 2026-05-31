/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, Sofa, ClipboardCheck, Leaf, Sun, Ruler } from "lucide-react";
import { Service } from "../types";

// EDIT CONTENT: all images and text for this component are here
const SERVICES_DATA: Service[] = [
  {
    id: "planning",
    title: "Planning",
    description: "A perfect planning is the foundation stone of future convenience, comfort and best management of space and people. An integration of aesthetic work with regulatory framework, results in best laid township and complexes. Blend of architect with the green technology is one of key element in all the projects of Swapnakar. Be it the world class facilities, hi-tech infrastructure, serene landscaping or an incredible layout, Swapnakar offers the best of services in the planning segment especially urban planning.",
    details: [],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Since ancient time till todays global age, the architect of numerous building and monuments have seen implausible changes. These were possible because of individuals creativity and innovation mixed with learning of past, ultimately shaping in best of architectural examples worldwide. Swapnakar has this soul of architect and being delivering results since its inception. Swapnakar believes that the balance between the five elements of creation i.e. Agni, Prithvi, Varun, Vayu and Vyom (APV3 ) need to be maintained in all the assignments and project it develops. Element of Vaastu is always a prime focal point of any project of Swapnakar. We have already erected residences, apartments, institutions, hospitals, towns, and complexes etc well in time with excellence.",
    details: [],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "In this competitive era where everyone is looking for a single window option, Swapnakar provides all the Project Management Solutions (we call it PMS) under one roof. A clients need to develop a project is catered professionally and solutions are provided suiting to the resources available with him. Swapnakar from time to time develop the capacities of the client to implement the project at par with class in world.",
    details: [
      "Our all the staff and management is well trained on management systems and their work is continuously reviewed to improve the outputs.",
      "Swapnakar believes in absolute professionalism. We don't work with contractors or the labourers, rather we always work with our skilled and professional partners, be it engineers, electricians, plumbers or masons.",
      "Right from our implementing partners to the clients, Swapanakar maintains a transparency in flow of information and procedures."
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "interior-designing",
    title: "Interior Designing",
    description: "A house is never a home without appealing interiors. With Swapnakar one gets the feel of \"AWESOME\". The drop and the backdrop, shade and shadow, tinge and suffuse, imbued and pervade are the characters, which Swapnakar could define, demarcate and reflect clearly & visibly in the interiors. Of course in the positioning of objects within, is guided with the principles of Vaastu.",
    details: [
      "Through our interior designing, happiness from the roots of the heart is ensured output."
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "vastu-consultant",
    title: "Vaastu Consultants",
    description: "Peace of mind, happiness of heart and prosperity is sought by everyone. The environment today where there is a rush of time, the Vaastu elements bring some miraculous effects to ones living. Swapnakar specialty in Vaastu makes its project unique in its class.",
    details: [],
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=1000&h=700"
  },
  {
    id: "landscape-designing",
    title: "Landscape Design",
    description: "Open space doesn't mesmerise anyone if its landscaping is not done in appropriate way. Any best architect in the world has wonderful landscaping associated with the main erection. Garden, terrain, contour, pools, water bodies and a lot more could bring prodigious impact to the project. The perfect landscaping is service Swapnakar offers. From designing till developing we offer turnkey solutions for landscaping.",
    details: [],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000&h=700"
  }
];

// Match services with premium geometric vector icons
const iconsMap = {
  "planning": Compass,
  "architecture": Ruler,
  "project-management": ClipboardCheck,
  "interior-designing": Sofa,
  "vastu-consultant": Sun,
  "landscape-designing": Leaf,
};

const textFadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" as const } 
  }
};

const textFadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" as const } 
  }
};

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen"
    >
      {/* Services Header section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-[#F4F4F2]">
        <div className="max-w-3xl">
          <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block mb-3">
            WHAT WE CREATE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] font-semibold leading-none mb-4">
            Our Expertise
          </h1>
          {/* Slogan below heading */}
          <p className="font-serif italic text-lg md:text-xl text-mid-grey">
            "Share your dreams, Swapnakar will realise them on mother earth."
          </p>
        </div>
      </section>

      {/* Six alternating services sections */}
      <div className="w-full">
        {SERVICES_DATA.map((service, idx) => {
          // Odd sections: text on left, image on right
          // Even sections: image on left, text on right
          const isOdd = idx % 2 === 0;
          const bgClass = isOdd ? "bg-white" : "bg-[#F4F4F2]";
          const IconComponent = iconsMap[service.id as keyof typeof iconsMap] || Compass;

          return (
            <section
              key={service.id}
              className={`${bgClass} py-20 md:py-28 px-6 md:px-12 border-b border-[#E4E4E2]/40`}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Text Sider block */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={isOdd ? textFadeLeft : textFadeRight}
                  className={`lg:col-span-6 flex flex-col space-y-6 ${
                    isOdd ? "lg:order-1" : "lg:order-2"
                  } border-l-[3.5px] border-gold pl-6 md:pl-8`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white border border-[#E4E4E2] text-gold select-none shadow-none">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block">
                      SERVICES BLOCK {idx + 1}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] font-medium leading-none">
                    {service.title}
                  </h2>

                  <p className="font-sans text-base text-mid-grey leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specific task lists checklist */}
                  {service.details.length > 0 && (
                  <ul className="space-y-3 font-sans text-xs md:text-sm text-[#1C1C1C] pt-2">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-baseline gap-3">
                        <span className="w-2 h-2 bg-gold shrink-0 border border-gold" />
                        <span className="text-[#3C3C3A]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  )}
                </motion.div>

                {/* Photo Sider block */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={isOdd ? textFadeRight : textFadeLeft}
                  className={`lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden ${
                    isOdd ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* SWAP IMAGE: service image */}
                  <img
                    src={service.image}
                    alt={`${service.title} architectural visualization`}
                    width={1000}
                    height={700}
                    loading="lazy"
                    className="w-full h-full object-cover shadow-none transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 border border-gold/15 pointers-none" />
                </motion.div>

              </div>
            </section>
          );
        })}
      </div>

    </motion.div>
  );
}
