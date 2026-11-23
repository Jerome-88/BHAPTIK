import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({ onStartTutorial }) {
  return (
    <section className="hero-section relative overflow-hidden py-12 lg:py-20" id="hero">
      {/* Subtle Javanese Batik Kawung Vector Accent */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.08]" aria-hidden="true">
        <svg
          className="absolute -top-12 -left-12 w-[420px] h-[420px] text-[#C85A32]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          <g strokeWidth="1.2">
            <ellipse cx="100" cy="60" rx="35" ry="18" />
            <ellipse cx="100" cy="140" rx="35" ry="18" />
            <ellipse cx="60" cy="100" rx="18" ry="35" />
            <ellipse cx="140" cy="100" rx="18" ry="35" />
            <ellipse cx="100" cy="60" rx="20" ry="10" strokeDasharray="2 2" strokeWidth="0.8" />
            <ellipse cx="100" cy="140" rx="20" ry="10" strokeDasharray="2 2" strokeWidth="0.8" />
            <ellipse cx="60" cy="100" rx="10" ry="20" strokeDasharray="2 2" strokeWidth="0.8" />
            <ellipse cx="140" cy="100" rx="10" ry="20" strokeDasharray="2 2" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="8" fill="currentColor" fillOpacity="0.2" />
            <circle cx="100" cy="100" r="3" fill="currentColor" />
          </g>
        </svg>
      </div>
      <div className="hero-frame max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="hero-copy lg:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.08 }}
          >

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/20 text-[#C85A32] text-xs font-semibold tracking-wider uppercase font-sans"
            >
              <Icon icon="ph:sparkle-fill" className="text-xs" />
              <span>Furoshiki Bermotif Batik × Jepang</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#2B2523] leading-[1.12] tracking-tight not-italic"
            >
              Satu Kain, <br className="hidden sm:inline" />
              <span className="text-[#C85A32] italic font-serif">Banyak Gaya.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hero-intro text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl font-sans not-italic"
            >
              Mampir, pegang bahannya, dan coba ikat sendiri. Selembar kain serbaguna yang luwes bertransformasi menjadi tas jinjing, wadah bekal, aksesoris, hingga hantaran hadiah—menghormati alam tanpa kantong plastik sekali pakai.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hero-actions pt-2 flex flex-wrap items-center gap-3"
            >
              <a href="#koleksi" className="button-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C85A32] text-white font-medium text-sm hover:bg-[#A84420] transition-colors shadow-sm cursor-pointer">
                <Icon icon="ph:tag-bold" className="text-base" />
                <span>Lihat Koleksi &amp; Harga</span>
              </a>
              <a href="#tutorial" onClick={onStartTutorial} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F5F0EB] text-[#2B2523] border border-[#E6DFD5] font-medium text-sm hover:bg-[#EAE4DC] hover:border-[#C85A32]/60 transition-colors shadow-sm cursor-pointer">
                <span>Eksplorasi Gaya Lipatan</span>
                <Icon icon="ph:arrow-right-bold" className="text-base" />
              </a>
            </motion.div>

          </motion.div>

          <motion.div
            className="hero-visual hero-visual--single lg:col-span-5 relative"
            initial={{ opacity: 0, x: 34, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="hero-fabric relative group overflow-hidden border border-[#E6DFD5] bg-[#F5F0EB]"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <img
                src="/images/tas.jpg"
                alt="Tas jinjing Furoshiki batik BHAPTIK motif Gelora (Parang × Nami)"
                className="w-full h-full object-cover card-zoom-img"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
