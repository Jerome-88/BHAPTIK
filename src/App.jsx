import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CulturalBackground from './components/CulturalBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCraft from './components/ProductCraft';
import Tutorials from './components/Tutorials';
import TutorialModal from './components/TutorialModal';
import Philosophy from './components/Philosophy';
import QRModal from './components/QRModal';
import Footer from './components/Footer';
import { TUTORIALS } from './data/tutorials';

const QR_FEATURE_ENABLED = false;

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

        {/* Section 2: Product Craft Showcase (Spesifikasi Produk 70x70) */}
        <ProductCraft />

        {/* Section 3: Interactive Folding Tutorial Grid */}
        <Tutorials
          onSelectTutorial={(tutorial) => setSelectedTutorial(tutorial)}
        />

        {/* Section 4: Batik Philosophy & History Section */}
        <Philosophy />
      </main>

      {/* Site Footer */}
      <Footer />

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
