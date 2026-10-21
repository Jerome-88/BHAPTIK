import React from 'react';
import { Icon } from '@iconify/react';

export default function Footer() {
  const sections = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Spesifikasi Kain', href: '#spesifikasi' },
    { label: 'Tutorial Lipat', href: '#tutorial' },
    { label: 'Filosofi Batik', href: '#makna' },
    { label: 'Tentang BHAPTIK', href: '#tentang' },
  ];

  return (
    <footer className="bg-[#1B263B] text-[#E6DFD5] border-t border-[#233246]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-5">
            <a href="#hero" className="inline-flex" aria-label="Kembali ke beranda BHAPTIK">
              <img
                src="/images/logo.png"
                alt="BHAPTIK"
                className="h-11 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-sm text-[#E6DFD5]/70 leading-relaxed max-w-md">
              Perpaduan seni lipat Furoshiki dan batik Nusantara untuk membawa,
              membungkus, dan memberi dengan lebih bermakna.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#E9A37F]">
              <Icon icon="ph:plant-duotone" className="text-lg" />
              <span>Satu kain, berulang kali digunakan.</span>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Navigasi footer">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
              Jelajahi
            </h2>
            <ul className="space-y-3 text-sm text-[#E6DFD5]/70">
              {sections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="text-sm text-[#E6DFD5]/65 leading-relaxed mb-5">
              Punya pertanyaan, ide kolaborasi, atau ingin mengenal BHAPTIK lebih dekat?
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@bhaptik.id"
                className="flex items-center gap-3 text-sm text-[#E6DFD5]/80 hover:text-white transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#E9A37F]">
                  <Icon icon="ph:envelope-simple-duotone" className="text-lg" />
                </span>
                <span>hello@bhaptik.id</span>
              </a>
              <a
                href="https://instagram.com/bhaptik.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#E6DFD5]/80 hover:text-white transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#E9A37F]">
                  <Icon icon="ph:instagram-logo-duotone" className="text-lg" />
                </span>
                <span>@bhaptik.id</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#E6DFD5]/45">
          <p>© 2026 BHAPTIK. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat dengan hormat untuk kain dan budaya.</p>
        </div>
      </div>
    </footer>
  );
}
