import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function QRModal({ isOpen, onClose, onSelectTutorialByName }) {
  const [scanning, setScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);

  if (!isOpen) return null;

  const sampleFabrics = [
    {
      id: 'kain-1',
      name: 'Kain Furoshiki Kawung 70cm',
      serial: 'BHP-KWNG-7026',
      origin: 'Solo - Kasunanan Surakarta',
      material: 'Katun Rayon Viscose (Jahit Neci Wolsum)',
      recommendedTutorial: 'Tas Jinjing Bulat',
      icon: 'ph:flower-tulip-duotone'
    },
    {
      id: 'kain-2',
      name: 'Kain Furoshiki Parang 70cm',
      serial: 'BHP-PRNG-7089',
      origin: 'Yogyakarta Hadiningrat',
      material: 'Katun Rayon Viscose (Jahit Neci Wolsum)',
      recommendedTutorial: 'Carrier Botol Artistik',
      icon: 'ph:wave-sine-duotone'
    }
  ];

  const handleSimulateScan = (fabric) => {
    setScanning(true);
    setScannedResult(null);
    setTimeout(() => {
      setScanning(false);
      setScannedResult(fabric);
    }, 900);
  };

  const handleReset = () => {
    setScannedResult(null);
    setScanning(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
        className="relative w-full max-w-md bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-[#E6DFD5] shadow-xl z-10 space-y-5"
      >
        <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F5F0EB] text-[#C85A32] flex items-center justify-center border border-[#E6DFD5]">
              <Icon icon="ph:qr-code-duotone" className="text-lg" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-[#2B2523] not-italic leading-tight">
                Simulasi Smart Woven Label
              </h3>
              <p className="text-[11px] text-stone-600">
                Pindai label tenun QR pada sudut kain BHAPTIK
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-600 hover:text-[#2B2523] rounded-full transition cursor-pointer"
            aria-label="Tutup"
          >
            <Icon icon="ph:x-bold" className="text-lg" />
          </button>
        </div>

        {/* Viewfinder Simulator */}
        {!scannedResult ? (
          <div className="space-y-4">
            <div className="relative w-full h-44 rounded-xl bg-[#1B263B] overflow-hidden border border-[#E6DFD5] flex flex-col items-center justify-center text-white">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#C85A32]" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#C85A32]" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#C85A32]" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#C85A32]" />

              {/* Scanning indicator */}
              {scanning ? (
                <div className="text-center space-y-2">
                  <div className="w-6 h-6 border-2 border-[#C85A32] border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs text-[#E6DFD5] font-medium tracking-wide">
                    Membaca tag tenun...
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-1.5 px-6">
                  <Icon icon="ph:scan-duotone" className="text-3xl text-[#C85A32] mx-auto opacity-80" />
                  <p className="text-xs text-[#E6DFD5]/90 font-medium">
                    Arahkan kamera ke label tenun di sudut kain
                  </p>
                  <p className="text-[10px] text-[#E6DFD5]/60">
                    Atau klik sampel kain di bawah untuk simulasi langsung
                  </p>
                </div>
              )}
            </div>

            {/* Quick Simulation Options */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-600 block">
                Simulasi Deteksi Kain:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {sampleFabrics.map((fabric) => (
                  <button
                    key={fabric.id}
                    disabled={scanning}
                    onClick={() => handleSimulateScan(fabric)}
                    className="p-3 bg-[#F5F0EB] hover:bg-[#EAE4DC] border border-[#E6DFD5] rounded-xl text-left transition flex items-center gap-2 group disabled:opacity-50 cursor-pointer"
                  >
                    <Icon icon={fabric.icon} className="text-lg text-[#C85A32] shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-medium text-[#2B2523] truncate">
                        {fabric.name}
                      </div>
                      <div className="text-[10px] text-stone-500 font-mono">
                        {fabric.serial}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Scanned Result View */
          <div className="space-y-4">
            <div className="p-4 bg-[#F5F0EB] rounded-xl border border-[#E6DFD5] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <Icon icon="ph:check-circle-duotone" className="text-base text-emerald-600" />
                  <span>Kain Otentik Terverifikasi</span>
                </div>
                <span className="text-[10px] font-mono text-stone-500">
                  {scannedResult.serial}
                </span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-2xl text-[#2B2523] not-italic leading-snug">
                  {scannedResult.name}
                </h4>
                <div className="text-xs text-stone-600">
                  Asal: {scannedResult.origin}
                </div>
                <div className="text-xs text-stone-600">
                  Material: {scannedResult.material}
                </div>
              </div>

              <div className="pt-2 border-t border-[#E6DFD5] text-xs">
                <span className="text-stone-500 block mb-1">Rekomendasi Simpul Utama:</span>
                <span className="font-medium text-[#C85A32]">
                  {scannedResult.recommendedTutorial}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  onSelectTutorialByName(scannedResult.recommendedTutorial);
                  onClose();
                }}
                className="flex-1 py-2.5 px-4 rounded-full bg-[#C85A32] text-white text-xs font-medium hover:bg-[#A84420] transition shadow-sm text-center cursor-pointer"
              >
                Buka Panduan Lipatan
              </button>
              <button
                onClick={handleReset}
                className="py-2.5 px-3.5 rounded-full bg-[#F5F0EB] text-[#2B2523] border border-[#E6DFD5] hover:bg-[#EAE4DC] text-xs transition cursor-pointer"
                title="Pindai Ulang"
              >
                <Icon icon="ph:arrow-counter-clockwise-bold" className="text-sm" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
