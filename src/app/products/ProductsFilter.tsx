'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import { Category } from '@/lib/models/Category';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { slugify } from '@/lib/utils/slugify';

interface Props {
  categories: Category[];
  activeCategory?: Category | null;
  onClose?: () => void; // Drawer'ı kapatma callback'i
}

export default function ProductsFilter({ categories, activeCategory, onClose }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  // Aktif filtre var mı kontrolü
  const hasActiveFilters = searchParams.get('search') || activeCategory;

  const handleCategoryClick = (categoryId: number) => {
    setOpenCategories((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

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

  const handleCategoryFilter = (category?: Category) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');
    
    let url = '/urunler';
    if (category) {
      // Alt kategori mi yoksa ana kategori mi kontrol et
      const parentCat = findParentCategory(category);
      
      if (parentCat) {
        // Alt kategori ise: /urunler/parent-slug/sub-slug
        url += `/${slugify(parentCat.Name)}/${slugify(category.Name)}`;
      } else {
        // Ana kategori ise: /urunler/parent-slug
        url += `/${slugify(category.Name)}`;
      }
    }
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    router.push(url);
    
    // Mobil drawer'ı kapat
    if (onClose) {
      onClose();
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    
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
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    router.push(url);
    
    // Mobil drawer'ı kapat
    if (onClose) {
      onClose();
    }
  };

  // Tüm filtreleri temizle
  const clearAllFilters = () => {
    setSearchTerm('');
    router.push('/urunler');
    
    // Mobil drawer'ı kapat
    if (onClose) {
      onClose();
    }
  };

  // Tek bir filtreyi kaldır
  const removeFilter = (filterType: 'search' | 'category') => {
    if (filterType === 'search') {
      setSearchTerm('');
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
      router.push(url);
    } else if (filterType === 'category') {
      const params = new URLSearchParams();
      if (searchParams.get('search')) {
        params.set('search', searchParams.get('search')!);
      }
      const url = params.toString() ? `/urunler?${params.toString()}` : '/urunler';
      router.push(url);
    }
    
    // Mobil drawer'ı kapat
    if (onClose) {
      onClose();
    }
  };

  return (
    <Paper sx={{ p: 2, position: 'sticky', top: 20 }}>
      {/* Aktif Filtreler */}
      {hasActiveFilters && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#a80000' }}>
              Aktif Filtreler
            </Typography>
            <Button
              size="small"
              startIcon={<FilterListOffIcon />}
              onClick={clearAllFilters}
              sx={{ fontSize: '0.75rem' }}
            >
              Temizle
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {searchParams.get('search') && (
              <Chip
                label={`Arama: "${searchParams.get('search')}"`}
                onDelete={() => removeFilter('search')}
                color="primary"
                size="small"
              />
            )}
            {activeCategory && (
              <Chip
                label={`Kategori: ${activeCategory.Name}`}
                onDelete={() => removeFilter('category')}
                color="primary"
                size="small"
              />
            )}
          </Box>
        </Box>
      )}

      {/* Search */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Arama
      </Typography>
      <form onSubmit={handleSearch}>
        <TextField
          fullWidth
          size="small"
          placeholder="Ürün ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: searchTerm && (
              <ClearIcon
                sx={{ cursor: 'pointer', color: 'action.active' }}
                onClick={() => {
                  setSearchTerm('');
                  removeFilter('search');
                }}
              />
            ),
          }}
          sx={{ mb: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          startIcon={<SearchIcon />}
          sx={{ mb: 3 }}
        >
          Ara
        </Button>
      </form>

      {/* Categories */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Kategoriler
      </Typography>
      <List component="nav">
        <ListItemButton
          onClick={() => handleCategoryFilter()}
          selected={!activeCategory}
          sx={{
            '&.Mui-selected': {
              bgcolor: '#a80000',
              color: 'white',
              '&:hover': { bgcolor: '#8b0000' },
            },
          }}
        >
          <ListItemText primary="Tüm Ürünler" />
        </ListItemButton>
        {categories.map((category) => {
          const isCategoryActive = activeCategory?.Id === category.Id;
          return (
            <div key={category.Id}>
              <ListItemButton
                onClick={() =>
                  category.SubCategories && category.SubCategories.length > 0
                    ? handleCategoryClick(category.Id)
                    : handleCategoryFilter(category)
                }
                selected={isCategoryActive}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: '#a80000',
                    color: 'white',
                    '&:hover': { bgcolor: '#8b0000' },
                  },
                }}
              >
                <ListItemText primary={category.Name} />
                {category.SubCategories && category.SubCategories.length > 0 && (
                  <>{openCategories[category.Id] ? <ExpandLess /> : <ExpandMore />}</>
                )}
              </ListItemButton>
              {category.SubCategories && category.SubCategories.length > 0 && (
                <Collapse in={openCategories[category.Id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {category.SubCategories.map((sub) => {
                      const isSubActive = activeCategory?.Id === sub.Id;
                      return (
                        <ListItemButton
                          key={sub.Id}
                          sx={{
                            pl: 4,
                            '&.Mui-selected': {
                              bgcolor: '#a80000',
                              color: 'white',
                              '&:hover': { bgcolor: '#8b0000' },
                            },
                          }}
                          selected={isSubActive}
                          onClick={() => handleCategoryFilter(sub)}
                        >
                          <ListItemText primary={sub.Name} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </Paper>
  );
}

