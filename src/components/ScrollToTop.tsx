'use client';

import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: { xs: 96, md: 96 }, // WhatsApp butonunun üstünde (20px + 56px WhatsApp button + 20px gap)
          right: { xs: 20, md: 20 },
          bgcolor: '#a80000',
          color: 'white',
          '&:hover': {
            bgcolor: '#8b0000',
          },
          boxShadow: '0 4px 12px rgba(168, 0, 0, 0.3)',
          zIndex: 999, // WhatsApp butonundan (1000) biraz daha düşük
        }}
        aria-label="Üste dön"
        size="medium"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

