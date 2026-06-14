/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Heart, Sparkles, Sliders } from "lucide-react";

export default function RecentWork() {
  const works = [
    {
      id: "feeld",
      title: "Feeld",
      subtitle: "Constellation Connections",
      description: "An inclusive relationship design engine tailored for multi-partner profile configurations.",
      tag: "Product Design & Strategy",
      bgClass: "from-rose-600 via-red-500 to-orange-500",
      mockupType: "feeld"
    },
    {
      id: "oura",
      title: "Oura Ring",
      subtitle: "Elevated Health Metrics",
      description: "A smart ring dashboard displaying circadian cycles, sleep analytics, and predictive data tracking.",
      tag: "Mobile UX & Brand Identity",
      bgClass: "from-[#E3D1C1] to-[#C8B29C]",
      mockupType: "oura"
    },
    {
      id: "alphasense",
      title: "AlphaSense",
      subtitle: "AI Business Intelligence",
      description: "An advanced market research interface featuring instant transcript categorization and real-time trend visualization.",
      tag: "Web Software & AI Grounding",
      bgClass: "from-neutral-900 via-neutral-950 to-neutral-800",
      mockupType: "alphasense"
    },
    {
      id: "perfected",
      title: "Perfected",
      subtitle: "Creative Community Brand",
      description: "A digital experience connecting artisans with design collectives, marked by organic geometry.",
      tag: "Brand Core & Strategy",
      bgClass: "from-stone-800 to-stone-900",
      mockupType: "perfected"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16">
        <div>
          <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase">SELECTED CLIENT PORTFOLIO</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-3 text-brand-dark tracking-tight">
            Recent Work
          </h2>
        </div>
        <p className="text-gray-500 text-sm md:text-base max-w-md font-sans">
          We construct high-frequency products that transform digital experiences. Each partnership is customized from architecture to conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col group"
          >
            {/* Immersive Case Card back layer */}
            <div className={`w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl bg-gradient-to-br ${work.bgClass} flex items-center justify-center p-8 transition-shadow duration-500 group-hover:shadow-2xl`}>
              
              {/* Interactive background particle highlights */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* CARD MOCKUPS */}
              {work.mockupType === "feeld" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Glowing core behind the phone */}
                  <div className="absolute w-44 h-44 rounded-full bg-pink-500/30 blur-3xl" />
                  
                  {/* Custom hand-crafted CSS phone mockup matching Screenshot 2 */}
                  <motion.div
                    whileHover={{ y: -8, rotate: -2, scale: 1.02 }}
                    className="w-[170px] h-[340px] md:w-[190px] md:h-[380px] bg-[#111216] rounded-[34px] border-[5px] border-white/20 p-3 shadow-2xl relative flex flex-col justify-between text-white overflow-hidden select-none"
                  >
                    {/* Speaker notch */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                      <div className="w-6 h-1 bg-neutral-800 rounded-full" />
                    </div>

                    {/* App Internal State */}
                    <div className="mt-6 flex flex-col items-center">
                      <span className="text-[8px] font-mono tracking-wider text-pink-400">FEELD APP</span>
                      <p className="text-[11px] font-semibold mt-1">My Constellation</p>
                    </div>

                    {/* Intersecting Orbit Paths representing the screen content */}
                    <div className="my-auto relative h-36 flex items-center justify-center">
                      <svg className="absolute w-36 h-36" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="35" className="stroke-white/10 fill-none stroke-[0.5px] stroke-dasharray-[2]" />
                        <line x1="25" y1="25" x2="75" y2="75" className="stroke-pink-500/20 stroke-[0.5px]" />
                        <line x1="75" y1="25" x2="25" y2="75" className="stroke-pink-500/20 stroke-[0.5px]" />
                      </svg>
                      
                      {/* Interactive connected avatars with placeholder graphics */}
                      <div className="absolute w-12 h-12 rounded-full border-2 border-pink-500 p-0.5 bg-neutral-900 overflow-hidden z-10 shadow-lg">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                      </div>
                      {/* Secondary connected orbits */}
                      <div className="absolute top-4 left-6 w-5 h-5 rounded-full border border-pink-400/50 bg-neutral-900 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&auto=format&fit=crop&q=80" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                      </div>
                      <div className="absolute bottom-5 right-5 w-6 h-6 rounded-full border border-pink-400/50 bg-neutral-900 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&auto=format&fit=crop&q=80" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="text-[7px] text-center text-white/50 leading-tight">cleo and 2 more linked partners</div>
                      <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-[8px] font-medium py-1.5 rounded-full w-full shadow-md">
                        Add another partner
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}

              {work.mockupType === "oura" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Desert sand background textures implemented subtly inside cards */}
                  <div className="absolute inset-0 bg-[radial-gradient(#C8B29C_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-25" />
                  
                  {/* Gold Ring glowing back reflection */}
                  <div className="absolute w-48 h-48 rounded-full bg-[#E5CCA9]/25 blur-3xl" />
                  
                  <motion.div
                    whileHover={{ y: -8, rotate: 2, scale: 1.02 }}
                    className="w-[170px] h-[340px] md:w-[190px] md:h-[380px] bg-[#111215] rounded-[34px] border-[5px] border-[#D6C2B0] p-3 shadow-2xl relative flex flex-col justify-between text-[#E3D4C4] overflow-hidden select-none"
                  >
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20" />

                    <div className="mt-6 flex justify-between items-center px-1">
                      <span className="text-[7px] text-[#C7B5A4] font-mono uppercase tracking-widest">OURA STATUS</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>

                    {/* Dynamic health stats visual bars */}
                    <div className="my-auto flex flex-col gap-2">
                      <div className="bg-[#1C1D21] p-2 rounded-xl border border-[#302C26]">
                        <div className="flex justify-between items-center text-[7px] text-gray-400">
                          <span>SLEEP CYCLE</span>
                          <span className="text-emerald-400 font-semibold">84/100</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-1 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[84%]" />
                        </div>
                      </div>

                      <div className="bg-[#1C1D21] p-2 rounded-xl border border-[#302C26]">
                        <div className="flex justify-between items-center text-[7px] text-gray-400">
                          <span>READINESS STATUS</span>
                          <span className="text-amber-400 font-semibold">88/100</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-1 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-amber-400 h-full w-[88%]" />
                        </div>
                      </div>

                      <div className="bg-[#1C1D21] p-2 rounded-xl text-[8px] border border-[#302C26] flex flex-col gap-1">
                        <span className="text-[#C5B39F] font-semibold">Circadian Rhythm</span>
                        <p className="text-[7px] text-gray-400 leading-tight">Elevated metric pattern. Focus on heavy protein diet.</p>
                      </div>
                    </div>

                    <div className="bg-[#E7D6C5] text-neutral-900 p-2.5 rounded-xl text-center flex flex-col gap-0.5">
                      <span className="text-[9px] font-bold">CIRCADIAN STATE</span>
                      <span className="text-[7px] text-neutral-600">Perfectly Balanced</span>
                    </div>
                  </motion.div>
                </div>
              )}

              {work.mockupType === "alphasense" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="w-[280px] md:w-[360px] aspect-[16/10] bg-neutral-900 rounded-xl border border-neutral-700/50 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden relative select-none"
                  >
                    {/* Inner metallic laptop bezel finish */}
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[8px] font-mono text-white/30 tracking-tight">https://alphasense.resultsgenie.com</span>
                    </div>

                    <div className="flex-grow grid grid-cols-4 gap-2 mt-2">
                      {/* Side directory */}
                      <div className="col-span-1 bg-neutral-950 p-1 rounded border border-neutral-800 flex flex-col gap-1 justify-between h-full">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[7px] font-bold text-teal-400 font-mono tracking-tighter">ALPHASENSE</span>
                          <span className="h-[2px] w-4 bg-teal-400/80 rounded" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="w-full h-1 bg-neutral-800 rounded" />
                          <span className="w-5/6 h-0.5 bg-neutral-800 rounded" />
                          <span className="w-4/6 h-1 bg-neutral-800 rounded" />
                        </div>
                      </div>

                      {/* Main directory data and charting representing Screenshot 3 */}
                      <div className="col-span-3 bg-neutral-950/60 p-1.5 rounded border border-neutral-800/80 flex flex-col justify-between h-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Sliders className="w-2.5 h-2.5 text-teal-400" />
                            <span className="text-[7px] text-white/60 font-semibold">Active Sentiment</span>
                          </div>
                          <span className="text-[6px] bg-teal-500/10 text-teal-400 px-1 py-0.5 rounded">AI Grounded</span>
                        </div>

                        {/* Custom visual chart trendline */}
                        <div className="relative h-12 flex items-end">
                          <svg className="w-full h-full" viewBox="0 0 100 30">
                            {/* SVG chart line */}
                            <path d="M 0 25 Q 15 5 30 18 T 60 5 T 90 28" fill="none" className="stroke-teal-400 stroke-[1.5px] stroke-linecap-round" />
                            <path d="M 0 25 Q 15 5 30 18 T 60 5 T 90 28 L 100 30 L 0 30 Z" className="fill-teal-500/10" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between text-[6px] text-white/30 border-t border-neutral-800/50 pt-1">
                          <span>MARKET SECTOR STATS</span>
                          <span className="text-emerald-400">+24.5% uptick</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {work.mockupType === "perfected" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=80" 
                      className="w-full h-full object-cover filter grayscale opacity-30 mix-blend-luminosity brightness-75 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Star overlay graphic from Screenshot 3 rotating slowly */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    className="relative z-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
                  >
                    {/* Elegant custom SVG multi-lobed brand flower star */}
                    <svg className="w-full h-full text-white drop-shadow-xl" viewBox="0 0 100 100" fill="currentColor">
                      {/* Central diamond star */}
                      <path d="M 50 25 Q 50 50 25 50 Q 50 50 50 75 Q 50 50 75 50 Q 50 50 50 25 Z" />
                      {/* Leaf elements surrounding the diamond representation */}
                      <ellipse cx="50" cy="12" rx="3" ry="10" />
                      <ellipse cx="50" cy="88" rx="3" ry="10" />
                      <ellipse cx="12" cy="50" rx="10" ry="3" />
                      <ellipse cx="88" cy="50" rx="10" ry="3" />
                      
                      <ellipse cx="25" cy="25" rx="4" ry="8" transform="rotate(45 25 25)" />
                      <ellipse cx="75" cy="25" rx="4" ry="8" transform="rotate(-45 75 25)" />
                      <ellipse cx="25" cy="75" rx="4" ry="8" transform="rotate(-45 25 75)" />
                      <ellipse cx="75" cy="75" rx="4" ry="8" transform="rotate(45 75 75)" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Title / Description area below the card */}
            <div className="mt-6 flex justify-between items-start">
              <div>
                <span className="text-xs font-mono tracking-wider text-emerald-600 block mb-1">
                  {work.tag}
                </span>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-emerald-600 transition-colors">
                  {work.title} &mdash; <span className="font-light text-gray-500">{work.subtitle}</span>
                </h3>
                <p className="text-gray-500 text-sm mt-1 leading-normal max-w-lg">
                  {work.description}
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-2 rounded-full text-brand-dark group-hover:bg-brand group-hover:text-brand-dark group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-gray-100 mt-20" />
    </section>
  );
}
