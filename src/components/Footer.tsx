'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#a80000',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 700 }}>
              YÖNEL OTO YEDEK PARÇA
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
              50+ yıllık tecrübe ile Foton traktör, Iveco Daily, Karataş traktör yedek parçaları
              ve Mutlu akü satışında Türkiye'nin güvenilir adresi.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Hızlı Linkler
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                • Ana Sayfa
              </Link>
              <Link href="/urunler" style={{ color: 'white', textDecoration: 'none' }}>
                • Ürünler
              </Link>
              <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>
                • Blog
              </Link>
              <Link href="/hakkimizda" style={{ color: 'white', textDecoration: 'none' }}>
                • Hakkımızda
              </Link>
              <Link href="/iletisim" style={{ color: 'white', textDecoration: 'none' }}>
                • İletişim
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              İletişim
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'white' }}>
                📞 0 (554) 259 72 73
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                <a href="mailto:tokatyonelotoyedekparca@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                  📧 tokatyonelotoyedekparca@gmail.com
                </a>
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                🕒 Pzt-Cmt: 08:00 - 18:00
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'white' }}>
            © {new Date().getFullYear()} Yönel Oto Yedek Parça. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

