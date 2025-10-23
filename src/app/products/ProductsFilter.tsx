'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Category } from '@/lib/models/Category';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Props {
  categories: Category[];
}

export default function ProductsFilter({ categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const handleCategoryClick = (categoryId: number) => {
    setOpenCategories((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  const handleCategoryFilter = (categoryId?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      params.set('categoryId', categoryId.toString());
    } else {
      params.delete('categoryId');
    }
    params.delete('page');
    router.push(`/products?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    params.delete('page');
    router.push(`/products?${params.toString()}`);
  };

  return (
    <Paper sx={{ p: 2 }}>
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
          sx={{ mb: 3 }}
        />
      </form>

      {/* Categories */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Kategoriler
      </Typography>
      <List component="nav">
        <ListItemButton onClick={() => handleCategoryFilter()}>
          <ListItemText primary="Tüm Ürünler" />
        </ListItemButton>
        {categories.map((category) => (
          <div key={category.Id}>
            <ListItemButton
              onClick={() =>
                category.SubCategories && category.SubCategories.length > 0
                  ? handleCategoryClick(category.Id)
                  : handleCategoryFilter(category.Id)
              }
            >
              <ListItemText primary={category.Name} />
              {category.SubCategories && category.SubCategories.length > 0 && (
                <>{openCategories[category.Id] ? <ExpandLess /> : <ExpandMore />}</>
              )}
            </ListItemButton>
            {category.SubCategories && category.SubCategories.length > 0 && (
              <Collapse in={openCategories[category.Id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {category.SubCategories.map((sub) => (
                    <ListItemButton
                      key={sub.Id}
                      sx={{ pl: 4 }}
                      onClick={() => handleCategoryFilter(sub.Id)}
                    >
                      <ListItemText primary={sub.Name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Paper>
  );
}

