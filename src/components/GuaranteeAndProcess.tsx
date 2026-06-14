/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldAlert, ArrowRight, Share2, SearchCode, Rocket, Award, HelpCircle } from "lucide-react";

export default function GuaranteeAndProcess() {
  const steps = [
    {
      num: "01",
      title: "Share Access",
      desc: "Grant us standard, secure manager connection roles to your Google Business Profile & Website Admin Panel.",
      point: "No password handovers required."
    },
    {
      num: "02",
      title: "We Audit",
      desc: "We run an extensive audit against our proprietary 41+ point local ranking factor checklist within 48 hours.",
      point: "Identifying critical ranking cracks."
    },
    {
      num: "03",
      title: "Campaign Launches",
      desc: "Optimization begins instantly. Address records are synched, and keyword rankings start climbing in weeks.",
      point: "Weekly progress mapping."
    },
    {
      num: "04",
      title: "Results in 90 Days",
      desc: "You see measurable local ranking growth in Google Maps Pack &bull; or we immediately refund every single dollar.",
      point: "100% Risk-Free Guarantee."
    }
  ];

  const highlights = [
    {
      title: "90-Day Timeline",
      desc: "An aggressive, scheduled sprint focusing strictly on conversion points and high-traffic neighborhood keywords."
    },
    {
      title: "Zero Risk",
      desc: "If we do not get your business on top, we fully refund our fees and ask diagnostic questions to support you anyway."
    },
    {
      title: "Exclusive Territory",
      desc: "No double-dealing. We commit to single-operator representation per postal sector & niche. Period."
    }
  ];

  return (
    <section className="bg-white text-brand-dark py-24 px-6 md:px-12 font-sans w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: THE SHIELD GUARANTEE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Large Gold Shield Emblem */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-80 h-80 rounded-full bg-neutral-950/5 flex flex-col items-center justify-center border border-neutral-950/10 p-6 select-none shadow-inner"
            >
              {/* Spinning decorative geometric background rings */}
              <div className="absolute inset-4 rounded-full border border-dashed border-gray-300 animate-spin" style={{ animationDuration: "120s" }} />
              
              {/* Gold/Orange Glowing Core representing the Shield Guarantee */}
              <div className="bg-neutral-950 text-[#DDF247] w-64 h-64 rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl relative border border-neutral-800">
                <ShieldAlert className="w-14 h-14 text-[#DDF247] animate-bounce" />
                <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-400 mt-3 font-mono">OUR GUARANTEE</h4>
                <div className="text-lg font-black font-display tracking-tight text-white uppercase mt-1 leading-tight">
                  100% REFUND
                </div>
                <div className="text-xs font-mono font-bold text-[#DDF247] tracking-widest mt-0.5">
                  IF NO MAP RESULTS
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right guarantee terms details */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase block mb-3">
              ZERO SECURITY SCEPTICISM
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
              We promise local ranking improvements within 90 days. <span className="italic block sm:inline font-sans font-light text-gray-500">If we do not deliver, you pay nothing.</span>
            </h2>
            <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
              We pledge simple, solid integrity. Getting your service firm on top of neighborhood local maps is our absolute metric of validation. If we miss that timeline, we refund every single cent of your collected campaign and audit further &mdash; no arguments.
            </p>

            {/* Quick action tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map((hpoint) => (
                <div key={hpoint.title} className="bg-neutral-50 p-4 rounded-2xl border border-gray-100 max-w-xs flex-1 min-w-[200px]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-display">
                    {hpoint.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1.5 leading-normal">
                    {hpoint.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-[1px] bg-gray-100 my-16" />

        {/* SECTION 2: GETTING STARTED STEPS */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-12">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase block">READY TO DOMINATE?</span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark tracking-tight mt-2">
                Getting Started
              </h3>
            </div>
            <p className="text-gray-500 text-xs md:text-sm max-w-sm font-sans leading-relaxed">
              Our setup is modular and transparent. Our active onboarding takes less than 15 minutes of your administrative time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((stp) => (
              <motion.div
                key={stp.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: parseInt(stp.num) * 0.1 }}
                className="bg-neutral-50/50 hover:bg-neutral-50 border border-gray-100 p-6 rounded-2xl flex flex-col justify-between h-64 hover:shadow-lg hover:shadow-gray-100/40 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-300 font-bold text-lg">{stp.num}</span>
                    <span className="bg-brand-dark/5 text-gray-400 py-0.5 px-2 rounded-md scale-90 uppercase">Onboarding</span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-brand-dark mt-4 group-hover:text-emerald-600 transition-colors">
                    {stp.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {stp.desc}
                  </p>
                </div>

                <div className="border-t border-gray-100/80 pt-3 flex items-center gap-1.5 text-[10px] font-mono tracking-wide text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{stp.point}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Setup CTA bar from Slide 6 */}
          <div className="mt-12 bg-neutral-950 text-white rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border border-neutral-800 shadow-xl select-none">
            <span className="text-xs font-mono tracking-widest text-[#DDF247] uppercase font-bold pl-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DDF247] animate-ping" />
              <span>READY TO GET STARTED TO CAPTURE LOCAL LEADS?</span>
            </span>
            <a
              href="https://wa.me/447868951091?text=Hello%20ResultsGenie!%20I'd%20like%20to%20audit%20my%20business%20listing."
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-brand hover:bg-[#c3d52c] text-brand-dark font-bold font-mono tracking-wider text-xs uppercase py-3 px-6 rounded-xl flex items-center gap-2 cursor-pointer transition-all shrink-0 shadow-lg shadow-[#DDF247]/10 hover:shadow-[#DDF247]/20"
            >
              <span>Let's talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
