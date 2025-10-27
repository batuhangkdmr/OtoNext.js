'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  currentImageUrl?: string;
  onUploadSuccess: (url: string, publicId: string) => void;
}

export default function CloudinaryUpload({ currentImageUrl, onUploadSuccess }: Props) {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(currentImageUrl || '');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Dosya boyutu kontrolü (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Resim boyutu 5MB\'dan küçük olmalıdır');
      return;
    }

    // Dosya türü kontrolü
    if (!file.type.startsWith('image/')) {
      alert('Lütfen geçerli bir resim dosyası seçin');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // Upload preset - Cloudinary dashboard'da oluşturulmalı (Settings > Upload > Upload presets)
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default';
      formData.append('upload_preset', uploadPreset);
      formData.append('folder', 'yonel-products');

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      
      if (!cloudName) {
        throw new Error('Cloudinary ayarları eksik. NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME env değişkenini kontrol edin.');
      }

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'Cloudinary upload hatası');
      }

      if (data.secure_url) {
        setImageUrl(data.secure_url);
        onUploadSuccess(data.secure_url, data.public_id);
        alert('✅ Resim başarıyla yüklendi!');
      } else {
        throw new Error('Resim URL\'si alınamadı');
      }
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Resim yüklenirken hata oluştu';
      alert(`❌ Hata: ${errorMessage}\n\nÇözüm:\n1. Cloudinary hesabınızda "Upload Preset" oluşturun\n2. .env dosyanıza NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ekleyin\n3. Preset'i "Unsigned" olarak ayarlayın`);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setImageUrl('');
    onUploadSuccess('', '');
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
        Ürün Görseli
      </Typography>

      {imageUrl ? (
        <Box>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 400,
              height: 300,
              mb: 2,
              border: '1px solid #ddd',
              borderRadius: 1,
              overflow: 'hidden',
              bgcolor: '#f5f5f5',
            }}
          >
            <Image 
              src={imageUrl} 
              alt="Product" 
              fill 
              style={{ objectFit: 'contain' }}
              unoptimized={imageUrl.includes('cloudinary')}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUploadIcon />}
              disabled={uploading}
            >
              {uploading ? 'Değiştiriliyor...' : 'Görseli Değiştir'}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleRemove}
            >
              Görseli Kaldır
            </Button>
          </Box>
        </Box>
      ) : (
        <Button
          variant="outlined"
          component="label"
          startIcon={<CloudUploadIcon />}
          disabled={uploading}
        >
          {uploading ? 'Yükleniyor...' : 'Görsel Yükle'}
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
      )}
    </Box>
  );
}

