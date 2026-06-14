/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import NavigationOverlay from "./components/NavigationOverlay";
import HeroSection from "./components/HeroSection";
import LocalSEOResults from "./components/LocalSEOResults";
import GuaranteeAndProcess from "./components/GuaranteeAndProcess";
import ClientRoster from "./components/ClientRoster";
import ServicePricing from "./components/ServicePricing";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import NewsletterFooter from "./components/NewsletterFooter";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-brand-dark overflow-x-hidden selection:bg-brand selection:text-brand-dark">
      {/* Sticky brand header bar */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Full-screen drawer layout mimicking Screenshot 1 */}
      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Unified page scroll flows focused on Local SEO results, pricing, reviews & FAQs */}
      <main>
        {/* Dynamic visual stage intro */}
        <HeroSection />

        {/* Real Maps rank trajectories chart & dentist/lawyer outcomes data */}
        <LocalSEOResults />

        {/* What's Included 41+ checklist & required credentials notice */}
        <ClientRoster />

        {/* Shield Guarantee gold-circle timeline, risk factors & 4 onboard steps */}
        <GuaranteeAndProcess />

        {/* Service pricing packages ($500/mo upfront and $399/mo maintenance) */}
        <ServicePricing />

        {/* Five-star client endorsement reviews */}
        <ReviewsSection />

        {/* Skepticism barriers breakdown collapsible elements FAQ */}
        <FAQSection />
      </main>

      {/* Newsletter subscript and client directory grids */}
      <NewsletterFooter />

      {/* High-fidelity WhatsApp bubble linked to +44 7868 951091 */}
      <WhatsAppButton />
    </div>
  );
}
