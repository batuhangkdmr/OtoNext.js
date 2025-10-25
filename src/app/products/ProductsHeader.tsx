'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProductsHeader() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
        Ürünlerimiz
      </Typography>
    </Box>
  );
}

