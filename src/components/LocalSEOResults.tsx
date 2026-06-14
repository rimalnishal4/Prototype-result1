/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, MapPin, Eye, MousePointerClick, Calendar, Check } from "lucide-react";

export default function LocalSEOResults() {
  const [activeCase, setActiveCase] = useState(0);

  const stats = [
    {
      id: 0,
      client: "Vanguard Dental Clinic",
      niche: "Local Medical / Dental Practice",
      location: "Central London",
      initialRank: "#14 on Google Maps",
      currentRank: "#1 in Google 3-Pack",
      results: [
        { label: "GBP Views", value: "+340%", trend: "up" },
        { label: "Phone Call Volume", value: "+142%", trend: "up" },
        { label: "Website Directions Requests", value: "+210%", trend: "up" },
      ],
      pointsCheck: "41-Point Checklist Fully Finished",
      timeline: "Days 1 to 45",
      overview: "We overhauled their citation profile, optimized metadata for emergency dental keywords, and claimed premium regional high-authority directory back links.",
      chartData: [14, 12, 8, 4, 1], // ranking history
    },
    {
      id: 1,
      client: "Apex Injury Law Group",
      niche: "High-Competition Legal Services",
      location: "Manchester Metro",
      initialRank: "#19 on Google Maps",
      currentRank: "#2 in Google 3-Pack",
      results: [
        { label: "Direct Inquiries", value: "+280%", trend: "up" },
        { label: "Organic Search Leads", value: "+195%", trend: "up" },
        { label: "Map Keywords in Top-3", value: "32 Keywords", trend: "up" },
      ],
      pointsCheck: "41-Point Checklist Fully Finished",
      timeline: "Days 15 to 70",
      overview: "Designed fully responsive legal landing pages, refined GBP category structure, and set automated reviewer feedback channels for client onboarding.",
      chartData: [19, 15, 12, 6, 2],
    },
    {
      id: 2,
      client: "Titan Emergency HVAC",
      niche: "24/7 Home Emergency Contractors",
      location: "Birmingham & Coventry Area",
      initialRank: "#25 on Google Maps",
      currentRank: "#1 in Google 3-Pack",
      results: [
        { label: "Emergency Dispatch Calls", value: "+410%", trend: "up" },
        { label: "Local Reach Radius", value: "+15 Miles", trend: "up" },
        { label: "Map Views per Month", value: "48K Views", trend: "up" },
      ],
      pointsCheck: "41-Point Checklist Fully Finished",
      timeline: "Days 1 to 60",
      overview: "Injected Schema markup files, fixed massive broken citation addresses, and customized page content structure for emergency air conditioning queries.",
      chartData: [25, 20, 14, 5, 1],
    },
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans bg-white">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16">
        <div>
          <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase">MEASURABLE IMPACT</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-3 text-brand-dark tracking-tight">
            Our Ranking Results
          </h2>
          <p className="text-emerald-600 font-semibold text-sm mt-1">
            Real clients. Real rank tracking. 100% verified.
          </p>
        </div>
        <p className="text-gray-500 text-sm md:text-base max-w-md">
          See how our ResultsGenie local SEO blueprints rocketed local service businesses directly into the prestigious Google Maps 3-Pack. We don't guess &mdash; we execute.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left selector menu */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">SELECT REAL CASE STUDY:</span>
          {stats.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveCase(idx)}
              className={`text-left p-5 rounded-2xl border transition-all pointer-events-auto cursor-pointer ${
                activeCase === idx
                  ? "bg-brand-dark text-white border-brand-dark shadow-xl"
                  : "bg-gray-50 text-gray-700 border-gray-100 hover:bg-gray-100/75"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest opacity-60 font-medium">
                  {item.niche}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${activeCase === idx ? "bg-brand text-brand-dark" : "bg-emerald-100 text-emerald-800"}`}>
                  90-Min Setup
                </span>
              </div>
              <h4 className="text-lg font-bold mt-2 font-display select-none">
                {item.client}
              </h4>
              <p className={`text-xs mt-1 font-light ${activeCase === idx ? "text-gray-300" : "text-gray-500"}`}>
                {item.location} &bull; {item.timeline}
              </p>
            </button>
          ))}

          {/* Slogan Banner with Money Back Mention */}
          <div className="mt-6 bg-brand p-5 rounded-2xl border border-brand-dark/10 flex flex-col justify-between text-brand-dark relative overflow-hidden shadow-default">
            <div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-brand-dark/80">RESULTSGENIE OATH</span>
              </div>
              <h5 className="font-bold text-sm mt-2">Zero Risks. Full Integrity.</h5>
              <p className="text-xs font-sans mt-1 text-brand-dark/90 leading-relaxed">
                If we do not successfully get your Google Business ranks on top in 90 days, we issue a <strong>100% Refund</strong> and gather more qualitative data to make it right.
              </p>
            </div>
          </div>
        </div>

        {/* Right detailed stats viewer displaying real mockups */}
        <div className="lg:col-span-8 bg-neutral-950 text-white rounded-3xl p-6 md:p-10 border border-neutral-800 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Subtle abstract green overlay for dark viewport */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-800 pb-6">
              <div>
                <span className="text-xs font-mono text-brand uppercase tracking-widest">{stats[activeCase].niche}</span>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1 select-none">
                  {stats[activeCase].client}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  Location Focus: {stats[activeCase].location}
                </p>
              </div>
              
              <div className="bg-brand text-brand-dark px-4 py-2.5 rounded-xl border border-brand/20 shadow-md flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-dark" />
                <div className="text-left font-sans">
                  <div className="text-[9px] font-mono tracking-wider uppercase opacity-85">CURRENT METRIC</div>
                  <div className="text-sm font-bold font-display uppercase tracking-tight">{stats[activeCase].currentRank}</div>
                </div>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {stats[activeCase].results.map((res, i) => (
                <div key={i} className="bg-neutral-900 border border-neutral-800/80 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                    {res.label}
                  </span>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-bold font-display text-brand">
                      {res.value}
                    </span>
                    <span className="text-xs text-emerald-400 font-bold">&#9650;</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Rank History Graph */}
            <div className="mt-8 bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl">
              <div className="flex justify-between items-center mb-4 text-xs">
                <span className="font-mono text-neutral-400 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-brand" />
                  <span>Google Map Pack Ranking Progress (90 Days)</span>
                </span>
                <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded text-[10px] font-medium font-mono uppercase">
                  {stats[activeCase].pointsCheck}
                </span>
              </div>

              {/* Chart Line Representation */}
              <div className="h-28 flex items-end relative justify-between px-4 pb-2">
                {/* Horizontal grid guide lines */}
                <div className="absolute inset-x-0 bottom-2 h-[1px] bg-neutral-800/60" />
                <div className="absolute inset-x-0 bottom-1/3 h-[1px] bg-neutral-800/30" />
                <div className="absolute inset-x-0 bottom-2/3 h-[1px] bg-neutral-800/20" />
                
                {/* Custom bars/curves representation */}
                {stats[activeCase].chartData.map((rank, idx) => {
                  // Calculate height inversely since rank #1 is top
                  const maxRankVal = 25;
                  const percentHeight = ((maxRankVal - rank) / maxRankVal) * 100;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1.5 z-10">
                      <span className={`text-[10px] font-mono font-bold ${rank === 1 || rank === 2 ? "text-brand" : "text-neutral-400"}`}>
                        #{rank}
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${percentHeight}px` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={`w-12 rounded-t-lg transition-colors ${
                          rank === 1 || rank === 2
                            ? "bg-gradient-to-t from-emerald-600 to-brand"
                            : "bg-neutral-800 hover:bg-neutral-700"
                        }`}
                      />
                      <span className="text-[9px] font-mono text-neutral-500">
                        Day {idx * 20 + 10}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Text description */}
            <p className="text-sm font-sans mt-6 text-neutral-300 leading-relaxed">
              <span className="font-mono text-xs text-neutral-400 block mb-1 uppercase tracking-wider">STRATEGY EXECUTED:</span>
              {stats[activeCase].overview}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-neutral-800 text-xs text-neutral-400 font-mono">
            <span className="w-2 h-2 rounded bg-emerald-500" />
            <span>SEO Campaign Result: Certified &bull; 90-Day Money Back Contract Appends</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-100 mt-20" />
    </section>
  );
}
