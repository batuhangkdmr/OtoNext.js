'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter, useSearchParams } from 'next/navigation';
import SortIcon from '@mui/icons-material/Sort';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ProductsFilter from './ProductsFilter';
import { Category } from '@/lib/models/Category';
import { slugify } from '@/lib/utils/slugify';

interface Props {
  categories: Category[];
  activeCategory?: Category | null;
}

export default function ProductsToolbar({ categories, activeCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const currentSort = searchParams.get('sort') || 'newest';
  const currentLimit = searchParams.get('limit') || '12';

  // Bir kategorinin parent'ını bul
  const findParentCategory = (category: Category): Category | null => {
    for (const cat of categories) {
      if (cat.SubCategories) {
        for (const sub of cat.SubCategories) {
          if (sub.Id === category.Id) {
            return cat;
          }
        }
      }
    }
    return null;
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    params.delete('page'); // Reset to first page
    
    let url = '/urunler';
    if (activeCategory) {
      const parentCat = findParentCategory(activeCategory);
      
      if (parentCat) {
        // Alt kategori ise: /urunler/parent-slug/sub-slug
        url += `/${slugify(parentCat.Name)}/${slugify(activeCategory.Name)}`;
      } else {
        // Ana kategori ise: /urunler/parent-slug
        url += `/${slugify(activeCategory.Name)}`;
      }
    }
    url += `?${params.toString()}`;
    
    router.push(url);
  };

  const handleLimitChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', value);
    params.delete('page'); // Reset to first page
    
    let url = '/urunler';
    if (activeCategory) {
      const parentCat = findParentCategory(activeCategory);
      
      if (parentCat) {
        // Alt kategori ise: /urunler/parent-slug/sub-slug
        url += `/${slugify(parentCat.Name)}/${slugify(activeCategory.Name)}`;
      } else {
        // Ana kategori ise: /urunler/parent-slug
        url += `/${slugify(activeCategory.Name)}`;
      }
    }
    url += `?${params.toString()}`;
    
    router.push(url);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mb: 3,
        }}
      >
        {/* Mobile Filter Button - Üstte */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={() => setDrawerOpen(true)}
            fullWidth
            sx={{
              borderColor: '#a80000',
              color: '#a80000',
              fontWeight: 600,
              py: 1.5,
              '&:hover': {
                borderColor: '#8b0000',
                bgcolor: '#fff5f5',
              },
            }}
          >
            FİLTRELE
          </Button>
        </Box>

        {/* Sıralama ve Göster - Altta */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          {/* Sıralama */}
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="sort-label">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <SortIcon fontSize="small" />
                Sırala
              </Box>
            </InputLabel>
            <Select
              labelId="sort-label"
              value={currentSort}
              label="Sırala"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <MenuItem value="newest">En Yeni</MenuItem>
              <MenuItem value="oldest">En Eski</MenuItem>
              <MenuItem value="name-asc">İsim (A-Z)</MenuItem>
              <MenuItem value="name-desc">İsim (Z-A)</MenuItem>
            </Select>
          </FormControl>

          {/* Sayfa Başına Ürün Sayısı */}
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="limit-label">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ViewModuleIcon fontSize="small" />
                Göster
              </Box>
            </InputLabel>
            <Select
              labelId="limit-label"
              value={currentLimit}
              label="Göster"
              onChange={(e) => handleLimitChange(e.target.value)}
            >
              <MenuItem value="12">12 Ürün</MenuItem>
              <MenuItem value="24">24 Ürün</MenuItem>
              <MenuItem value="48">48 Ürün</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '85%',
            maxWidth: 360,
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
            bgcolor: '#a80000',
            color: 'white',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Filtreler
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer Content */}
        <Box sx={{ p: 2 }}>
          <ProductsFilter categories={categories} activeCategory={activeCategory} onClose={() => setDrawerOpen(false)} />
        </Box>
      </Drawer>
    </>
  );
}

