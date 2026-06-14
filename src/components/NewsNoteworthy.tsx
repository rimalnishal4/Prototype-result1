/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, BookOpen, Clock, Globe } from "lucide-react";

export default function NewsNoteworthy() {
  const articles = [
    {
      id: "latest-greatest",
      category: "ARTICLE",
      readTime: "5 MINUTES",
      title: "Our latest & greatest news selection",
      description: "Discover how we coordinate strategy and custom canvas dynamics to bring client conversion upticks.",
      imageType: "loops"
    },
    {
      id: "healthcare-ai",
      category: "PRESS",
      readTime: "8 MINUTES",
      title: "The Drum: Healthcare's Intelligence Era",
      description: "How AI, wearables, and ambient care are rewriting healthcare branding in 2026.",
      imageType: "healthcare"
    },
    {
      id: "brand-weeks",
      category: "PRESS",
      readTime: "6 MINUTES",
      title: "Building a brand in five weeks",
      description: "How a highly-focused brand sprint built Highwire from the ground up under tight specifications.",
      imageType: "brand-sprint"
    },
    {
      id: "nice-that",
      category: "PRESS",
      readTime: "4 MINUTES",
      title: "It's Nice That x ResultsGenie",
      description: "Technical readiness + creative bravery &mdash; the formula for leading the charge in design.",
      imageType: "nice-smile"
    }
  ];

  return (
    <section id="news" className="bg-neutral-950 text-white py-24 px-6 md:px-12 font-sans w-full relative overflow-hidden">
      
      {/* Background lights for the dark section */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[500px] overflow-hidden pointer-events-none">
        <div className="absolute bottom-[5%] left-[10%] w-[350px] h-[350px] rounded-full bg-emerald-950/30 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-950/25 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* News Segment Header with fine separator line */}
        <div className="border-t border-white/10 pt-10 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-gray-500 uppercase">NEWS & NOTEWORTHY</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white tracking-tight mt-3">
              Our latest & greatest
            </h2>
          </div>
          <button className="group flex items-center gap-3 bg-white hover:bg-neutral-200 text-neutral-950 font-medium text-xs py-3.5 px-6 rounded-full cursor-pointer transition-all self-start md:self-center font-sans tracking-wide">
            <span>See what's new</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {articles.map((art, index) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              
              {/* Custom SVG Graphical Cards representing exact screenshots! */}
              <div className="w-full aspect-[16/10] bg-neutral-900 rounded-3xl overflow-hidden relative border border-white/5 flex items-center justify-center p-6 mb-6">
                
                {/* 1. GEOMETRIC LOOPS & SPECTRUM (Screenshot 7) */}
                {art.imageType === "loops" && (
                  <div className="w-full h-full relative flex flex-col justify-between">
                    {/* Intertwining black loops with orange/blue/yellow dot points */}
                    <div className="flex-grow flex items-center justify-center">
                      <svg className="w-4/5 h-4/5 text-gray-700" viewBox="0 0 100 40" fill="none">
                        <path d="M 0 20 C 10 -10, 20 50, 30 20 C 40 -10, 50 50, 60 20 C 70 -10, 80 50, 90 20 C 100 -10, 105 30, 110 20" className="stroke-white stroke-[1.5px]" />
                        <path d="M 0 20 C 10 50, 20 -10, 30 20 C 40 50, 50 -10, 60 20 C 70 50, 80 -10, 90 20 C 100 50, 105 -10, 110 20" className="stroke-neutral-600 stroke-[1px] stroke-dasharray-[2]" />
                        
                        {/* Dot keypoints matching drawing */}
                        <circle cx="10" cy="15" r="2.5" className="fill-orange-500 stroke-none" />
                        <circle cx="30" cy="20" r="2.5" className="fill-blue-400 stroke-none" />
                        <circle cx="50" cy="8" r="2.5" className="fill-brand stroke-none" />
                        <circle cx="70" cy="32" r="2.5" className="fill-orange-400 stroke-none" />
                        <circle cx="90" cy="18" r="2.5" className="fill-blue-500 stroke-none" />
                      </svg>
                    </div>
                    {/* Saturated Spectrum bar from Screenshot 7 */}
                    <div className="h-4 w-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 rounded-md opacity-90 blur-[0.5px]" />
                  </div>
                )}

                {/* 2. HEALTHCARE AI GRID (Screenshot 8) */}
                {art.imageType === "healthcare" && (
                  <div className="w-full h-full relative overflow-hidden flex flex-col justify-between">
                    {/* Smart healthcare grid overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.15)_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
                    <div className="absolute inset-0 bg-neutral-900/50" />

                    <div className="flex-grow flex items-center justify-center relative">
                      {/* Deep isometric vector representation */}
                      <svg className="w-3/5 h-3/5" viewBox="0 0 100 80" fill="none">
                        {/* Connected grid structures in glowing cyan blue */}
                        <polygon points="50,15 90,35 50,55 10,35" className="stroke-blue-500/40 fill-none stroke-[1px]" />
                        <polygon points="50,30 80,45 50,60 20,45" className="stroke-teal-500/30 fill-none stroke-[1px]" />
                        
                        {/* Heart rate & watch vector indicators */}
                        <polyline points="25,45 35,45 38,30 42,50 45,45 55,45" className="stroke-emerald-400 stroke-[1.5px] fill-none" />
                        <circle cx="50" cy="35" r="5" className="fill-blue-500 animate-ping opacity-70" />
                        <circle cx="55" cy="45" r="2" className="fill-emerald-400" />
                      </svg>

                      {/* Drum Badge Mockup Logo */}
                      <div className="absolute bottom-2 right-2 bg-black border border-white/15 px-2.5 py-1 rounded text-[8px] font-display font-black tracking-widest text-[#FFF]">
                        THE DRUM
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. BRAND SPRINT PINK-PURPLE STRIPS (Screenshot 11) */}
                {art.imageType === "brand-sprint" && (
                  <div className="w-full h-full relative flex flex-col justify-center gap-2">
                    {/* Purple bar spectrum with white blocks */}
                    <div className="h-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-between px-6 opacity-80">
                      <span className="w-3 h-[2px] bg-white rounded" />
                      <span className="w-8 h-2 bg-white rounded-sm" />
                      <span className="w-3 h-[2px] bg-white rounded" />
                    </div>
                    {/* Pink secondary bar */}
                    <div className="h-3 w-5/6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-sm opacity-60 self-center" />
                    <div className="h-1 w-2/3 bg-purple-700 rounded-full opacity-40 self-center" />
                  </div>
                )}

                {/* 4. NICE SMILE LOGO (Screenshot 11) */}
                {art.imageType === "nice-smile" && (
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Recreating the iconic circular smile logo NICE */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-28 h-28 rounded-full border-[3px] border-white flex flex-col items-center justify-center p-2 text-white relative shadow-lg"
                    >
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                        {/* "NiCE" smile design */}
                        {/* Oval background circle */}
                        <circle cx="50" cy="50" r="43" className="fill-none stroke-white stroke-[3px]" />
                        {/* Eyes */}
                        <circle cx="36" cy="43" r="5" />
                        <circle cx="64" cy="43" r="5" />
                        {/* Smiling curve */}
                        <path d="M 30 58 Q 50 78 70 58" className="fill-none stroke-white stroke-[3.5px] stroke-linecap-round" />
                        {/* Text "NICE" letter tags overlay */}
                        <text x="50" y="30" className="font-display font-black text-[9px] tracking-widest text-center text-white fill-current" textAnchor="middle">NICE</text>
                      </svg>
                    </motion.div>
                  </div>
                )}

                {/* Hover Details indicators */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-brand tracking-widest uppercase">READ FULL REPORT</span>
                  <ArrowRight className="w-4 h-4 text-brand" />
                </div>
              </div>

              {/* Title / Description */}
              <div>
                <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-gray-500 mb-2">
                  <span className="bg-white/10 text-gray-300 py-0.5 px-2 rounded uppercase text-[9px]">
                    {art.category}
                  </span>
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-brand transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1.5 leading-normal">
                  {art.description}
                </p>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
