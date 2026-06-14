/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, Shield, ShieldCheck, AlertCircle, Sparkles, PhoneCall, HelpCircle } from "lucide-react";

export default function ServicePricing() {
  const [selectedPlan, setSelectedPlan] = useState<"initial" | "maintenance">("initial");

  const plans = [
    {
      id: "initial",
      badge: "RECOMMENDED SETUP",
      title: "Initial Campaign",
      price: "$500",
      period: "per month",
      desc: "For local service operators wanting to capture immediate map visibility, dominate niche keywords, and audit Google Business Profiles.",
      features: [
        "3-month initial localized optimization campaign",
        "$1,500 fully collected upfront (all set-up fees waived)",
        "Overhaul of 41+ regional optimization points",
        "Comprehensive citation address cleanups (NAP sync)",
        "Google Business Profile categories and photo optimization",
        "Strategic local service map-pack keyword modeling",
        "Measurable results in 90 days - or we refund every penny",
      ],
      pricingDetails: "Collected upfront: $1,500 total billing for first 90 days. Zero hidden setup fees."
    },
    {
      id: "maintenance",
      badge: "POST-CAMPAIGN GROWTH",
      title: "Maintenance Plan",
      price: "$399",
      period: "per month",
      desc: "Begins automatically on Month 4. Protect your rankings, monitor changing competitor moves, and continuously expand regional authority.",
      features: [
        "Ongoing protection of your top-pack ranks after Month 3",
        "Weekly rank monitoring, analysis, & custom dashboard reporting",
        "Continued content creation & service description updates",
        "Competitor analysis & local SEO strategy updates",
        "Automated reviews monitoring and feedback tools tuning",
        "Google Business Profile Q&A and posts management",
        "Dedicated account strategist and 24/7 direct WhatsApp line",
      ],
      pricingDetails: "Billed monthly starting Month 4. High flexibility to pause or downgrade anytime."
    }
  ];

  return (
    <section id="services" className="bg-neutral-950 text-white py-24 px-6 md:px-12 font-sans w-full relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/80 via-neutral-950 to-neutral-950 pointer-events-none" />
      <div className="absolute top-[10%] left-[20%] w-[380px] h-[380px] rounded-full bg-emerald-500/10 blur-[130px] animate-pulse duration-[8000ms] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#DDF247] uppercase">INVESTMENT & PRICING</span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight mt-3">
            Simple, Transparent Plans.
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Dominate local search lists with straightforward billing, absolute clarity, and zero risk. Select a plan below to inspect details.
          </p>
        </div>

        {/* Pricing Selection Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 flex gap-2 shadow-2xl relative">
            <button
              onClick={() => setSelectedPlan("initial")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                selectedPlan === "initial"
                  ? "bg-[#DDF247] text-neutral-950 font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Initial Setup ($500/mo)
            </button>
            <button
              onClick={() => setSelectedPlan("maintenance")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                selectedPlan === "maintenance"
                  ? "bg-[#DDF247] text-neutral-950 font-bold"
                  : "text-gray-400 hover:text-white relative"
              }`}
            >
              Maintenance ($399/mo)
            </button>
          </div>
        </div>

        {/* Dynamic Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
          
          {/* Main feature checklist card */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {plans.find(p => p.id === selectedPlan)?.badge}
              </span>
              <span className="text-xs text-neutral-500 font-mono tracking-wider uppercase">INCLUSIONS</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mt-4">
              {plans.find(p => p.id === selectedPlan)?.title} Inclusions
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              {plans.find(p => p.id === selectedPlan)?.desc}
            </p>

            {/* Checklist of services */}
            <ul className="mt-8 flex flex-col gap-4">
              {plans.find(p => p.id === selectedPlan)?.features.map((feat, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-sm text-neutral-300"
                >
                  <div className="bg-[#DDF247]/10 p-1 rounded-lg border border-[#DDF247]/20 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#DDF247]" />
                  </div>
                  <span>{feat}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-neutral-500 text-xs">
              <span className="flex items-center gap-1.5 font-mono">
                <AlertCircle className="w-4 h-4 text-[#DDF247]" />
                {plans.find(p => p.id === selectedPlan)?.pricingDetails}
              </span>
            </div>
          </div>

          {/* Golden Guarantee Banner & Dynamic pricing value summary tag */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <div className="bg-[#DDF247] rounded-3xl p-8 border border-[#c3d52c] text-neutral-950 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              {/* Overlay abstract background loops for styling */}
              <div className="absolute inset-0 bg-[radial-gradient(var(--tw-gradient-stops))] from-yellow-300/20 via-transparent to-transparent opacity-20" />
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest bg-neutral-950 text-[#DDF247] px-3 py-1 rounded-full uppercase font-bold">
                    RESULTSGENIE OATH
                  </span>
                  <ShieldCheck className="w-8 h-8 text-neutral-950" />
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest font-mono text-neutral-800">GUARANTEED INVESTMENT</div>
                  <div className="flex items-baseline gap-2.5 mt-1.5">
                    <span className="text-6xl font-black font-display tracking-tight leading-none">
                      {plans.find(p => p.id === selectedPlan)?.price}
                    </span>
                    <span className="text-sm font-semibold font-sans italic opacity-85">
                      / {plans.find(p => p.id === selectedPlan)?.period}
                    </span>
                  </div>
                </div>

                {/* Slogan details matching Screenshot 5 */}
                <div className="mt-8 border-t border-neutral-950/15 pt-6">
                  <h4 className="font-extrabold text-md uppercase tracking-tight text-neutral-950 flex items-center gap-1.5 font-display">
                    "If we don't get you on top, you pay nothing"
                  </h4>
                  <p className="text-xs font-sans mt-2 text-neutral-800 leading-relaxed font-light">
                    Our primary core motive is results-oriented integrity. If we do not successfully elevate your business Google Business ranks on top, we instantly refund 100% of your dollars and dig deeper with diagnostic questions to solve the core roadblock.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/447868951091?text=Hello%20ResultsGenie!%20I'd%20like%20to%20order%20the%20Local%20SEO%20Setup%20package."
                target="_blank"
                referrerPolicy="no-referrer"
                className="mt-8 w-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl text-center shadow-lg hover:bg-neutral-800 transition-colors cursor-pointer block select-none"
              >
                Launch Risk-Free Campaign &bull; Let's Chat
              </a>
            </div>

            {/* Micro details indicator */}
            <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl p-5 text-neutral-400 text-xs">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-[#DDF247] flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Exclusive Territory Commitment</span>
                  <p className="text-neutral-500 mt-1 leading-normal text-[11px]">
                    To assure fair competition, we only work with <strong>one company per service niche</strong> in any geographical zone. Once we partner with you, we shut the door to your local rivals.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
