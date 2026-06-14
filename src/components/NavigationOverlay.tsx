/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, Instagram, Twitter, Linkedin, PhoneCall, Mail } from "lucide-react";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  const [servicesExpanded, setServicesExpanded] = useState(true);

  const menuItems = [
    { title: "Home", href: "#", hasSub: false },
    { title: "Work", href: "#work", hasSub: false },
    { 
      title: "Services", 
      href: "#services", 
      hasSub: true,
      subItems: ["Brand", "Marketing", "Product"] 
    },
    { title: "About", href: "#about", hasSub: false },
    { title: "Contact", href: "#contact", hasSub: false },
  ];

  const handleLinkClick = (href: string) => {
    document.body.style.overflow = "unset";
    onClose();
    // Smooth scroll if element exists
    const id = href.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.08, delayChildren: 0.1 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto px-6 md:px-12 pt-28 pb-8 font-sans"
        >
          {/* Ambient blurred glowing colors in the menu background to mirror the first screenshot */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#EAF782]/40 blur-[130px] animate-pulse duration-[8000ms]" />
            <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-50 blur-[100px]" />
          </div>

          <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center">
            <nav className="flex flex-col gap-1 md:gap-2">
              {menuItems.map((item, idx) => {
                if (item.hasSub) {
                  return (
                    <motion.div key={idx} variants={itemVariants} className="border-b border-gray-100 py-1.5 md:py-2.5">
                      <div 
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="flex justify-between items-center group cursor-pointer"
                      >
                        <span className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 transition-colors group-hover:text-black">
                          {item.title}
                        </span>
                        <div className="flex items-center gap-4">
                          <ChevronDown 
                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                              servicesExpanded ? "rotate-180" : ""
                            }`} 
                          />
                          <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-300 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                        </div>
                      </div>

                      <AnimatePresence>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-6 md:pl-10 mt-3 md:mt-4 flex flex-col gap-2 md:gap-3 border-l-2 border-brand/50 mb-3"
                          >
                            {item.subItems?.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => handleLinkClick(`#services`)}
                                className="text-left text-xl md:text-2xl lg:text-3xl font-light text-gray-500 hover:text-brand-dark transition-colors block py-0.5"
                              >
                                {sub}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="border-b border-gray-100 py-2.5 md:py-4 flex justify-between items-center group cursor-pointer"
                    onClick={() => handleLinkClick(item.href)}
                  >
                    <span className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 transition-colors group-hover:text-black">
                      {item.title}
                    </span>
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-300 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Social Links matching footer of first Screenshot */}
          <div className="max-w-4xl mx-auto w-full mt-8 md:mt-12 pt-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-gray-400">
              <div className="flex gap-4 md:gap-8 uppercase">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-1.5 hover:text-black transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-1.5 hover:text-black transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-1.5 hover:text-black transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-brand-dark filter brightness-90">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
                <span>+44 7868 951091</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
