import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { MOTIFS } from '../data/motifs';

export default function Philosophy() {
  const [selectedMotif, setSelectedMotif] = useState(MOTIFS[0]);
  const [showCareModal, setShowCareModal] = useState(false);

  return (
    <section className="relative py-16 lg:py-24 bg-[#F5F0EB]/60 border-t border-[#E6DFD5] overflow-hidden" id="makna">
      
      {/* Background Decorative Vector: Subtle Fusion of Japanese Seigaiha & Javanese Kawung */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15">
        <svg
          className="absolute left-1/2 -translate-x-1/2 -top-20 w-[900px] h-[500px] text-[#C85A32]"
          viewBox="0 0 800 400"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          {/* Seigaiha concentric arches */}
          <path d="M100,200 C150,120 250,120 300,200" strokeWidth="1" />
          <path d="M120,200 C160,140 240,140 280,200" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M500,200 C550,120 650,120 700,200" strokeWidth="1" />
          <path d="M520,200 C560,140 640,140 680,200" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Javanese Kawung geometric cluster */}
          <ellipse cx="400" cy="180" rx="45" ry="22" strokeWidth="1" />
          <ellipse cx="400" cy="180" rx="22" ry="45" strokeWidth="1" />
          <circle cx="400" cy="180" r="5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative space-y-16">
        
        {/* Philosophy Intro: Dual Traditions */}
        <div className="philosophy-combined bg-[#FDFBF7] rounded-3xl p-8 lg:p-12 border border-[#E6DFD5] shadow-sm">
          {/* Interactive motif explorer, unified with the philosophy introduction */}
          <div id="motif-explorer" className="philosophy-explorer">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#2B2523] tracking-tight not-italic">
                Filosofi, Sejarah &amp; Relevansi Momen
              </h3>
            </div>
            
            <button
              onClick={() => setShowCareModal(true)}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#2B2523] hover:text-[#C85A32] bg-[#F5F0EB] px-4 py-2 rounded-full border border-[#E6DFD5] transition shadow-sm w-fit cursor-pointer font-sans"
            >
              <Icon icon="ph:shield-check-duotone" className="text-base text-[#C85A32]" />
              <span>Panduan Merawat Kain</span>
            </button>
          </div>

          {/* Motif Selector Tabs - Clean Editorial Numbering (01, 02, 03, 04), Zero Emojis */}
          <div className="flex flex-wrap gap-2.5 mb-8" role="tablist">
            {MOTIFS.map(motif => {
              const isSelected = selectedMotif.id === motif.id;
              return (
                <button
                  key={motif.id}  
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedMotif(motif)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all flex items-center gap-2.5 border cursor-pointer font-sans ${
                    isSelected
                      ? 'bg-[#1B263B] text-white border-[#1B263B] shadow-sm'
                      : 'bg-[#F5F0EB] text-[#2B2523] border-[#E6DFD5] hover:border-[#C85A32]/60'
                  }`}
                >
                  <span>{motif.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Motif Display: History, Philosophy, and Moment Relevance */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMotif.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#F5F0EB] rounded-2xl p-6 lg:p-8 border border-[#E6DFD5]"
            >
              
              {/* Left Column: Origin & Meaning */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#C85A32] mb-1 font-sans">
                    <Icon icon="ph:map-pin-duotone" className="text-base" />
                    <span>Asal-usul: {selectedMotif.origin}</span>
                  </div>
                  <h4 className="font-serif font-bold text-3xl text-[#2B2523] mb-1 leading-snug not-italic">
                    {selectedMotif.name}
                  </h4>
                  <div className="text-xs text-stone-600 font-sans not-italic">
                    {selectedMotif.tagline}
                  </div>
                </div>

                {/* Sejarah & Asal-usul */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#2B2523] flex items-center gap-1.5 font-sans">
                    <Icon icon="ph:clock-counter-clockwise-duotone" className="text-sm text-[#C85A32]" />
                    <span>Asal-usul &amp; Latar Sejarah</span>
                  </h5>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans not-italic">
                    {selectedMotif.history}
                  </p>
                </div>

                {/* Makna Filosofis */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#2B2523] flex items-center gap-1.5 font-sans">
                    <Icon icon="ph:heart-duotone" className="text-sm text-[#C85A32]" />
                    <span>Makna Filosofis Simbolik</span>
                  </h5>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans not-italic">
                    {selectedMotif.philosophy}
                  </p>
                </div>

                {/* Contextual Guidance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="bg-[#FDFBF7] rounded-xl p-5 border border-[#E6DFD5] space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2B2523] flex items-center gap-1.5 font-sans">
                      <Icon icon="ph:calendar-check-duotone" className="text-base text-[#C85A32]" />
                      <span>Relevansi Momen Pemberian</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-sans not-italic">
                      {selectedMotif.momentRelevance}
                    </p>
                  </div>

                  <div className="bg-[#FDFBF7] rounded-xl p-5 border border-[#E6DFD5] space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2B2523] flex items-center gap-1.5 font-sans">
                      <Icon icon="ph:hand-heart-duotone" className="text-base text-[#C85A32]" />
                      <span>Rekomendasi Gaya Lipatan</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-sans not-italic">
                      {selectedMotif.furoshikiPairing}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Fabric Visual */}
              <div className="lg:col-span-5 min-h-[320px] lg:min-h-0">
                <div className="h-full min-h-[320px] rounded-xl overflow-hidden border border-[#E6DFD5] bg-[#FDFBF7]">
                  <img
                    src={selectedMotif.image}
                    alt={`Pola batik ${selectedMotif.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          </div>
        </div>

        {/* Section: Tentang Usaha (ID: tentang) */}
        <div id="tentang" className="bg-[#FDFBF7] rounded-3xl p-8 lg:p-12 border border-[#E6DFD5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif font-bold text-4xl sm:text-5xl text-[#2B2523] leading-tight tracking-tight not-italic">
                Misi <span className="text-[#C85A32] font-bold">BHAPTIK</span>: Menghidupkan Batik dalam Keseharian Berkelanjutan
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-sans not-italic">
                BHAPTIK lahir dari kepedulian terhadap tumpukan kantong plastik sekali pakai dan memudarnya pemahaman generasi muda tentang filosofi batik. Melalui seni lipat Furoshiki, selembar kain batik tidak lagi hanya tersimpan di lemari untuk acara formal, melainkan hadir menjadi tas jinjing fleksibel, pembungkus bekal santai, dan bingkisan kado yang menghangatkan silaturahmi.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-stone-700 font-sans">
                <div className="flex items-center gap-1.5">
                  <Icon icon="ph:check" className="text-base text-[#C85A32]" />
                  <span>Tekstil 100% Rayon Selulosa Alami</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icon icon="ph:check" className="text-base text-[#C85A32]" />
                  <span>Dukungan Pengrajin Batik Lokal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icon icon="ph:check" className="text-base text-[#C85A32]" />
                  <span>Edukasi Simpul Mandiri Gratis</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E6DFD5] aspect-[4/3] relative bg-[#F5F0EB]">
                <img
                  src="/images/hero-bag.jpg"
                  alt="Kain BHAPTIK Furoshiki dalam penggunaan harian"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Care Guide Modal */}
      <AnimatePresence>
        {showCareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCareModal(false)}
              className="fixed inset-0 bg-[#1B263B]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#FDFBF7] rounded-2xl p-6 border border-[#E6DFD5] shadow-xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-3">
                <div className="flex items-center gap-2">
                  <Icon icon="ph:shield-check-duotone" className="text-xl text-[#C85A32]" />
                  <h4 className="font-serif font-bold text-2xl text-[#2B2523] not-italic">
                    Panduan Merawat Kain Furoshiki Batik
                  </h4>
                </div>
                <button
                  onClick={() => setShowCareModal(false)}
                  className="p-1.5 text-stone-600 hover:text-[#2B2523] rounded-full cursor-pointer font-sans"
                  aria-label="Tutup"
                >
                  <Icon icon="ph:x-bold" className="text-lg" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-stone-700 leading-relaxed font-sans not-italic">
                <div className="flex gap-2.5">
                  <span className="font-bold text-[#C85A32]">1.</span>
                  <p><strong>Pencucian:</strong> Cuci dengan tangan menggunakan air dingin bersama sabun lerak atau detergen lembut. Hindari pemutih klorin.</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="font-bold text-[#C85A32]">2.</span>
                  <p><strong>Pengeringan:</strong> Jangan diperas kencang. Cukup ditekan pelan lalu diangin-anginkan di tempat teduh tanpa paparan terik matahari langsung.</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="font-bold text-[#C85A32]">3.</span>
                  <p><strong>Penyetrikaan:</strong> Gunakan suhu sedang (mode sutra/rayon) dengan melapisi kain katun tipis di atasnya untuk melindungi serat kain.</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E6DFD5] flex justify-end">
                <button
                  onClick={() => setShowCareModal(false)}
                  className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#C85A32] hover:bg-[#A84420] transition shadow-sm cursor-pointer font-sans"
                >
                  Saya Mengerti
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
