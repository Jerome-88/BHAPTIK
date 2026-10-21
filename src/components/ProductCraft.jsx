import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export default function ProductCraft() {
  const craftFeatures = [
    {
      icon: 'ph:bounding-box-duotone',
      title: 'Dimensi Presisi 70 × 70 cm',
      subtitle: 'Standar Serbaguna Bujur Sangkar',
      description:
        'Ukuran standar dalam tradisi pelipatan kain. Proporsi bujur sangkar simetris yang pas untuk membawa botol, buku, atau dijadikan tas jinjing harian tanpa kelebihan sisa kain yang mengganjal.',
      badge: 'Bujur Sangkar Simetris'
    },
    {
      icon: 'ph:drop-half',
      title: 'Katun Rayon Viscose Premium',
      subtitle: 'Karakter Lemas, Dingin & Jatuh Anggun',
      description:
        'Dipilih secara cermat karena kelembutan serat alaminya yang luwes dan sejuk. Kain memiliki daya jatuh (drape) anggun dan sangat mudah disimpul erat tanpa menimbulkan bekas lipatan kaku.',
      badge: 'Serat Selulosa Alami'
    },
    {
      icon: 'ph:scissors-duotone',
      title: 'Tepian Jahit Neci / Wolsum',
      subtitle: 'Finishing Tepi 4 Sisi Berkerapatan Tinggi',
      description:
        'Keempat sisi diselesaikan dengan jahitan neci (wolsum) halus. Mengunci serat tepi kain dengan rapat agar tidak terurai walau disimpul, dibuka, dan dicuci berulang kali.',
      badge: 'Finishing Presisi'
    },
    {
      icon: 'ph:qr-code-duotone',
      title: 'Smart Woven Label QR Code',
      subtitle: 'Label Tenun Digital Terintegrasi',
      description:
        'Disematkan label tenun mikro yang halus di salah satu sudut dalam kain. Kode QR terintegrasi menghubungkan Anda langsung ke tutorial langkah demi langkah di ponsel tanpa aplikasi tambahan.',
      badge: 'Digital Heritage'
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#F5F0EB]/60 border-t border-[#E6DFD5] overflow-hidden" id="spesifikasi">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#2B2523] leading-tight tracking-tight not-italic">
            Anatomi Kain <span className="text-[#C85A32] font-bold">BHAPTIK</span>: Dirancang untuk Keluwesan Simpul
          </h2>
          <p className="mt-4 text-base text-stone-700 leading-relaxed font-sans not-italic">
            Tidak semua kain cocok untuk teknik lipatan Furoshiki. BHAPTIK memadukan keluhuran motif batik Nusantara dengan material katun rayon viscose pilihan yang memiliki kelenturan mekanis ideal saat disimpul berulang kali.
          </p>
        </motion.div>

        {/* Main Content Layout: Features + Realistic Physical Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Grid: 4 Core Specifications */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {craftFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={reveal}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#FDFBF7] rounded-2xl p-6 border border-[#E6DFD5] shadow-sm flex flex-col justify-between hover:border-[#C85A32]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F0EB] text-[#C85A32] flex items-center justify-center border border-[#E6DFD5]">
                      <Icon icon={feat.icon} className="text-xl" />
                    </div>
                    <span className="text-[11px] font-medium text-stone-600 bg-[#F5F0EB] px-2.5 py-0.5 rounded-full border border-[#E6DFD5] font-sans">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#2B2523] mb-1 leading-snug not-italic">
                    {feat.title}
                  </h3>
                  <div className="text-xs font-medium text-[#C85A32] mb-3 font-sans not-italic">
                    {feat.subtitle}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans not-italic">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Visual: Realistic Product Craft Photography */}
          <motion.div
            className="lg:col-span-5 space-y-5"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.16 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >

            {/* Primary Visual Card: Fabric Spread Detail */}
            <div className="bg-[#FDFBF7] rounded-2xl p-5 border border-[#E6DFD5] shadow-sm">
              <div className="relative rounded-xl overflow-hidden border border-[#E6DFD5] aspect-[4/3] bg-[#F5F0EB]">
                <img
                  src="/images/batik-spread.jpg"
                  alt="Detail fisik kain katun rayon viscose dan jahit neci BHAPTIK"
                  className="w-full h-full object-cover card-zoom-img"
                />
              </div>

              {/* Physical Properties Table */}
              <div className="mt-5 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-stone-500 font-medium">Bahan Baku</span>
                  <span className="font-semibold text-[#2B2523]">Katun Rayon Viscose 100%</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-stone-500 font-medium">Dimensi Kain</span>
                  <span className="font-semibold text-[#2B2523]">70 × 70 cm Presisi</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-stone-500 font-medium">Finishing Tepian</span>
                  <span className="font-semibold text-[#2B2523]">Jahit Neci / Wolsum Rapi 4 Sisi</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-stone-500 font-medium">Tag Panduan</span>
                  <span className="font-semibold text-[#2B2523]">Smart Woven Label QR Code</span>
                </div>
              </div>
            </div>

            {/* Cultural Note Pill */}
            <div className="bg-[#FDFBF7] rounded-xl p-4 border border-[#E6DFD5] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#F5F0EB] text-[#C85A32] shrink-0 border border-[#E6DFD5]">
                <Icon icon="ph:info-duotone" className="text-lg" />
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                <strong className="text-[#2B2523]">Kearifan Nol Sampah (Mottainai):</strong> ,<br className="" />Helai kain BHAPTIK dapat digunakan berulang kali seumur hidup, menggantikan pemakaian ratusan kantong plastik sekali pakai.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
