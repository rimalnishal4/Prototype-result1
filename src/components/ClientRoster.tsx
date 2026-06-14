/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, Info, FileText, Search, Settings, ShieldAlert, KeyRound, MapPin } from "lucide-react";

export default function ClientRoster() {
  const inclusions = [
    {
      num: "01",
      title: "On-Page SEO & Content Optimization",
      desc: "Injecting high-relevance geo-modifiers into headings, titles, meta tags, and body copies, optimizing your core services pages for localized rankings."
    },
    {
      num: "02",
      title: "Technical SEO Fixes",
      desc: "Remedying broken redirect indexes, implementing local JSON-LD schema markup files, fixing slow page loads, and securing responsive mobile views."
    },
    {
      num: "03",
      title: "Google Business Profile Optimization",
      desc: "Configuring premium primary and secondary categories, uploading geotagged photos, answering customer Q&As, and setting direct messaging triggers."
    },
    {
      num: "04",
      title: "Local SEO & Citation Building",
      desc: "Synchronizing your business Name, Address, and Phone (NAP) across 150+ high-tier directories to construct deep algorithmic trust."
    },
    {
      num: "05",
      title: "Keyword & Competitor Research",
      desc: "Reverse-engineering your nearest rivals' digital footprints to steal their ranking citations and map out profitable nearby keywords."
    },
    {
      num: "06",
      title: "Authority & Trust Signals",
      desc: "Formulating regional press writeups and backlinking signals that certify your business as the supreme service operator in your territory."
    }
  ];

  const clientLogos = [
    { name: "Sutton Dental", type: "MEDICAL" },
    { name: "Oakwood Family Law", type: "LEGAL" },
    { name: "Birmingham Heating", type: "TRADES" },
    { name: "London Aesthetic Clin.", type: "CHRONIC CARE" },
  ];

  return (
    <section id="features" className="bg-[#DDF247] text-neutral-950 py-24 px-6 md:px-12 font-sans w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Trust Logo Line */}
        <div className="mb-20 pb-12 border-b border-neutral-950/10">
          <span className="text-xs font-mono tracking-[0.25em] opacity-60 uppercase block mb-6">
            TRUSTED BY REGIONAL OPERATORS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {clientLogos.map((cl, i) => (
              <div key={i} className="flex flex-col items-start border-l border-neutral-950/15 pl-4 py-1">
                <span className="font-display font-extrabold text-sm tracking-tight text-neutral-900">{cl.name}</span>
                <span className="text-[9px] font-mono opacity-60 mt-0.5 uppercase tracking-wider">{cl.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-[0.25em] opacity-60 uppercase block">CAMPAIGN INCLUSIONS</span>
            <h3 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight mt-3 text-neutral-950 leading-tight">
              What's Included.
            </h3>
            <p className="mt-4 text-neutral-800 text-sm md:text-base leading-relaxed max-w-sm">
              A comprehensive 41+ point optimization campaign across every ranking factor that matters to the search algorithm.
            </p>

            {/* Crucial Access Warning Indicator from slide 3 */}
            <div className="mt-8 bg-neutral-950 text-white rounded-2xl p-5 border border-neutral-800 flex items-start gap-4">
              <KeyRound className="w-5 h-5 text-[#DDF247] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">ACCESS REQUIRED TO EXECUTE:</h4>
                <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">
                  To complete the optimization checklist, we will guide you on granting connection access to your <strong>Google Business Profile</strong> and <strong>Website Admin Panel</strong>. Let's build together safely.
                </p>
              </div>
            </div>
          </div>

          {/* List items block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {inclusions.map((inc, index) => (
              <motion.div
                key={inc.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/40 hover:bg-white/60 p-5 rounded-2xl transition-all border border-neutral-900/5 hover:shadow-lg shadow-neutral-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold text-neutral-600 bg-white/50 px-2 py-0.5 rounded">PILLAR {inc.num}</span>
                    <Check className="w-4 h-4 text-emerald-800" />
                  </div>
                  <h4 className="font-bold text-sm tracking-tight text-neutral-950 mt-4 leading-snug">
                    {inc.title}
                  </h4>
                  <p className="text-xs text-neutral-800 mt-2 leading-relaxed">
                    {inc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
