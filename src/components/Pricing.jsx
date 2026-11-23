import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export const PRODUCTS = [
  {
    id: 'mekar',
    name: 'Mekar',
    subtitle: 'Kawung × Sakura',
    sizeCode: 'S',
    dimension: '47 × 47 cm',
    price: 'Rp 39.000',
    character: 'Kain Kompak Serbaguna',
    patternImage: '/images/sakura.jpg',
    tiedImage: '/images/bandana.jpg',
    description:
      'Ukuran ringkas yang luwes dibawa ke mana saja. Bebas Anda simpul menjadi apa pun—mulai dari bandana rambut, syal leher, pembungkus kotak kado kecil, wadah buah & camilan, saputangan saku, hingga pouch serut darurat.',
    sampleUses: ['Bandana Rambut', 'Syal Leher', 'Bungkus Kado Mini', 'Botol Kecil', 'Pouch Serut'],
    waMessage: 'Halo BHAPtik, saya mau pesan kain Furoshiki varian Mekar (Ukuran S 47x47cm - Rp 39.000)'
  },
  {
    id: 'kelana',
    name: 'Kelana',
    subtitle: 'Mega Mendung × Tsuru',
    sizeCode: 'M',
    dimension: '72 × 72 cm',
    price: 'Rp 59.000',
    character: 'Ukuran Tradisional Furoshiki',
    patternImage: '/images/burung.jpg',
    tiedImage: '/images/burung - bento.png',
    description:
      'Proporsi klasik Furoshiki yang paling fleksibel untuk segala rutinitas harian. Bebas disimpul menjadi pembungkus kotak bekal bento, tas jinjing sedang, pelindung buku karya, hantaran kado berkesan, hingga selendang bahu.',
    sampleUses: ['Kotak Bekal Bento', 'Tas Jinjing Sedang', 'Bungkus Kado Buku', 'Carrier Tumbler', 'Selendang Bahu'],
    waMessage: 'Halo BHAPtik, saya mau pesan kain Furoshiki varian Kelana (Ukuran M 72x72cm - Rp 59.000)'
  },
  {
    id: 'gelora',
    name: 'Gelora',
    subtitle: 'Parang × Nami',
    sizeCode: 'L',
    dimension: '96 × 96 cm',
    price: 'Rp 89.000',
    character: 'Helai Lapang Berkapasitas Ekstra',
    patternImage: '/images/ombak.jpg',
    tiedImage: '/images/tas.jpg',
    description:
      'Helai bervolume maksimal untuk memuat benda-benda berukuran lebih besar. Langsung bertransformasi menjadi tas jinjing belanja harian (Shizuku-tsutsumi), tas ransel darurat, alas santai, hingga penutup barang yang elegan.',
    sampleUses: ['Tas Belanja Besar', 'Tas Jinjing Harian', 'Ransel Darurat', 'Parsel Hantaran', 'Alas Santai'],
    waMessage: 'Halo BHAPtik, saya mau pesan kain Furoshiki varian Gelora (Ukuran L 96x96cm - Rp 89.000)'
  }
];

export default function Pricing() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FDFBF7] border-t border-[#E6DFD5] overflow-hidden" id="koleksi">
      {/* Subtle Javanese Batik Kawung Vector Accent */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06]" aria-hidden="true">
        <svg
          className="absolute -left-16 top-1/3 w-[450px] h-[450px] text-[#C85A32]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          <g strokeWidth="1.2">
            <ellipse cx="100" cy="60" rx="35" ry="18" />
            <ellipse cx="100" cy="140" rx="35" ry="18" />
            <ellipse cx="60" cy="100" rx="18" ry="35" />
            <ellipse cx="140" cy="100" rx="18" ry="35" />
            <circle cx="100" cy="100" r="7" fill="currentColor" fillOpacity="0.25" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] font-sans inline-block mb-3">
            Katalog Edisi · Batik × Jepang
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#2B2523] leading-tight tracking-tight not-italic">
            Tiga Ukuran, <span className="text-[#C85A32] italic font-serif">Fleksibilitas Tanpa Batas</span>
          </h2>
          <p className="mt-4 text-base text-stone-700 leading-relaxed font-sans not-italic">
            Dalam seni Furoshiki, selembar kain tidak pernah terpaku pada satu fungsi. Setiap ukuran—dari S hingga L—bebas Anda bentuk menjadi tas, pembungkus bekal, hantaran kado, hingga aksesoris pakaian. Bentuknya hidup mengikuti apa pun yang ingin Anda bawa.
          </p>
        </motion.div>

        {/* 3-Column Atelier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={reveal}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-[#E6DFD5] hover:border-[#C85A32]/60 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Visual Image Showcase with Tied Preview Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE4DC] border border-[#E6DFD5] mb-6">
                  <img
                    src={prod.patternImage}
                    alt={`Bentangan corak kain ${prod.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Tied preview overlay thumbnail */}
                  <div className="absolute bottom-3 right-3 w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-md bg-white">
                    <img
                      src={prod.tiedImage}
                      alt={`Contoh bentuk ${prod.name}`}
                      className="w-full h-full object-cover"
                      title="Contoh salah satu kreasi simpul"
                    />
                  </div>

                  {/* Size Pill */}
                  <div className="absolute top-3 left-3 bg-[#1B263B]/90 backdrop-blur-sm text-[#FDFBF7] text-xs font-semibold px-3 py-1 rounded-full border border-white/10 font-sans">
                    Size {prod.sizeCode} ({prod.dimension})
                  </div>
                </div>

                {/* Identity & Character */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif font-bold text-3xl text-[#2B2523] not-italic">
                      {prod.name}
                    </h3>
                    <span className="text-xs font-medium text-[#C85A32] font-sans">
                      {prod.subtitle}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-stone-500 font-sans mb-3">
                    {prod.character}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans not-italic">
                    {prod.description}
                  </p>
                </div>

                {/* Versatility Tags */}
                <div className="mb-6 pt-3 border-t border-[#E6DFD5]">
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2 font-sans">
                    Bisa Dibentuk Menjadi:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {prod.sampleUses.map((use, uIdx) => (
                      <span
                        key={uIdx}
                        className="text-[11px] text-[#2B2523] bg-[#F5F0EB] px-2.5 py-1 rounded-md border border-[#E6DFD5] font-sans"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Purchase Action */}
              <div className="pt-4 border-t border-[#E6DFD5] space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-500 font-sans">Harga per helai</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif font-bold text-3xl text-[#2B2523] tracking-tight">
                      {prod.price}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6281317883988?text=${encodeURIComponent(prod.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full font-medium text-xs sm:text-sm bg-[#1B263B] text-white hover:bg-[#C85A32] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Icon icon="ph:whatsapp-logo-bold" className="text-base text-emerald-400" />
                  <span>Pesan Varian {prod.name}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
