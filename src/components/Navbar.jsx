import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Navbar({ onOpenQR, qrEnabled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tutorial Lipat', href: '#tutorial' },
    { label: 'Spesifikasi Produk', href: '#spesifikasi' },
    { label: 'Makna Batik', href: '#makna' },
    { label: 'Tentang Usaha', href: '#tentang' },
  ];

  return (
    <header className="site-header sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-[#E6DFD5] transition-colors">
      <div className="site-header__inner max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a
          href="#hero"
          className="brand-lockup flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/images/logo.png"
            alt="BHAPTIK Logo"
            className="brand-mark h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="site-nav hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="site-nav__link text-sm font-medium text-[#1B263B]/80 hover:text-[#C85A32] transition-colors duration-200 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {qrEnabled && (
            <button
              onClick={onOpenQR}
              className="header-qr inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-[#E6DFD5] bg-[#F5F0EB] text-[#2B2523] hover:border-[#C85A32] hover:text-[#C85A32] transition-all shadow-sm cursor-pointer"
            >
              <Icon icon="ph:qr-code-duotone" className="text-base text-[#C85A32]" />
              <span className="hidden sm:inline">Smart Label</span> QR
            </button>
          )}

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2B2523] hover:text-[#C85A32] transition"
            aria-label="Toggle Menu"
          >
            <Icon icon={mobileMenuOpen ? "ph:x-bold" : "ph:list-bold"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#E6DFD5] bg-[#FDFBF7] px-6 py-4 space-y-2"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[#1B263B] hover:text-[#C85A32] py-2 border-b border-[#E6DFD5]/50 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
