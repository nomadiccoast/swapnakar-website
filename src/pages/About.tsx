/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Youtube, Facebook, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const CONTACT_INFO = {
  address: "L-3/3, Tashkent Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001",
  phone: "098390 30176",
  email: "alldswapnakar@gmail.com",
  socials: {
    facebook: "https://facebook.com/swapnakar",
    instagram: "https://instagram.com/swapnakar",
    youtube: "https://youtube.com/swapnakar",
    linkedin: "https://linkedin.com/company/swapnakar",
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as any } 
  }
};

const brandStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen"
    >
      {/* EDIT CONTENT: brand logo, name, designation — update here */}
      <section className="bg-white py-20 md:py-28 px-6 border-b border-warm-grey">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={brandStagger}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <motion.img
            variants={fadeInUp}
            // SWAP IMAGE: replace with actual Swapnakar logo file
            src="media/download.png"
            alt="Swapnakar Logo"
            width={160}
            className="w-[120px] sm:w-[140px] md:w-[160px] h-auto object-contain"
          />

          <motion.h1
            variants={fadeInUp}
            className="mt-5 md:mt-6 w-full text-[#0A0A0A] uppercase leading-none text-[clamp(2rem,7.5vw,3.25rem)] tracking-[0.08em] md:tracking-[0.1em]"
            style={{ fontFamily: "'ITC Anna', serif" }}
          >
            SWAPNAKAR
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 md:mt-5 font-sans text-[11px] sm:text-xs md:text-sm text-mid-grey uppercase tracking-[0.18em] md:tracking-[0.2em] leading-relaxed max-w-md px-2"
          >
            ARCHITECTURAL &amp; INTERIOR DESIGN SOLUTION &nbsp;&middot;&nbsp; VASTU CONSULTANT
          </motion.p>

          <motion.hr
            variants={fadeInUp}
            className="w-20 border-t border-gold my-5 md:my-6"
          />

          <motion.p
            variants={fadeInUp}
            className="font-serif italic text-xl md:text-[22px] text-[#0A0A0A]"
          >
            Ar. Vishal Khare
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-2 font-sans text-[11px] md:text-xs text-mid-grey uppercase tracking-[0.15em]"
          >
            B.ARCH, M.TECH. (Civil)
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 1: Who We Are / Story */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mb-12"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block mb-3">
            OUR STORY
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] font-semibold leading-none">
            Who We Are
          </h1>
          <hr className="w-20 border-t-[2.5px] border-gold mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-6 text-mid-grey font-sans text-sm md:text-base leading-relaxed"
        >
            {/* EDIT TEXT: About us content from client brief */}
            <p className="text-[#1C1C1C] text-lg font-serif italic mb-4 leading-relaxed">
              "Share your dreams, Swapnakar will realise them on mother earth."
            </p>
            
            <p>
              Swapnakar is a confluence of "Dream", "Architect" and "Innovation", realising structures that cater as homes, institutions, complexes, townships, etc. The idea of this confluence has been derived from the great phenomenon of "Sangam" at Allahabad.
            </p>
            
            <p>
              Established in 2000, Swapnakar is committed to maintaining high values and quality. The non-negotiable attribute of Swapnakar is shaping the dreams of clients to the maximum possible extent. The principles of Architecture, Vaastu, Safety and Interior Designing have always been an integrated part of every assignment.</p>

            <p>
              After a long journey since 2000, we are now positioned among the leading architectural practitioners. Institutional, residential, educational, commercial, hospitality, leisure and healthcare projects are part of our overall portfolio.
            </p>

            <p>
              Swapnakar is a team of experienced professionals having an in-depth understanding of the subject and absolute command over their work, which ultimately leaves clients with "Zero" queries. </p>

 <p>
              We know how to manage space, bring comfort and create appealing designs within the limits of the resources available with clients. The equation between clients' needs and luxury is always balanced and satisfied in the architectural solutions provided by Swapnakar.
            </p>

            <p className="text-[#1C1C1C] font-serif italic">
              Share your dreams, Swapnakar will realise them on mother earth.
            </p>
        </motion.div>
      </section>

      {/* SECTION 2: Values (Full Width Dark Charcoal section) */}
      <section className="bg-dark-charcoal py-20 md:py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 md:mb-20"
          >
            <span className="text-[11px] font-sans tracking-[0.2em] text-gold uppercase font-bold block mb-3">
              OUR BELIEFS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
              The Columns of Our Practice
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Dream & Innovation",
                desc: "A confluence of Dream, Architect and Innovation — inspired by the sacred phenomenon of Sangam at Allahabad — shaping homes, institutions, complexes and townships.",
              },
              {
                title: "Quality & Values",
                desc: "Established in 2000, Swapnakar maintains high values and quality as a non-negotiable attribute, with Architect, Vaastu, Safety and Interior Designing integrated into every assignment.",
              },
              {
                title: "Client Satisfaction",
                desc: "Experienced professionals with absolute command over their work, balancing clients' needs and luxury within available resources — leaving clients with zero queries.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center space-y-4"
              >
                <h3 className="font-serif text-3xl text-gold font-medium">
                  {value.title}
                </h3>
                <p className="text-sm font-sans text-[#C4C4C2] leading-relaxed max-w-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: Get In Touch Details */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            <span className="text-[11px] font-sans tracking-[0.2em] text-mid-grey uppercase font-bold block">
              COLLABORATING
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-semibold leading-none">
              Get In Touch
            </h2>
            <p className="text-sm font-sans text-mid-grey pr-4 leading-relaxed pt-2">
              Share your dreams with us — Swapnakar will realise them on mother earth. Visit our studio in Civil Lines, Prayagraj for architectural, interior, Vaastu and planning consultations.
            </p>
          </motion.div>

          {/* Detailed contact cells */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Address */}
            <div className="space-y-2 border-l-2 border-gold pl-6 py-1">
              <span className="text-[10px] font-sans text-mid-grey tracking-widest uppercase font-bold">Address</span>
              <div className="flex items-start gap-2.5 text-sm font-sans text-[#1C1C1C] leading-relaxed">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Telephone */}
            <div className="space-y-2 border-l-2 border-gold pl-6 py-1">
              <span className="text-[10px] font-sans text-mid-grey tracking-widest uppercase font-bold">General Sourcing</span>
              <div className="flex items-center gap-2.5 text-sm font-sans text-[#1C1C1C]">
                <Phone className="w-5 h-5 text-gold" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-gold transition-colors duration-300 font-semibold text-base">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 border-l-2 border-gold pl-6 py-1">
              <span className="text-[10px] font-sans text-mid-grey tracking-widest uppercase font-bold">Electronic Mail</span>
              <div className="flex items-center gap-2.5 text-sm font-sans text-[#1C1C1C]">
                <Mail className="w-5 h-5 text-gold" />
                {/* EDIT TEXT: client email */}
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors duration-300">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Shared Socials with beautiful styling */}
            <div className="space-y-2 border-l-2 border-gold pl-6 py-1">
              <span className="text-[10px] font-sans text-mid-grey tracking-widest uppercase font-bold">Follow Us</span>
              <div className="flex items-center flex-wrap gap-4 pt-1">
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 bg-warm-grey hover:bg-[#1C1C1C] hover:text-white transition-all text-xs font-sans text-pure-black font-semibold uppercase"
                  aria-label="Instagram link"
                >
                  <Instagram className="w-4 h-4 text-gold" />
                  Insta
                  <ArrowUpRight className="w-3 h-3 text-mid-grey" />
                </a>

                <a
                  href={CONTACT_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 bg-warm-grey hover:bg-[#1C1C1C] hover:text-white transition-all text-xs font-sans text-pure-black font-semibold uppercase"
                  aria-label="YouTube channel link"
                >
                  <Youtube className="w-4 h-4 text-gold" />
                  YouTube
                  <ArrowUpRight className="w-3 h-3 text-mid-grey" />
                </a>

                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 bg-warm-grey hover:bg-[#1C1C1C] hover:text-white transition-all text-xs font-sans text-pure-black font-semibold uppercase"
                  aria-label="Facebook page link"
                >
                  <Facebook className="w-4 h-4 text-gold" />
                  FB
                  <ArrowUpRight className="w-3 h-3 text-mid-grey" />
                </a>

                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 bg-warm-grey hover:bg-[#1C1C1C] hover:text-white transition-all text-xs font-sans text-pure-black font-semibold uppercase"
                  aria-label="LinkedIn profile link"
                >
                  <Linkedin className="w-4 h-4 text-gold" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-mid-grey" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
