'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const menuItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünler', href: '/products' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'İletişim', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
      {/* Mobile Logo */}
      <Box sx={{ position: 'relative', width: '100%', height: 120, borderBottom: '1.5px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src="/assets/logo.jpg" alt="Yönel Oto Logo" fill style={{ objectFit: 'cover' }} />
        <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <CloseIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>
      <List sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} href={item.href} onClick={handleDrawerToggle} sx={{ justifyContent: 'center' }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 18, fontWeight: 700, textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
            maxWidth: '100vw',
            bgcolor: '#fff',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            boxShadow: '0 8px 32px 0 rgba(25,118,210,0.10)',
            minHeight: '60vh',
            maxHeight: '100vh',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

