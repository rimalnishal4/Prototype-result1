/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus, HelpCircle, ShieldAlert } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "If you don't get my business on top of Google Maps, what does the '100% refund' actually involve?",
      a: "Exactly what it says on the tin. If you purchase our Initial Campaign ($500/month, $1,500 collected upfront) and we do not successfully improve your local keyword visibility and maps placement within 90 days, we issue a 100% refund of your $1,500. No administrative fees withheld, no loopholes. We also run additional free diagnostics to clarify why your region represents high resistance."
    },
    {
      q: "Why do you collect $1,500 upfront?",
      a: "Local SEO results require heavy front-loaded overhead. During the first 48 hours, we waive all setup fees but buy high-authority citations, perform map coordinates syncing, restructure website schema nodes, and deploy professional copywriters to rebuild your service landing pages. Collecting the 3-month fee upfront covers these structural outlays while demonstrating mutual commitment."
    },
    {
      q: "What credentials or access roles do you require to get started?",
      a: "To execute the 41+ Point checklist, we require manager connection roles to (1) your Google Business Profile (GBP) and (2) your website administration panel (such as WordPress, Shopify, or Webflow). No root passwords are required; we guide you on adding team connection roles safely in 15 minutes."
    },
    {
      q: "What is your 'Exclusive Territory' rule?",
      a: "To ensure full conversion priority, we commit to representing only ONE company per service niche (e.g., one dentist, one emergency plumber, or one personal injury lawyer) within any single postal sector or zone. We will never double-deal or optimize your local direct competitors while under contract with you."
    },
    {
      q: "What happens after the initial 90-day campaign?",
      a: "Once your top position is claimed, local algorithms continuously test newer listings. To protect your rankings, monitor competitor movements, and publish active content updates, you transition to our optional Maintenance Plan ($399/month). There is no long-term tie-in; you can pause or cancel at any time."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Hand Text Info */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase block mb-3">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            Everything you need to know about our local high-impact SEO sprints, zero-risk refund guarantees, and citation ranking networks.
          </p>

          {/* Quick WhatsApp Alert Flag */}
          <div className="mt-8 bg-neutral-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-[#DDF247] stroke-neutral-950 fill-[#DDF247] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark">Still seeking answers?</h4>
              <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                Ask our account specialist directly on WhatsApp. We provide responsive, real-time feedback with zero marketing pressure.
              </p>
              <a 
                href="https://wa.me/447868951091?text=Hello%20ResultsGenie!%20I%20have%20an%20SEO%20setup%20question."
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-block mt-3 text-xs text-emerald-600 font-bold hover:underline"
              >
                Start Direct WhatsApp Query &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Right Hand Interactive Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all ${
                  isOpen 
                    ? "bg-neutral-50 border-brand-dark/10 shadow-default" 
                    : "bg-white border-gray-100 hover:bg-neutral-50/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left font-sans cursor-pointer"
                >
                  <span className="text-sm md:text-base font-bold text-brand-dark tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  
                  <div className="ml-4 p-1.5 rounded-full bg-white border border-gray-100 shadow-sm flex-shrink-0">
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
