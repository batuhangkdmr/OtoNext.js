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

// DELETE - Delete slider image
export async function deleteSliderImage(id: number) {
  try {
    const success = await SliderImagesRepository.delete(id);
    if (!success) {
      return { success: false, error: 'Slider görseli bulunamadı' };
    }

    revalidatePath('/admin/sliders');
    revalidatePath('/');

    return { success: true, message: 'Slider görseli başarıyla silindi!' };
  } catch (error) {
    console.error('Slider görseli silme hatası:', error);
    return { success: false, error: 'Slider görseli silinemedi' };
  }
}

