'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Split menu items - Left and Right
const leftMenuItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünler', href: '/urunler' },
];

const rightMenuItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function CenterLogoNavbar() {
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
      {/* Top Contact Bar - Hidden on Scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-primary text-white"
          >
            {/* Desktop Version */}
            <div className="hidden lg:block py-2 px-4">
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
                <span className="font-semibold">50+ Yıllık Tecrübe</span>
              </div>
            </div>

            {/* Mobile Version - Compact */}
            <div className="lg:hidden py-1.5 px-4">
              <div className="container mx-auto flex justify-between items-center text-xs">
                <a href="tel:05542597273" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
                  <PhoneIcon sx={{ fontSize: 14 }} />
                  <span className="font-semibold">0554 259 72 73</span>
                </a>
                <span className="font-semibold">50+ Yıl</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar - Center Logo Design */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`sticky left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
          isScrolled
            ? 'bg-white/98 shadow-xl border-b border-gray-200/60 top-0'
            : 'bg-white/85 shadow-md border-b border-gray-100/40 top-[30px] lg:top-0'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-center h-20 lg:h-24">
            {/* Left Menu - Desktop Only */}
            <div className="hidden lg:flex items-center gap-8 mr-12">
              {leftMenuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 font-semibold text-base tracking-wide transition-all duration-300 group ${
                      isScrolled
                        ? 'text-gray-800 hover:text-primary'
                        : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="block">
                <div className="relative h-16 lg:h-24 w-40 lg:w-56">
                  <Image
                    src="/assets/logo1.png"
                    alt="Yönel Oto Yedek Parça"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    sizes="(max-width: 1024px) 160px, 224px"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Right Menu - Desktop Only */}
            <div className="hidden lg:flex items-center gap-8 ml-12">
              {rightMenuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 font-semibold text-base tracking-wide transition-all duration-300 group ${
                      isScrolled
                        ? 'text-gray-800 hover:text-primary'
                        : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleDrawerToggle}
              className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center rounded-lg transition-all hover:bg-gray-100 ml-auto"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded-full bg-gray-800"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 rounded-full bg-gray-800"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded-full bg-gray-800"
              />
            </button>
          </div>
        </div>
      </motion.nav>

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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={handleDrawerToggle}
            />

            {/* Menu Panel - Full Screen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 flex items-center justify-center lg:hidden z-50 p-4"
              onClick={handleDrawerToggle}
            >
              <div 
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={handleDrawerToggle}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-8 pt-4">
                  <div className="relative h-20 w-48">
                    <Image
                      src="/assets/logo1.png"
                      alt="Yönel Oto"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="space-y-2">
                  {[...leftMenuItems, ...rightMenuItems].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleDrawerToggle}
                        className="block px-6 py-4 rounded-xl text-gray-800 font-semibold text-lg hover:bg-primary/5 hover:text-primary transition-all text-center"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                  <a
                    href="tel:05542597273"
                    className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-red-50 rounded-xl hover:shadow-md transition-all"
                  >
                    <PhoneIcon className="text-primary" />
                    <span className="font-bold text-gray-900">0 (554) 259 72 73</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}

