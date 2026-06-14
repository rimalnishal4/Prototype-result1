/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Compass, ShieldAlert, Cpu } from "lucide-react";

export default function ClientRoster() {
  const clients = [
    {
      name: "PayPal",
      logo: (
        <svg className="h-8 text-brand-dark filter hover:brightness-125 transition-all" viewBox="0 0 100 32" fill="currentColor">
          {/* Custom vector PayPal representation */}
          <path d="M12 4h10c4 0 7 2 7 6s-3 6-7 6h-6v10h-4V4zm4 4v5h2.5c2 0 3-1 3-2.5S20.5 8 18.5 8H16z" />
          <path d="M30 4h10c4 0 7 2 7 6s-3 6-7 6h-6v10h-4V4zm4 4v5h2.5c2 0 3-1 3-2.5S38.5 8 36.5 8H34z" opacity="0.75" />
          <text x="50" y="22" className="font-sans font-bold text-[14px]">PayPal</text>
        </svg>
      )
    },
    {
      name: "Pinterest",
      logo: (
        <svg className="h-8 text-brand-dark filter hover:brightness-125 transition-all" viewBox="0 0 100 32" fill="currentColor">
          {/* Custom vector Pinterest representation */}
          <circle cx="16" cy="16" r="12" className="fill-none stroke-current stroke-2" />
          <path d="M16 6c-5 0-9 4-9 9 0 4 2.5 7 5.5 8.5-.1-.8-.1-2 .2-3l1.5-6s-.4-.8-.4-2c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1 4.4-.3 1.3.7 2.4 2 2.4 2.4 0 4.2-2.5 4.2-6.2 0-3.2-2.3-5.5-5.6-5.5s-6.2 2.5-6.2 6.2c0 1.2.5 2.5 1 3.2.1.2.1.3 0 .4l-.4 1.5c0 .2-.2.2-.4.1-1.6-.8-2.6-3-2.6-4.8 0-4 3-7.8 8.4-7.8 4.4 0 7.8 3.1 7.8 7.3 0 4.4-2.8 7.8-6.6 7.8-1.3 0-2.5-.7-3-1.6l-.8 3.2c-.3 1.1-1 2.5-1.5 3.3 1.2.4 2.5.6 3.8.6 5 0 9-4 9-9s-4-9-9-9z" />
          <text x="36" y="22" className="font-sans font-extrabold text-[13px] tracking-tight">Pinterest</text>
        </svg>
      )
    },
    {
      name: "ŌURA",
      logo: (
        <svg className="h-8 text-brand-dark filter hover:brightness-125 transition-all" viewBox="0 0 100 32" fill="currentColor">
          {/* Custom vector Oura representation */}
          <circle cx="16" cy="16" r="9" className="fill-none stroke-current stroke-2" />
          <path d="M11 7h10" className="stroke-current stroke-2" />
          <text x="34" y="22" className="font-display font-light text-[15px] tracking-[0.25em]">OURA</text>
        </svg>
      )
    }
  ];

  const services = [
    {
      title: "Brand Strategy & Core Identity",
      description: "We orchestrate deep research, audience segmentation, corporate messaging directives, and unique aesthetic systems that lay the foundations for persistent brand elevation.",
      points: ["Core Guidelines & Typography", "Motion Branding", "Competitive Grounding"]
    },
    {
      title: "Product Design & Custom UX",
      description: "Designing websites and cloud dashboard solutions that users embrace. We run visual journeys and coordinate high-frequency interactive canvas designs.",
      points: ["Dynamic React Blueprints", "Multi-surface Responsive Layouts", "A11y Compliant Systems"]
    },
    {
      title: "Interactive Campaigns",
      description: "Telling rich, visual stories that provoke action. We develop creative copywriting assets and multi-disciplinary systems that drive performance.",
      points: ["Art and Video Direction", "Micro-interaction Tuning", "Conversion Optimization"]
    }
  ];

  return (
    <section id="services" className="bg-brand text-brand-dark py-24 px-6 md:px-12 font-sans w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Client Roster segment */}
        <div className="mb-24">
          <span className="text-xs font-mono tracking-[0.25em] opacity-60 uppercase block mb-8">
            CLIENT ROSTER
          </span>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-brand-dark/15 pt-10">
            {clients.map((client, sIdx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="w-full flex justify-center md:justify-start"
              >
                {client.logo}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft separating line */}
        <div className="w-full h-[1px] bg-brand-dark/10 my-16" />

        {/* Brand Services Segment */}
        <div>
          <span className="text-xs font-mono tracking-[0.25em] opacity-60 uppercase block mb-10">
            SERVICES
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Major Bold text block matching Screenshot 5 */}
            <div className="lg:col-span-6">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-none text-brand-dark"
              >
                We make brands, products, websites, and campaigns.
              </motion.h3>
              <p className="mt-6 text-brand-dark/80 max-w-md font-sans text-sm md:text-base leading-relaxed">
                We design across brand, product, and strategy phases. By combining human intelligence with highly optimized visual systems, we build lasting digital assets.
              </p>
            </div>

            {/* Structured service cards */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {services.map((serv, index) => (
                <motion.div
                  key={serv.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/10 hover:bg-brand-dark/10 transition-colors"
                >
                  <h4 className="text-lg font-bold font-display text-brand-dark flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-700 bg-brand p-1 rounded">0{index + 1}</span>
                    {serv.title}
                  </h4>
                  <p className="text-brand-dark/80 text-xs mt-2.5 leading-relaxed">
                    {serv.description}
                  </p>
                  
                  {/* Point flags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {serv.points.map((point) => (
                      <span key={point} className="bg-brand-dark text-brand text-[9px] font-mono tracking-wider py-1 px-2.5 rounded-full uppercase">
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
