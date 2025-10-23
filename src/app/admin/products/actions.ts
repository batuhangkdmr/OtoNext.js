'use server';

import ProductsRepository from '@/lib/repositories/ProductsRepository';
import { revalidatePath } from 'next/cache';

// GET - All products (with pagination and filters)
export async function getProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: number;
  subCategory?: string;
}) {
  try {
    const result = await ProductsRepository.findAll(params);
    return { success: true, data: result };
  } catch (error) {
    console.error('Products getirme hatası:', error);
    return { success: false, error: 'Ürünler getirilemedi' };
  }
}

// GET - Single product
export async function getProduct(id: number) {
  try {
    const product = await ProductsRepository.findById(id);
    if (!product) {
      return { success: false, error: 'Ürün bulunamadı' };
    }
    return { success: true, data: product };
  } catch (error) {
    console.error('Ürün getirme hatası:', error);
    return { success: false, error: 'Ürün getirilemedi' };
  }
}

// POST - Create product
export async function createProduct(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const categoryId = formData.get('categoryId') as string;
    const subCategoryId = formData.get('subCategoryId') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const cloudinaryPublicId = formData.get('cloudinaryPublicId') as string;

    if (!name) {
      return { success: false, error: 'Ürün adı gerekli' };
    }

    await ProductsRepository.create({
      Name: name,
      Description: description || undefined,
      ImageUrl: imageUrl || undefined,
      CloudinaryPublicId: cloudinaryPublicId || undefined,
      CategoryId: categoryId ? parseInt(categoryId) : undefined,
      SubCategoryId: subCategoryId ? parseInt(subCategoryId) : undefined,
    });

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');

    return { success: true, message: 'Ürün başarıyla oluşturuldu!' };
  } catch (error) {
    console.error('Ürün oluşturma hatası:', error);
    return { success: false, error: 'Ürün oluşturulamadı' };
  }
}

// PUT - Update product
export async function updateProduct(id: number, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const categoryId = formData.get('categoryId') as string;
    const subCategoryId = formData.get('subCategoryId') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const cloudinaryPublicId = formData.get('cloudinaryPublicId') as string;

    await ProductsRepository.update(id, {
      Name: name || undefined,
      Description: description || undefined,
      ImageUrl: imageUrl || undefined,
      CloudinaryPublicId: cloudinaryPublicId || undefined,
      CategoryId: categoryId ? parseInt(categoryId) : undefined,
      SubCategoryId: subCategoryId ? parseInt(subCategoryId) : undefined,
    });

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');

    return { success: true, message: 'Ürün başarıyla güncellendi!' };
  } catch (error) {
    console.error('Ürün güncelleme hatası:', error);
    return { success: false, error: 'Ürün güncellenemedi' };
  }
}

// DELETE - Delete product
export async function deleteProduct(id: number) {
  try {
    const success = await ProductsRepository.delete(id);
    if (!success) {
      return { success: false, error: 'Ürün bulunamadı' };
    }

    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');

    return { success: true, message: 'Ürün başarıyla silindi!' };
  } catch (error) {
    console.error('Ürün silme hatası:', error);
    return { success: false, error: 'Ürün silinemedi' };
  }
}

