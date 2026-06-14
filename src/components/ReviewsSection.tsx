/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, MessageSquareQuote, CheckCircle, TrendingUp } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: "rev1",
      name: "Dr. Arthur Vance, DDS",
      role: "Clinical Director",
      company: "Vanguard Dental Clinic, London",
      quote: "ResultsGenie completely redefined our client acquisition volume. We had tried generic agency campaigns that did diddly-squat. Within 45 days of their 41-Point local setup, our phone lines were backed up with appointments. Truly transparent, reliable local masters.",
      stars: 5,
      impact: "+340% Dental Bookings Increase"
    },
    {
      id: "rev2",
      name: "Sabrina Cohen, Esq.",
      role: "Managing Partner",
      company: "Apex Injury Law Group, Manchester",
      quote: "Skeptical doesn't even describe my initial stance when they requested the upfront deposit. But their Exclusive Territory rule is real &mdash; within three months we owned the local Map Pack for high-value personal injury search keywords.",
      stars: 5,
      impact: "#19 to #2 Maps Rank Rise"
    },
    {
      id: "rev3",
      name: "Marcus Sterling",
      role: "Operations Chief",
      company: "Sterling HVAC Contracting",
      quote: "Their guarantee is airtight. They worked on our physical address corrections, synchronized index records, and boosted our local call flow within 60 days. The direct WhatsApp support lines felt like a dedicated in-house wing.",
      stars: 5,
      impact: "+410% Phone Call Leads Boost"
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans bg-neutral-950 text-white relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute inset-0 bg-neutral-950/20" />
      <div className="absolute bottom-[-10%] left-[20%] w-[320px] h-[320px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 mb-16 border-b border-white/10 pb-10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#DDF247] uppercase block">PARTNER HEARSAY</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold mt-2 text-white tracking-tight">
              Local Reviews & Praise
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Don't take our word for it. Hear from leading local dental, medical, cooling, and legal service directors who climbed to the top with ResultsGenie.
          </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-3xl flex flex-col justify-between h-auto hover:border-neutral-700 transition-all group"
            >
              <div>
                {/* Five Star Row */}
                <div className="flex gap-1">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#DDF247] stroke-none" />
                  ))}
                </div>

                {/* Quote details */}
                <p className="text-neutral-300 italic text-sm mt-5 leading-relaxed font-sans select-none">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 border-t border-neutral-800/80 pt-6">
                <h4 className="text-sm font-bold text-white tracking-tight font-display">
                  {rev.name}
                </h4>
                <div className="text-[11px] text-[#DDF247] font-mono uppercase mt-0.5">
                  {rev.role} &bull; {rev.company}
                </div>

                {/* Impact Stat tag */}
                <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 py-2 px-3.5 rounded-xl flex items-center justify-between text-emerald-400 font-bold text-xs">
                  <span className="font-mono tracking-wider text-[10px] uppercase font-bold text-neutral-300">Metric Impact:</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{rev.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic micro trust verification footer inside cards section */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-500 tracking-wider uppercase flex items-center justify-center gap-2 select-none">
          <CheckCircle className="w-4 h-4 text-[#DDF247]" />
          <span>All reviews collected through verified Google and trust surveys</span>
        </div>

      </div>
    </section>
  );
}
