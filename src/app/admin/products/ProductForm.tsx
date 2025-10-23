'use client';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Category } from '@/lib/models/Category';
import { Product } from '@/lib/models/Product';
import { createProduct, updateProduct } from './actions';
import CloudinaryUpload from '@/components/CloudinaryUpload';

interface Props {
  categories: Category[];
  product?: Product;
}

export default function ProductForm({ categories, product }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState(product?.ImageUrl || '');
  const [cloudinaryPublicId, setCloudinaryPublicId] = useState(product?.CloudinaryPublicId || '');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    formData.append('imageUrl', imageUrl);
    formData.append('cloudinaryPublicId', cloudinaryPublicId);

    const result = product
      ? await updateProduct(product.Id, formData)
      : await createProduct(formData);

    setLoading(false);

    if (result.success) {
      alert(result.message);
      router.push('/admin/products');
    } else {
      setError(result.error || 'İşlem başarısız');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Box sx={{ mb: 2, p: 2, bgcolor: 'error.light', color: 'error.contrastText', borderRadius: 1 }}>
          {error}
        </Box>
      )}

      <TextField
        fullWidth
        label="Ürün Adı"
        name="name"
        required
        defaultValue={product?.Name}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Açıklama"
        name="description"
        multiline
        rows={4}
        defaultValue={product?.Description}
        sx={{ mb: 3 }}
      />

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Kategori</InputLabel>
        <Select name="categoryId" defaultValue={product?.CategoryId || ''} label="Kategori">
          <MenuItem value="">Seçiniz</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.Id} value={cat.Id}>
              {cat.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Alt Kategori</InputLabel>
        <Select name="subCategoryId" defaultValue={product?.SubCategoryId || ''} label="Alt Kategori">
          <MenuItem value="">Seçiniz</MenuItem>
          {categories.flatMap((cat) => cat.SubCategories || []).map((sub) => (
            <MenuItem key={sub.Id} value={sub.Id}>
              {sub.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Cloudinary Upload */}
      <CloudinaryUpload
        currentImageUrl={imageUrl}
        onUploadSuccess={(url, publicId) => {
          setImageUrl(url);
          setCloudinaryPublicId(publicId);
        }}
      />

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? 'Kaydediliyor...' : product ? 'Güncelle' : 'Kaydet'}
        </Button>
        <Button variant="outlined" onClick={() => router.push('/admin/products')}>
          İptal
        </Button>
      </Box>
    </form>
  );
}

