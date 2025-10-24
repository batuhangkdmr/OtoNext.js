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
    label: 'Blog', 
    href: '/blog',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
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
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black', zIndex: 1100 }} elevation={2}>
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'center' }}>
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
              {/* İletişim - Only on Desktop */}
              <Button
                component={Link}
                href="/contact"
                sx={{ color: 'black', '&:hover': { color: '#a80000' } }}
              >
                İletişim
              </Button>
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

      {/* Dropdown Menu (Top to Bottom) */}
      {mobileOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden"
            onClick={handleDrawerToggle}
            style={{
              animation: 'fadeIn 0.3s ease-out',
              zIndex: 1150,
            }}
          />

          {/* Menu Content - Slides from Top (Full Screen) */}
          <div
            className="fixed inset-0 flex flex-col bg-white md:hidden"
            style={{
              animation: 'slideDown 0.3s ease-out',
              zIndex: 1200,
            }}
          >
            {/* Header with Close Button */}
            <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-100 px-6 py-5">
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

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Navigation Links Grid */}
              <nav className="grid grid-cols-2 gap-3 p-6">
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
            </div>

            {/* Contact Cards Footer */}
            <div className="flex-shrink-0 border-t border-gray-100 bg-gray-50 px-6 py-4">
              <Link href="/contact" onClick={handleDrawerToggle}>
                <h3 className="mb-3 cursor-pointer text-xs font-semibold uppercase tracking-wider text-gray-500 transition-colors hover:text-red-600">
                  İletişim Sayfasına Gitmek İçin Tıklayınız →
                </h3>
              </Link>
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
                  href="https://www.google.com/maps/@40.3346533,36.5433212,3a,75y,0.92h,72.02t/data=!3m7!1e1!3m5!1sqCsKf6En5-dRJF7Jw9kEaw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.975763389466422%26panoid%3DqCsKf6En5-dRJF7Jw9kEaw%26yaw%3D0.9187446217123583!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-600">Konum</span>
                    <span className="text-sm font-bold text-gray-800">Haritada Görüntüle</span>
                  </div>
                </a>
              </div>
            </div>
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
            @keyframes slideDown {
              from {
                transform: translateY(-100%);
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

