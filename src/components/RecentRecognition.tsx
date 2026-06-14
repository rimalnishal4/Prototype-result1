/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Star, Trophy } from "lucide-react";

export default function RecentRecognition() {
  const awards = [
    {
      id: "webby",
      name: "THE WEBBY AWARDS",
      desc: "Outstanding Creative Platform & Branding Winner",
      graphic: (
        <svg className="w-24 h-12 text-neutral-400 group-hover:text-black transition-colors" viewBox="0 0 100 40" fill="currentColor">
          {/* Custom Webby visual stack */}
          <rect x="5" y="5" width="4" height="30" />
          <rect x="14" y="10" width="4" height="25" />
          <rect x="23" y="15" width="4" height="20" />
          <text x="32" y="24" className="font-display font-extrabold text-[12px] tracking-tight text-neutral-800">THE</text>
          <text x="32" y="34" className="font-display font-black text-[12px] tracking-widest fill-current">WEBBY</text>
        </svg>
      )
    },
    {
      id: "b2b",
      name: "B2B AWARDS 2025",
      desc: "Best Integrated Marketing Dashboard Design",
      graphic: (
        <svg className="w-28 h-12 text-neutral-400 group-hover:text-black transition-colors" viewBox="0 0 120 40" fill="currentColor">
          {/* Custom B2B Awards representation */}
          <circle cx="20" cy="20" r="14" className="fill-none stroke-current stroke-[2.5px]" />
          <text x="13" y="24" className="font-sans font-black text-[12px] tracking-tighter fill-current">B2</text>
          <text x="42" y="18" className="font-display font-black text-[9px] tracking-widest text-neutral-800">AWARDS</text>
          <text x="42" y="27" className="font-sans font-medium text-[6px] tracking-wider fill-current">THE BEST IN B2B</text>
          <text x="42" y="35" className="font-mono text-[7px] fill-current text-emerald-600">2025 WINNER</text>
        </svg>
      )
    },
    {
      id: "anthem",
      name: "ANTHEM AWARDS 2025",
      desc: "Healthcare & AI Product Gold Champion",
      graphic: (
        <svg className="w-24 h-12 text-neutral-400 group-hover:text-black transition-colors" viewBox="0 0 100 40" fill="currentColor">
          {/* Custom Anthem clean triangle */}
          <polygon points="20,5 5,34 35,34" className="fill-current" />
          <text x="42" y="16" className="font-mono text-[6px] tracking-widest text-[#B5945F] font-bold">2025 GOLD</text>
          <text x="42" y="26" className="font-display font-black text-[10px] tracking-tight fill-current">ANTHEM</text>
          <text x="42" y="35" className="font-sans font-normal text-[7px] text-neutral-500">WINNER</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans border-b border-gray-100">
      <div className="flex flex-col gap-1.5 mb-10">
        <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase">AWARDS & CREDENCE</span>
        <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase">RECENT RECOGNITION</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-between">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-6 group cursor-pointer p-4 rounded-2xl hover:bg-neutral-50/50 transition-colors"
          >
            {/* Minimal SVG block */}
            <div className="flex-shrink-0">
              {award.graphic}
            </div>

            <div className="border-l border-gray-200 pl-4 py-1">
              <h4 className="text-xs font-bold text-brand-dark tracking-wide uppercase group-hover:text-emerald-600 transition-colors">
                {award.name}
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                {award.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
