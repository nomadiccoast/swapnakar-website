/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Youtube, Facebook, Linkedin, ArrowUp } from "lucide-react";

// EDIT CONTENT: all images and text for this component are here
const CONTACT_INFO = {
  address: "L-3/3, Tashkent Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001",
  phone: "098390 30176",
  email: "alldswapnakar@gmail.com",
  socials: {
    facebook: "https://facebook.com/swapnakar",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/swapnakar",
    linkedin: "https://linkedin.com/company/swapnakar",
  }
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-dark-charcoal text-white pt-16 pb-8 px-6 md:px-12 border-t border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Left Column: Brand & Tagline */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="./media/download.png"
              alt="Swapnakar Logo"
              className="shrink-0 w-14 h-14 md:w-16 md:h-16 object-contain select-none"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white">
                SWAPNAKAR
              </span>
              <span className="text-[8px] md:text-[9px] font-sans tracking-[0.25em] text-[#9A9A9A] -mt-1 font-bold">
                ARCHITECTS &amp; DESIGNERS
              </span>
            </div>
          </div>
          <p className="font-serif text-[#C4C4C2] italic text-sm md:text-base pr-4">
            "SWAPNAKAR — Building Dreams Since 2000"
          </p>
          <p className="text-xs text-[#9A9A9A] font-sans leading-relaxed pt-2">
            A confluence of Dream, Architect and Innovation — shaping homes, institutions, complexes and townships across Prayagraj and beyond.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="flex flex-col space-y-4">
          <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#9A9A9A] font-bold">
            Navigate
          </span>
          <nav className="flex flex-col space-y-2 text-sm font-sans">
            <a href="./projects.html" className="text-[#E4E4E2] hover:text-gold transition-colors duration-300">
              Our Projects
            </a>
            <a href="./services.html" className="text-[#E4E4E2] hover:text-gold transition-colors duration-300">
              Our Services
            </a>
            <a href="./team.html" className="text-[#E4E4E2] hover:text-gold transition-colors duration-300">
              Our Team
            </a>
            <a href="./about.html" className="text-[#E4E4E2] hover:text-gold transition-colors duration-300">
              About Us
            </a>
            <a href="./achievements.html" className="text-[#E4E4E2] hover:text-gold transition-colors duration-300">
              Achievements
            </a>
          </nav>
        </div>

        {/* Right Column: Address and Contact details */}
        <div className="flex flex-col space-y-4">
          <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#9A9A9A] font-bold">
            Contact Office
          </span>
          <div className="text-sm font-sans space-y-3 leading-relaxed">
            {/* EDIT TEXT: replace with actual contact address */}
            <p className="text-[#E4E4E2]">
              {CONTACT_INFO.address}
            </p>
            {/* EDIT TEXT: replace with main client telephone */}
            <p className="text-[#E4E4E2]">
              Phone:{" "}
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-gold transition-colors duration-300">
                {CONTACT_INFO.phone}
              </a>
            </p>
            {/* EDIT TEXT: replace with actual email */}
            <p className="text-[#E4E4E2]">
              Email:{" "}
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors duration-300">
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <a
              href={CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4E4E2] hover:text-gold transition-colors duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4E4E2] hover:text-gold transition-colors duration-300"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4E4E2] hover:text-gold transition-colors duration-300"
              aria-label="Facebook Page"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4E4E2] hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar with Separator */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gold/40 flex flex-col md:flex-row justify-between items-center text-xs text-[#9A9A9A] font-sans gap-4">
        <div>
          <p>© 2025 Swapnakar. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <p>
            Designed by{" "}
            <a href="https://growsia.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300 font-medium">
              Growsia
            </a>
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 border border-[#2C2C2A] text-[#9A9A9A] hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
