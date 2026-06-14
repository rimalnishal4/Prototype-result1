/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Milestone, CodeSquare, Check } from "lucide-react";

export default function OurPurpose() {
  const highlights = [
    {
      title: "Strategy First",
      text: "We align product interfaces directly with core user metrics. No cosmetic-only updates; everything is backed by deep conversion dynamics."
    },
    {
      title: "Sensory Creative",
      text: "We build layouts that appeal to human senses. Refined typography, smooth transitions, and visual focus points that make users feel something."
    },
    {
      title: "Flawless Engineering",
      text: "Engineered in robust, modular frameworks that load instantly and perform fluidly across all mobile and widescreen displays."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full font-sans bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left hand segment: Huge bold purpose statement matching Screenshot 8 */}
        <div className="lg:col-span-8">
          <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase block mb-6">
            OUR PURPOSE
          </span>
          <motion.p
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight font-light text-brand-dark tracking-tight"
          >
            "To create brand experiences of the <span className="font-normal text-emerald-600 italic">highest caliber</span>, we take a multi-disciplinary approach to our work by seamlessly integrating deep business strategy, expressive creative art design, and results-driven conversion frameworks."
          </motion.p>
        </div>

        {/* Right hand segment: Specific core principles */}
        <div className="lg:col-span-4 flex flex-col gap-8 lg:mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-gray-100 pb-6"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform" />
                <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
