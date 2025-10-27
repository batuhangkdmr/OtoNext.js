'use client';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { SliderImage } from '@/lib/models/SliderImage';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSliderImage, updateSliderImage, deleteSliderImage } from './actions';
import CloudinaryUpload from '@/components/CloudinaryUpload';
import Image from 'next/image';

interface Props {
  sliders: SliderImage[];
}

interface SliderFormData {
  id?: number;
  imageUrl: string;
  cloudinaryPublicId: string;
}

export default function SlidersTable({ sliders }: Props) {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<SliderFormData>({
    imageUrl: '',
    cloudinaryPublicId: '',
  });
  const [loading, setLoading] = useState(false);

  const handleOpenDialog = (slider?: SliderImage) => {
    if (slider) {
      setFormData({
        id: slider.Id,
        imageUrl: slider.ImageUrl,
        cloudinaryPublicId: slider.CloudinaryPublicId,
      });
    } else {
      setFormData({
        imageUrl: '',
        cloudinaryPublicId: '',
      });
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setFormData({
      imageUrl: '',
      cloudinaryPublicId: '',
    });
  };

  const handleImageUpload = (url: string, publicId: string) => {
    setFormData({
      ...formData,
      imageUrl: url,
      cloudinaryPublicId: publicId,
    });
  };

  const handleSubmit = async () => {
    if (!formData.imageUrl || !formData.cloudinaryPublicId) {
      alert('Lütfen bir görsel yükleyin!');
      return;
    }

    setLoading(true);

    const formDataObj = new FormData();
    formDataObj.append('imageUrl', formData.imageUrl);
    formDataObj.append('cloudinaryPublicId', formData.cloudinaryPublicId);

    const result = formData.id
      ? await updateSliderImage(formData.id, formDataObj)
      : await createSliderImage(formDataObj);

    setLoading(false);

    if (result.success) {
      alert(result.message);
      handleCloseDialog();
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu slider görselini silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz!')) {
      return;
    }

    setLoading(true);
    const result = await deleteSliderImage(id);
    setLoading(false);

    if (result.success) {
      alert(result.message);
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  return (
    <>
      {/* Add Slider Button */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<AddPhotoAlternateIcon />}
          onClick={() => handleOpenDialog()}
          disabled={loading}
          sx={{
            bgcolor: '#dc2626',
            '&:hover': { bgcolor: '#b91c1c' },
          }}
        >
          Yeni Slider Görseli Ekle
        </Button>
      </Box>

      {/* Sliders Grid */}
      <Grid container spacing={3}>
        {sliders.length === 0 ? (
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                bgcolor: '#f9fafb',
                borderRadius: 2,
              }}
            >
              <AddPhotoAlternateIcon sx={{ fontSize: 64, color: '#9ca3af', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                Henüz slider görseli eklenmemiş
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Yeni görsel eklemek için yukarıdaki butona tıklayın
              </Typography>
            </Box>
          </Grid>
        ) : (
          sliders.map((slider) => (
            <Grid item key={slider.Id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box sx={{ position: 'relative', paddingTop: '56.25%', bgcolor: '#f3f4f6' }}>
                  <Image
                    src={slider.ImageUrl}
                    alt={`Slider ${slider.Id}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                    ID: {slider.Id}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                    Public ID: {slider.CloudinaryPublicId}
                  </Typography>
                  {slider.CreatedAt && (
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                      Oluşturulma: {new Date(slider.CreatedAt).toLocaleDateString('tr-TR')}
                    </Typography>
                  )}
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
                  <IconButton
                    onClick={() => handleOpenDialog(slider)}
                    disabled={loading}
                    sx={{
                      color: '#3b82f6',
                      '&:hover': { bgcolor: '#dbeafe' },
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(slider.Id)}
                    disabled={loading}
                    sx={{
                      color: '#dc2626',
                      '&:hover': { bgcolor: '#fee2e2' },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Add/Edit Slider Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: '20px' }}>
          {formData.id ? 'Slider Görselini Düzenle' : 'Yeni Slider Görseli Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Ana sayfa slider'ı için görsel yükleyin. Önerilen boyut: 1920x600px
            </Typography>
            <CloudinaryUpload
              currentImageUrl={formData.imageUrl}
              onUploadSuccess={handleImageUpload}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDialog} disabled={loading}>
            İptal
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading || !formData.imageUrl}
            sx={{ bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}
          >
            {loading ? 'Kaydediliyor...' : 'Kaydet'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

