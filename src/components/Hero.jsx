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
      <div className="hero-frame max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="hero-copy lg:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.08 }}
          >

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-[#2B2523] leading-[1.04] tracking-wide not-italic"
            >
              <span className="hero-title__line">Timeless</span>
              <span className="hero-title__line hero-accent heritage-display">Heritage</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hero-intro text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl font-sans not-italic"
            >
              Lebih dari sekadar pembungkus, Furoshiki menghormati benda dan alam melalui kain yang digunakan berulang kali. Batik melengkapinya dengan doa, keteguhan, dan harapan baik dalam setiap guratan canting.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hero-actions pt-2 flex flex-wrap items-center gap-3"
            >
              <a href="#tutorial" onClick={onStartTutorial} className="button-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C85A32] text-white font-medium text-sm hover:bg-[#A84420] transition-colors shadow-sm cursor-pointer">
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
                src="/images/batik-spread.jpg"
                alt="Bentangan helai kain batik furoshiki BHAPTIK 70x70 cm"
                className="w-full h-full object-cover card-zoom-img"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
