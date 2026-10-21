import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { TUTORIALS, CATEGORIES } from '../data/tutorials';

export default function Tutorials({ onSelectTutorial }) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredTutorials = activeCategory === 'Semua'
    ? TUTORIALS
    : TUTORIALS.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-[#FDFBF7]" id="tutorial">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#2B2523] leading-tight tracking-tight not-italic">
              Pilih Gaya Lipatan <span className="text-[#C85A32] font-bold">Furoshiki</span>
            </h2>
            <p className="mt-2 text-sm text-stone-700 max-w-xl font-sans not-italic">
              Setiap bentuk simpul memiliki fungsi khas untuk kebutuhan harian. Klik salah satu gaya di bawah untuk membuka panduan langkah demi langkah.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Kategori Gaya Lipatan"
          >
            {CATEGORIES.map(category => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                      : 'bg-[#F5F0EB] text-[#2B2523] border-[#E6DFD5] hover:border-[#C85A32]/50 hover:bg-[#EAE4DC]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTutorials.map(tutorial => (
              <motion.div
                layout
                key={tutorial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-[#F5F0EB] rounded-2xl p-4 border border-[#E6DFD5] shadow-sm flex flex-col group hover:border-[#C85A32]/50 transition-colors"
              >
                {/* Media Container with strict aspect ratio */}
                <a
                  href={tutorial.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tonton video tutorial ${tutorial.title} di YouTube`}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FDFBF7] mb-4 cursor-pointer border border-[#E6DFD5]"
                >
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover card-zoom-img"
                  />

                  {/* Play / Step Preview Button */}
                  <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#FDFBF7]/90 text-[#C85A32] flex items-center justify-center shadow-sm opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <Icon icon="ph:play-fill" className="text-base ml-0.5" />
                  </div>

                  {/* Badge */}
                  {tutorial.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-[#1B263B]/80 text-[#FDFBF7] text-[10px] font-medium px-2 py-0.5 rounded border border-white/10">
                      {tutorial.badge}
                    </div>
                  )}
                </a>

                {/* Card Meta: Difficulty & Steps */}
                <div className="flex items-center gap-2 text-xs text-stone-600 mb-2">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                      tutorial.difficulty === 'Sangat Mudah'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : tutorial.difficulty === 'Mudah'
                        ? 'bg-emerald-50/70 text-emerald-800 border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    {tutorial.difficulty}
                  </span>
                  <span>•</span>
                  <span>{tutorial.stepsCount} Langkah</span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  onClick={() => onSelectTutorial(tutorial)}
                  className="font-serif font-bold text-2xl text-[#2B2523] mb-1 group-hover:text-[#C85A32] transition-colors cursor-pointer leading-snug not-italic"
                >
                  {tutorial.title}
                </h3>
                <div className="text-xs text-[#C85A32] mb-2 font-sans font-medium not-italic">
                  {tutorial.japaneseTitle}
                </div>

                <p className="text-xs text-stone-700 line-clamp-2 mb-4 leading-relaxed font-sans not-italic">
                  {tutorial.description}
                </p>

                {/* Card Action Footer */}
                <div className="mt-auto pt-3 border-t border-[#E6DFD5] flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">
                    {tutorial.clothSize}
                  </span>
                  <button
                    onClick={() => onSelectTutorial(tutorial)}
                    className="text-xs font-semibold text-[#C85A32] hover:text-[#A84420] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Buka Panduan</span>
                    <Icon icon="ph:arrow-right-bold" className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
