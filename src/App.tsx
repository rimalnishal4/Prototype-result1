/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import NavigationOverlay from "./components/NavigationOverlay";
import HeroSection from "./components/HeroSection";
import RecentWork from "./components/RecentWork";
import RecentRecognition from "./components/RecentRecognition";
import ClientRoster from "./components/ClientRoster";
import OurPurpose from "./components/OurPurpose";
import NewsNoteworthy from "./components/NewsNoteworthy";
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

      {/* Unified page scroll flows */}
      <main>
        <HeroSection />
        <RecentWork />
        <RecentRecognition />
        <ClientRoster />
        <OurPurpose />
        <NewsNoteworthy />
      </main>

      {/* Newsletter subscript and client directoy grids */}
      <NewsletterFooter />

      {/* High-fidelity WhatsApp bubble linked to +44 7868 951091 */}
      <WhatsAppButton />
    </div>
  );
}
