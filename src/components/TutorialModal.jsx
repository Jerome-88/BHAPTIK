import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';

export default function TutorialModal({ tutorial, onClose }) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [completed, setCompleted] = useState(false);

  if (!tutorial) return null;

  const totalSteps = tutorial.steps.length;
  const currentStep = tutorial.steps[currentStepIdx];
  const progressPercent = ((currentStepIdx + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStepIdx < totalSteps - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      setCompleted(true);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIdx(0);
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#1B263B]/60 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-2xl shadow-xl border border-[#E6DFD5] overflow-hidden z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#E6DFD5] flex items-center justify-between bg-[#F5F0EB]/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold text-[#C85A32] bg-[#FDFBF7] px-2.5 py-0.5 rounded-full border border-[#E6DFD5]">
                {tutorial.category}
              </span>
              <span className="text-xs text-stone-600">• {tutorial.clothSize}</span>
            </div>
            <h3 className="font-serif font-bold text-3xl text-[#2B2523] not-italic leading-snug">
              {tutorial.title}{' '}
              <span className="text-sm text-[#C85A32] font-sans font-medium not-italic">
                ({tutorial.japaneseTitle})
              </span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-600 hover:text-[#2B2523] hover:bg-[#EAE4DC] rounded-full transition cursor-pointer"
            aria-label="Tutup"
          >
            <Icon icon="ph:x-bold" className="text-lg" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E6DFD5] h-1">
          <motion.div
            className="bg-[#C85A32] h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            {!completed ? (
              <motion.div
                key={currentStepIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Image preview with strict aspect ratio */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#E6DFD5] bg-[#F5F0EB]">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B263B]/80 text-[#FDFBF7] text-xs font-medium px-3 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                    <span>Langkah</span>
                    <span className="text-[#C85A32] font-bold">{currentStep.number}</span>
                    <span>dari {totalSteps}</span>
                  </div>
                </div>

                {/* Step Instructions */}
                <div className="bg-[#F5F0EB] rounded-xl p-5 border border-[#E6DFD5]">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#C85A32] text-white flex items-center justify-center text-xs font-bold font-sans">
                      {currentStep.number}
                    </span>
                    <h4 className="font-serif font-bold text-2xl text-[#2B2523] not-italic">
                      {currentStep.title}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-700 pl-8 leading-relaxed font-sans not-italic">
                    {currentStep.detail}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                  <Icon icon="ph:check" className="text-3xl text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-3xl text-[#2B2523] not-italic mb-1">
                    Simpul Selesai dengan Anggun
                  </h4>
                  <p className="text-sm text-stone-700 max-w-md mx-auto leading-relaxed font-sans not-italic">
                    Anda telah menguasai gaya {tutorial.title} ({tutorial.japaneseTitle}). Kain batik Anda kini siap dibawa bepergian atau dihadiahkan dengan penuh ketulusan.
                  </p>
                </div>

                <div className="p-3 bg-[#F5F0EB] rounded-xl border border-[#E6DFD5] inline-flex items-center gap-2 text-xs font-medium text-[#2B2523] font-sans not-italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span>Kearifan Tradisi: Nol Sampah, Bernapas Sepanjang Hayat</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="p-5 border-t border-[#E6DFD5] bg-[#F5F0EB]/60 flex items-center justify-between gap-3">
          {!completed ? (
            <>
              <button
                onClick={handlePrev}
                disabled={currentStepIdx === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#2B2523] bg-[#FDFBF7] border border-[#E6DFD5] hover:bg-[#EAE4DC] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                <Icon icon="ph:arrow-left-bold" className="text-xs" />
                <span>Sebelumnya</span>
              </button>

              <div className="flex items-center gap-1.5">
                {tutorial.steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStepIdx(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentStepIdx
                        ? 'bg-[#C85A32] w-6'
                        : 'bg-[#E6DFD5] w-2 hover:bg-[#C85A32]/50'
                    }`}
                    aria-label={`Ke langkah ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium text-white bg-[#C85A32] hover:bg-[#A84420] transition shadow-sm cursor-pointer"
              >
                <span>{currentStepIdx === totalSteps - 1 ? 'Selesaikan' : 'Langkah Selanjutnya'}</span>
                <Icon icon="ph:arrow-right-bold" className="text-xs" />
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#2B2523] bg-[#FDFBF7] border border-[#E6DFD5] hover:bg-[#EAE4DC] transition cursor-pointer"
              >
                <Icon icon="ph:arrow-counter-clockwise-bold" className="text-xs" />
                <span>Ulangi Tutorial</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#C85A32] hover:bg-[#A84420] transition shadow-sm cursor-pointer"
              >
                Tutup Panduan
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
