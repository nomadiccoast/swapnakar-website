/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactUs = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Attempt scroll to footer
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      // If footer is not found yet, wait and try
      setTimeout(() => {
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const menuItems = [
    { title: "Our Projects", path: "./projects.html", type: "route" },
    { title: "Our Services", path: "./services.html", type: "route" },
    { title: "Our Team", path: "./team.html", type: "route" },
    { title: "About Us", path: "./about.html", type: "route" },
    { title: "Achievements", path: "./achievements.html", type: "route" },
    { title: "Contact Us", path: "#footer", type: "anchor", action: handleContactUs },
  ];

  // Prevent scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#F4F4F2] px-4 py-3 md:px-12 md:py-6 flex items-center justify-between">
        {/* Left Side: Brand Logo and Wordmark */}
        <a href="./index.html" className="flex items-center gap-3 md:gap-4 group">
          <img 
            src="media/download.png" 
            alt="Swapnakar Logo" 
            className="shrink-0 w-14 h-14 md:w-20 md:h-20 object-cover"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-3xl font-bold tracking-wider text-[#1C1C1C] transition-colors duration-300 group-hover:text-gold">
              SWAPNAKAR
            </span>
            <span className="text-[7px] md:text-[10px] font-sans tracking-[0.25em] text-mid-grey -mt-1 font-bold">
              ARCHITECTS &amp; DESIGNERS
            </span>
          </div>
        </a>

        {/* Right Side: Simple Hamburger Menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Open Menu"
        >
          <span className="hidden md:inline text-[11px] font-sans text-mid-grey tracking-[0.2em] uppercase font-semibold group-hover:text-gold transition-colors duration-300">
            Menu
          </span>
          <div className="p-2 border border-transparent group-hover:border-gold transition-all duration-300">
            <Menu className="w-6 h-6 md:w-8 md:h-8 text-[#1C1C1C] group-hover:text-gold transition-colors duration-300" />
          </div>
        </button>
      </header>

      {/* Navigation Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col justify-between p-6 md:p-16"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img 
                  src="./media/download.png" 
                  alt="Swapnakar Logo" 
                  className="shrink-0 w-16 h-16 md:w-20 md:h-20 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
                    SWAPNAKAR
                  </span>
                  <span className="text-[9px] font-sans tracking-[0.25em] text-[#9A9A9A] -mt-1 font-bold">
                    ARCHITECTS &amp; DESIGNERS
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 group focus:outline-none"
                aria-label="Close Menu"
              >
                <span className="hidden md:inline text-[11px] font-sans text-mid-grey tracking-[0.2em] uppercase font-semibold group-hover:text-gold transition-colors duration-300">
                  Close
                </span>
                <div className="p-2 border border-transparent group-hover:border-gold transition-all duration-300">
                  <X className="w-6 h-6 text-white group-hover:text-gold transition-colors duration-300" />
                </div>
              </button>
            </div>

            {/* Large Cormorant Garamond Nav Links */}
            <div className="flex flex-col justify-center items-start space-y-4 md:space-y-6 my-auto">
              {menuItems.map((item, index) => {
                const linkContent = (
                  <span className="relative inline-block font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium hover:text-gold transition-colors duration-300 py-2 group">
                    {item.title}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
                  </span>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    {item.type === "route" ? (
                      <a href={item.path} onClick={() => setIsOpen(false)}>
                        {linkContent}
                      </a>
                    ) : (
                      <a href={item.path} onClick={item.action}>
                        {linkContent}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Footer Details inside Overlay */}
            <div className="border-t border-[#1C1C1C] pt-6 flex flex-col md:flex-row justify-between text-xs text-mid-grey font-sans gap-4">
              <div>
                <p className="uppercase text-[10px] tracking-wider mb-1 text-gold font-bold">Prayagraj Head Office</p>
                <p>L-3/3, Tashkent Marg, Civil Lines, Prayagraj, UP</p>
              </div>
              <div className="md:text-right">
                <p className="uppercase text-[10px] tracking-wider mb-1 text-gold font-bold">General Inquiries</p>
                <p>Phone: 098390 30176</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
