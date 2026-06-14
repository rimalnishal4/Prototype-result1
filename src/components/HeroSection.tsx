/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, ChevronDown, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans">
      
      {/* Background lights reflecting the first screenshot's premium glowing aesthetic */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[20%] w-[380px] h-[380px] rounded-full bg-[#EAF782]/20 blur-[120px] animate-pulse duration-[7000ms]" />
        <div className="absolute top-[15%] right-[10%] w-[420px] h-[420px] rounded-full bg-[#9FF2D1]/15 blur-[140px]" />
      </div>

      {/* Main Interactive Visual Stage (representing the video reel in screenshots 3 & 6) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full aspect-[21/10] min-h-[250px] md:min-h-[460px] rounded-3xl bg-neutral-950 overflow-hidden relative shadow-2xl border border-neutral-900 group cursor-pointer"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {/* Animated fluid abstract canvas backing */}
        <div className="absolute inset-0 z-0">
          {/* Morphing gradient circles simulating live reel footage */}
          <motion.div 
            animate={isPlaying ? {
              scale: [1, 1.15, 0.9, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 30% 70% / 50% 60% 40% 60%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            } : {}}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#EAF782]/40 via-emerald-700/30 to-purple-800/40 blur-[40px] opacity-75"
          />

          {/* Floating UI Elements indicating ResultsGenie projects */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full px-6 opacity-30 md:opacity-60 transition-opacity">
              <motion.div
                animate={isPlaying ? { y: [0, -10, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col justify-between h-28 hidden md:flex"
              >
                <span className="text-[10px] font-mono tracking-widest text-white/40">BRAND VALUE</span>
                <span className="text-xl font-display font-bold text-white tracking-tight">+350%</span>
              </motion.div>
              <motion.div
                animate={isPlaying ? { y: [0, 12, 0] } : {}}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col justify-between h-28"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-serif italic text-white/80">Creativity meets conversion</span>
              </motion.div>
              <motion.div
                animate={isPlaying ? { y: [0, -8, 0] } : {}}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col justify-between h-28"
              >
                <span className="text-[10px] font-mono tracking-widest text-emerald-400">ACTIVE CLIENTS</span>
                <span className="text-xl font-display font-semibold text-white">Genie Hub</span>
              </motion.div>
              <motion.div
                animate={isPlaying ? { y: [0, 10, 0] } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col justify-between h-28 hidden md:flex"
              >
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=120&auto=format&fit=crop&q=80" className="w-6 h-6 rounded-full object-cover border border-white/20" referrerPolicy="no-referrer" />
                <span className="text-[10px] font-mono text-white/50">RESULTSGENIE REEL 2026</span>
              </motion.div>
            </div>
          </div>

          {/* Large dynamic grid lines to mimic tech feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Central Play/Pause Toggle Indicator */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-brand-dark flex items-center justify-center shadow-2xl relative pointer-events-auto"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-brand-dark stroke-none translate-x-[0px]" />
            ) : (
              <Play className="w-8 h-8 fill-brand-dark stroke-none translate-x-[4px]" />
            )}
            
            {/* Animated outer ring */}
            <span className={`absolute inset-0 rounded-full border border-white/30 animate-pulse ${isPlaying ? "scale-125" : "scale-100"}`} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="text-white text-xs font-mono tracking-widest mt-4 uppercase"
          >
            {isPlaying ? "Click to Pause Experience" : "Click to Play Reel"}
          </motion.p>
        </div>

        {/* Bottom indicators */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center text-xs text-white/40 font-mono">
          <span className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${isPlaying ? "animate-ping" : ""}`} />
            <span>HQ STEREO REEL: active</span>
          </span>
          <span className="hidden sm:inline-block">CLIENT INTEGRITY &bull; RESULTSGENIE LIMITED</span>
        </div>
      </motion.div>

      {/* Modern Slogan matching Screenshot 6 */}
      <div className="mt-12 md:mt-20 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark tracking-tight leading-tight font-light"
        >
          We're a <span className="italic block sm:inline font-normal">digital-first</span> creative agency where <span className="font-sans font-normal tracking-tighter text-emerald-600">genius creativity</span> meets conversion.
        </motion.h1>

        {/* Call to action button matching "View All Work" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center justify-between gap-6 bg-brand-dark hover:bg-neutral-900 border border-brand-dark text-white font-medium text-sm py-4 px-8 rounded-full shadow-lg hover:shadow-xl cursor-pointer transition-all"
          >
            <span>View All Work</span>
            <div className="bg-white/10 rounded-full p-1.5 group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 text-brand" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Soft divider line */}
      <div className="w-full h-[1px] bg-gray-100 mt-20" />
    </section>
  );
}
