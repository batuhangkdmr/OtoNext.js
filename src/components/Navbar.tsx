'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const menuItems = [
  { 
    label: 'Ana Sayfa', 
    href: '/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  { 
    label: 'Ürünler', 
    href: '/products',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  { 
    label: 'Hakkımızda', 
    href: '/about',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    )
  },
  { 
    label: 'İletişim', 
    href: '/contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <Box sx={{ bgcolor: '#a80000', color: 'white', py: 1, display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">0 (554) 259 72 73</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2" component="a" href="mailto:tokatyonelotoyedekparca@gmail.com" sx={{ color: 'inherit', textDecoration: 'none' }}>
                  tokatyonelotoyedekparca@gmail.com
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2">Hemen İletişime Geç</Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black' }} elevation={2}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 80, md: 92 } }}>
            {/* Logo - Optimized for performance */}
            <Box sx={{ mr: { xs: 0, md: 4 }, flexShrink: 0 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 64, sm: 85, md: 120 },
                    width: { xs: 140, sm: 200, md: 260 },
                  }}
                >
                  <Image
                    src="/assets/logo.jpg"
                    alt="Yönel Oto Yedek Parça Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, 260px"
                  />
                </Box>
              </Link>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{ color: 'black', '&:hover': { color: '#a80000' } }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Modern Hamburger Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <button
                onClick={handleDrawerToggle}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-all hover:bg-gray-100 active:scale-95"
                aria-label="Toggle menu"
              >
                <span className="block h-0.5 w-6 rounded-full bg-gray-800" />
                <span className="block h-0.5 w-6 rounded-full bg-gray-800" />
                <span className="block h-0.5 w-6 rounded-full bg-gray-800" />
              </button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Bottom Sheet Menu (Instagram Style) */}
      {mobileOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden"
            onClick={handleDrawerToggle}
            style={{
              animation: 'fadeIn 0.3s ease-out',
            }}
          />

          {/* Bottom Sheet Content - Slides from Bottom */}
          <div
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl md:hidden"
            style={{
              animation: 'slideUp 0.3s ease-out',
            }}
          >
            {/* Handle Bar (Swipe Indicator) */}
            <div className="flex justify-center pb-3 pt-4">
              <div className="h-1 w-12 rounded-full bg-gray-300" />
            </div>

            {/* Header with Close Button */}
            <div className="flex items-center justify-between px-6 pb-4">
              <h2 className="text-lg font-bold text-gray-800">Menü</h2>
              <button
                onClick={handleDrawerToggle}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all hover:bg-gray-200 active:scale-95"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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

            {/* Navigation Links Grid */}
            <nav className="grid grid-cols-2 gap-3 px-6 pb-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleDrawerToggle}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center transition-all hover:shadow-lg active:scale-95"
                  style={{
                    animation: `scaleIn 0.3s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {/* Icon Circle with Custom Icon */}
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm text-red-600 transition-all group-hover:bg-red-50 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="block text-sm font-semibold text-gray-800 transition-colors group-hover:text-red-600">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-6 my-2 border-t border-gray-200" />

            {/* Contact Cards */}
            <div className="px-6 pb-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                İletişim
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:05542597273"
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 p-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <PhoneIcon className="text-red-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-600">Telefon</span>
                    <span className="text-sm font-bold text-gray-800">0 (554) 259 72 73</span>
                  </div>
                </a>
                <a
                  href="mailto:tokatyonelotoyedekparca@gmail.com"
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <EmailIcon className="text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-600">E-posta</span>
                    <span className="text-sm font-bold text-gray-800">Email Gönder</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Safe Area for iOS */}
            <div className="h-6" />
          </div>

          {/* Custom CSS Animations */}
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideUp {
              from {
                transform: translateY(100%);
              }
              to {
                transform: translateY(0);
              }
            }
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </>
      )}
    </>
  );
}

