/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-gray-100" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Modernist Blocky Brand Logo */}
        <a 
          href="#" 
          className="font-display font-extrabold text-2xl md:text-3xl tracking-tighter uppercase text-brand-dark flex items-center gap-1 group"
        >
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">R</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">e</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">s</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">u</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">l</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">t</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">s</span>
          <span className="text-emerald-500 font-serif font-normal italic lowercase tracking-normal -ml-0.5">G</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">e</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">n</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">i</span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">e</span>
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isMenuOpen)}
          className="relative z-50 flex flex-col justify-between w-8 h-5 group cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span 
            className={`w-8 h-[2px] bg-brand-dark rounded-full transition-all duration-300 origin-right ${
              isMenuOpen ? "rotate-45 translate-y-[2px]" : ""
            }`} 
          />
          <span 
            className={`w-8 h-[2px] bg-brand-dark rounded-full transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100 group-hover:translate-x-1"
            }`} 
          />
          <span 
            className={`w-8 h-[2px] bg-brand-dark rounded-full transition-all duration-300 origin-right ${
              isMenuOpen ? "-rotate-45 -translate-y-[2px]" : ""
            }`} 
          />
        </button>
      </div>
    </motion.header>
  );

  // Helper inside click handlers
  function setIsOpen(val: boolean) {
    setIsMenuOpen(val);
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
}
