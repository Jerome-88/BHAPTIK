import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import CulturalBackground from './components/CulturalBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCraft from './components/ProductCraft';
import Pricing from './components/Pricing';
import Tutorials from './components/Tutorials';
import TutorialModal from './components/TutorialModal';
import Philosophy from './components/Philosophy';
import QRModal from './components/QRModal';
import Footer from './components/Footer';
import { TUTORIALS } from './data/tutorials';

const QR_FEATURE_ENABLED = true;

export default function App() {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);

  const handleStartTutorial = () => {
    const el = document.getElementById('tutorial');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePhilosophy = () => {
    const el = document.getElementById('makna');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTutorialByName = (name) => {
    const found = TUTORIALS.find(t => 
      t.title.toLowerCase().includes(name.toLowerCase()) || 
      name.toLowerCase().includes(t.title.toLowerCase())
    );
    if (found) {
      setSelectedTutorial(found);
    } else {
      setSelectedTutorial(TUTORIALS[0]);
    }
  };

  return (
    <div className="site-shell min-h-screen bg-[#FDFBF7] text-[#1B263B] font-sans antialiased selection:bg-[#C85A32] selection:text-white flex flex-col relative">
      {/* Visible Cultural Background: Fusion of Japanese Seigaiha waves & Javanese Batik Kawung / Parang */}
      <CulturalBackground />

      {/* 1. Header Navigation */}
      <Navbar
        qrEnabled={QR_FEATURE_ENABLED}
        onOpenQR={() => setShowQRModal(true)}
      />

      {/* Main Content: Murni 4 Section */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero
          onStartTutorial={handleStartTutorial}
          onExplorePhilosophy={handleExplorePhilosophy}
        />

        {/* Section 2: Product Craft Showcase */}
        <ProductCraft />

        {/* Section 3: Pilihan Koleksi & Harga */}
        <Pricing />

        {/* Section 4: Interactive Folding Tutorial Grid */}
        <Tutorials
          onSelectTutorial={(tutorial) => setSelectedTutorial(tutorial)}
        />

        {/* Section 5: Batik Philosophy & History Section */}
        <Philosophy />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button for Booth / Sales */}
      <a
        href="https://wa.me/6281317883988?text=Halo%20BHAPtik,%20saya%20tertarik%20dengan%20kain%20Furoshiki%20Batik%20dan%20mau%20tanya%20stok"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-medium text-xs sm:text-sm group"
        aria-label="Chat WhatsApp"
      >
        <Icon icon="ph:whatsapp-logo-bold" className="text-xl shrink-0" />
        <span className="hidden sm:inline">Pesan via WA</span>
      </a>

      {/* Interactive Step-by-Step Tutorial Modal */}
      <AnimatePresence>
        {selectedTutorial && (
          <TutorialModal
            tutorial={selectedTutorial}
            onClose={() => setSelectedTutorial(null)}
          />
        )}
      </AnimatePresence>

      {/* Smart Woven Tag QR Scanner Modal */}
      <AnimatePresence>
        {QR_FEATURE_ENABLED && showQRModal && (
          <QRModal
            isOpen={showQRModal}
            onClose={() => setShowQRModal(false)}
            onSelectTutorialByName={handleSelectTutorialByName}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
