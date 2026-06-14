/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUp, ArrowRight, CheckCircle2, Phone, Mail, Globe, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const formattedNumber = "+44 7868 951091";
  const rawNumber = "447868951091";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 5000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#f8f9fa] text-brand-dark pt-24 pb-12 px-6 md:px-12 font-sans w-full border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Newsletter signup matching Screenshot 9 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-20 border-b border-gray-200">
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-brand-dark tracking-tight leading-snug">
              Keep up to date with our quarterly newsletter, <span className="italic">“You’ve got mail.”</span>
            </h3>
            <p className="text-xs text-gray-500 mt-2 max-w-sm">
              We send concise logs concerning digital execution, design insights, and client growth reports. No spam, ever.
            </p>
          </div>

          <div className="lg:col-span-6 w-full">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                placeholder="Enter email address..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="flex-grow bg-white border border-gray-200 placeholder-gray-400 text-sm py-4 px-5 rounded-2xl outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all disabled:opacity-50"
              />
              
              <button
                type="submit"
                disabled={subscribed}
                className="group flex items-center justify-center gap-3 bg-brand-dark hover:bg-neutral-800 text-white font-medium text-xs px-6 py-4 rounded-2xl cursor-pointer transition-all disabled:bg-emerald-600 disabled:cursor-not-allowed"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#DDF247]" />
                    <span>Added to list</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#DDF247]" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Directory grids matching Screenshot 1 & 9 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 py-16">
          
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase block mb-6">
              GET IN TOUCH
            </span>
            <ul className="flex flex-col gap-3.5 text-[15px] font-light text-gray-600">
              <li>
                <a 
                  href={`https://wa.me/${rawNumber}?text=Hello%20ResultsGenie!%20I'd%20like%20to%20start%20a%20project.`} 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="hover:text-black hover:underline transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>Start a Project</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${rawNumber}?text=Hello!%20I'm%20interested%20in%20joining%20the%20ResultsGenie%20team.`} 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="hover:text-black transition-colors"
                >
                  Join the Team
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${rawNumber}?text=Hello!%20Media%20and%20press%20inquiry.`} 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="hover:text-black transition-colors"
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${rawNumber}?text=Hey%20ResultsGenie!%20Let's%20talk.`} 
                  target="_blank" 
                  className="hover:text-black transition-colors"
                >
                  Drop Us a Note
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase block mb-6">
              SEE MORE
            </span>
            <ul className="flex flex-col gap-3.5 text-[15px] font-light text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-black transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#news" className="hover:text-black transition-colors">Latest</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase block mb-6">
              CONNECT
            </span>
            <ul className="flex flex-col gap-3.5 text-[15px] font-light text-gray-600">
              <li>
                <a href="https://instagram.com" target="_blank" className="hover:text-black transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-gray-400" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" className="hover:text-black transition-colors flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-gray-400" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" className="hover:text-black transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-gray-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <span className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase block mb-6">
              HOTLINE
            </span>
            <div className="flex flex-col gap-2">
              <a 
                href={`tel:${rawNumber}`} 
                className="text-stone-900 group-hover:text-emerald-600 flex items-center gap-2 text-sm font-semibold hover:underline"
              >
                <Phone className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
                <span>{formattedNumber}</span>
              </a>
              <span className="text-[10px] text-gray-400 block tracking-normal">
                Direct WhatsApp and secure telephone line.
              </span>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gray-200 mt-6 mb-10" />

        {/* Brand footer details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="font-display font-black tracking-tighter text-md uppercase text-neutral-800">
              RESULTSGENIE
            </span>
            <span className="hidden sm:inline-block text-gray-300">|</span>
            <span className="text-xs text-gray-400 font-light">
              &copy; {new Date().getFullYear()} ResultsGenie Group Ltd. All rights resolved.
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 bg-white hover:bg-neutral-100 border border-gray-200 py-2.5 px-4 rounded-xl text-xs font-mono text-gray-500 hover:text-black cursor-pointer transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
