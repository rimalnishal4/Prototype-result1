/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareText, PhoneCall, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "447868951091";
  const formattedNumber = "+44 7868 951091";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20ResultsGenie!%20I%20saw%20your%20website%20and%20would%20like%20to%20collaborate%20with%20your%20agency.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="mb-2 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-gray-100 text-brand-dark"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-gray-400">ResultsGenie Online</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3">
              <h4 className="font-semibold text-sm">Need professional results?</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Connect directly with results-driven experts. Click below to chat real-time on WhatsApp.
              </p>
              <div className="mt-2.5 bg-gray-50 p-2 rounded-xl text-xs font-mono text-gray-600 border border-gray-100 flex items-center justify-between">
                <span>Direct Line:</span>
                <span className="font-semibold text-brand-dark">{formattedNumber}</span>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm py-2.5 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
            >
              <MessageSquareText className="w-4 h-4 fill-white/20" />
              <span>Start Live Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="hidden md:flex bg-brand-dark text-white px-4 py-2 rounded-full text-xs font-mono tracking-widest border border-white/10 uppercase items-center gap-2 shadow-xl"
            >
              <span>{formattedNumber}</span>
              <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/35 hover:shadow-emerald-500/50 cursor-pointer transition-colors relative"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 items-center justify-center text-[9px] text-white font-bold font-mono">1</span>
          </span>
          <MessageSquareText className="w-6 h-6 animate-pulse" />
        </motion.button>
      </div>
    </div>
  );
}
