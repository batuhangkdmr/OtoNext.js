'use server';

import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import { revalidatePath } from 'next/cache';

// GET - All categories
export async function getCategories() {
  try {
    const categories = await CategoriesRepository.findAll();
    return { success: true, data: categories };
  } catch (error) {
    console.error('Kategoriler getirme hatası:', error);
    return { success: false, error: 'Kategoriler getirilemedi' };
  }
}

// GET - Single category
export async function getCategory(id: number) {
  try {
    const category = await CategoriesRepository.findById(id);
    if (!category) {
      return { success: false, error: 'Kategori bulunamadı' };
    }
    return { success: true, data: category };
  } catch (error) {
    console.error('Kategori getirme hatası:', error);
    return { success: false, error: 'Kategori getirilemedi' };
  }
}

// POST - Create category
export async function createCategory(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const parentId = formData.get('parentId') as string;

    if (!name) {
      return { success: false, error: 'Kategori adı gerekli' };
    }

    await CategoriesRepository.create({
      Name: name,
      ParentId: parentId ? parseInt(parentId) : undefined,
    });

    revalidatePath('/admin/categories');
    revalidatePath('/products');

    return { success: true, message: 'Kategori başarıyla oluşturuldu!' };
  } catch (error) {
    console.error('Kategori oluşturma hatası:', error);
    return { success: false, error: 'Kategori oluşturulamadı' };
  }
}

// PUT - Update category
export async function updateCategory(id: number, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const parentId = formData.get('parentId') as string;

    await CategoriesRepository.update(id, {
      Name: name || undefined,
      ParentId: parentId ? parseInt(parentId) : undefined,
    });

    revalidatePath('/admin/categories');
    revalidatePath('/products');

    return { success: true, message: 'Kategori başarıyla güncellendi!' };
  } catch (error) {
    console.error('Kategori güncelleme hatası:', error);
    return { success: false, error: 'Kategori güncellenemedi' };
  }
}

// DELETE - Delete category
export async function deleteCategory(id: number) {
  try {
    const result = await CategoriesRepository.delete(id);
    if (!result.success) {
      return { success: false, error: result.error || 'Kategori silinemedi' };
    }

    revalidatePath('/admin/categories');
    revalidatePath('/products');

    return { success: true, message: 'Kategori başarıyla silindi!' };
  } catch (error) {
    console.error('Kategori silme hatası:', error);
    return { success: false, error: 'Kategori silinemedi' };
  }
}

