'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const menuItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünler', href: '/urunler' },
  { label: 'Blog', href: '/blog' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen, isMounted]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Top Contact Bar - Hidden on Mobile */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-white py-2 px-4 hidden md:block"
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:05542597273" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <PhoneIcon fontSize="small" />
              <span>0 (554) 259 72 73</span>
            </a>
            <a 
              href="mailto:tokatyonelotoyedekparca@gmail.com" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <EmailIcon fontSize="small" />
              <span>tokatyonelotoyedekparca@gmail.com</span>
            </a>
          </div>
          <span className="font-semibold">Hemen İletişime Geç</span>
        </div>
      </motion.div>

      {/* Main Navbar - Glassmorphism Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="block">
                <div className="relative h-16 md:h-20 w-32 md:w-52">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Yönel Oto Yedek Parça Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    sizes="(max-width: 768px) 140px, 220px"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-primary hover:bg-primary/5'
                        : 'text-white hover:text-yellow-300 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button - Hamburger */}
            <button
              onClick={handleDrawerToggle}
              className={`md:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center rounded-lg transition-all ${
                isScrolled
                  ? 'hover:bg-gray-100'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-6 rounded-full transition-colors ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block h-0.5 w-6 rounded-full transition-colors ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-6 rounded-full transition-colors ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMounted && mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                onClick={handleDrawerToggle}
                style={{ zIndex: 40 }}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl md:hidden"
                style={{ zIndex: 50 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Menü</h2>
                  <button
                    onClick={handleDrawerToggle}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="p-6 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleDrawerToggle}
                        className="block px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-primary/5 hover:text-primary transition-all"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    İletişim
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:05542597273"
                      className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <PhoneIcon className="text-primary" fontSize="small" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Telefon</div>
                        <div className="text-sm font-bold text-gray-900">0 (554) 259 72 73</div>
                      </div>
                    </a>
                    <a
                      href="mailto:tokatyonelotoyedekparca@gmail.com"
                      className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <EmailIcon className="text-blue-600" fontSize="small" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">E-posta</div>
                        <div className="text-xs font-bold text-gray-900">tokatyoneloto@gmail.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-0 md:h-8" />
    </>
  );
}

