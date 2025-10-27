'use server';

import SliderImagesRepository from '@/lib/repositories/SliderImagesRepository';
import { revalidatePath } from 'next/cache';

// GET - All slider images
export async function getSliderImages() {
  try {
    const sliders = await SliderImagesRepository.findAll();
    return { success: true, data: sliders };
  } catch (error) {
    console.error('Slider görselleri getirme hatası:', error);
    return { success: false, error: 'Slider görselleri getirilemedi' };
  }
}

// POST - Create slider image
export async function createSliderImage(formData: FormData) {
  try {
    const imageUrl = formData.get('imageUrl') as string;
    const cloudinaryPublicId = formData.get('cloudinaryPublicId') as string;

    if (!imageUrl || !cloudinaryPublicId) {
      return { success: false, error: 'Resim URL ve Public ID gerekli' };
    }

    await SliderImagesRepository.create({
      ImageUrl: imageUrl,
      CloudinaryPublicId: cloudinaryPublicId,
    });

    revalidatePath('/admin/sliders');
    revalidatePath('/');

    return { success: true, message: 'Slider görseli başarıyla eklendi!' };
  } catch (error) {
    console.error('Slider görseli oluşturma hatası:', error);
    return { success: false, error: 'Slider görseli eklenemedi' };
  }
}

// PUT - Update slider image
export async function updateSliderImage(id: number, formData: FormData) {
  try {
    const imageUrl = formData.get('imageUrl') as string;
    const cloudinaryPublicId = formData.get('cloudinaryPublicId') as string;

    if (!imageUrl || !cloudinaryPublicId) {
      return { success: false, error: 'Resim URL ve Public ID gerekli' };
    }

    await SliderImagesRepository.update(id, {
      ImageUrl: imageUrl,
      CloudinaryPublicId: cloudinaryPublicId,
    });

    revalidatePath('/admin/sliders');
    revalidatePath('/');

    return { success: true, message: 'Slider görseli başarıyla güncellendi!' };
  } catch (error) {
    console.error('Slider görseli güncelleme hatası:', error);
    return { success: false, error: 'Slider görseli güncellenemedi' };
  }
}

// DELETE - Delete slider image
export async function deleteSliderImage(id: number) {
  try {
    console.log('Silme işlemi başlatıldı, ID:', id);
    
    // Önce slider'ı bulalım
    const slider = await SliderImagesRepository.findById(id);
    if (!slider) {
      console.error('Slider bulunamadı:', id);
      return { success: false, error: 'Slider görseli bulunamadı' };
    }

    console.log('Slider bulundu:', slider);

    // Veritabanından sil
    const success = await SliderImagesRepository.delete(id);
    if (!success) {
      console.error('Veritabanından silme başarısız:', id);
      return { success: false, error: 'Slider görseli veritabanından silinemedi' };
    }

    console.log('Veritabanından silindi:', id);

    revalidatePath('/admin/sliders');
    revalidatePath('/');

    return { success: true, message: 'Slider görseli başarıyla silindi!' };
  } catch (error: any) {
    console.error('Slider görseli silme hatası:', error);
    console.error('Hata detayı:', error?.message, error?.stack);
    return { 
      success: false, 
      error: `Slider görseli silinemedi: ${error?.message || 'Bilinmeyen hata'}` 
    };
  }
}

