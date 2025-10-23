'use server';

import AdminsRepository from '@/lib/repositories/AdminsRepository';
import { generateToken } from '@/lib/auth/auth';
import { setAuthCookie, deleteAuthCookie } from '@/lib/auth/cookies';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

// POST - Login
export async function login(formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username || !password) {
      return { success: false, error: 'Kullanıcı adı ve şifre gerekli.' };
    }

    // Find admin
    const admin = await AdminsRepository.findByUsername(username);
    if (!admin) {
      return { success: false, error: 'Kullanıcı adı veya şifre hatalı.' };
    }

    // Verify password
    const isValid = await AdminsRepository.verifyPassword(password, admin.PasswordHash);
    if (!isValid) {
      return { success: false, error: 'Kullanıcı adı veya şifre hatalı.' };
    }

    // Generate token
    const token = await generateToken({
      username: admin.Username,
      role: 'admin',
    });

    // Set cookie
    await setAuthCookie(token);

    // Redirect to admin
    redirect('/admin');
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Giriş yapılamadı.' };
  }
}

// POST - Register
export async function register(formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const passwordRepeat = formData.get('passwordRepeat') as string;
    const secretKey = formData.get('secretKey') as string;

    // Validation
    if (!username || !password || !passwordRepeat || !secretKey) {
      return { success: false, error: 'Tüm alanlar zorunludur.' };
    }

    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return { success: false, error: 'Geçersiz secret key.' };
    }

    if (password !== passwordRepeat) {
      return { success: false, error: 'Şifreler aynı olmalı.' };
    }

    // Check if username exists
    const existing = await AdminsRepository.findByUsername(username);
    if (existing) {
      return { success: false, error: 'Bu kullanıcı adı zaten kullanılıyor.' };
    }

    // Create admin
    await AdminsRepository.create({ Username: username, Password: password });

    return { success: true, message: 'Admin başarıyla kaydedildi. Giriş yapabilirsiniz.' };
  } catch (error) {
    console.error('Register error:', error);
    return { success: false, error: 'Kayıt olunamadı.' };
  }
}

// POST - Logout
export async function logout() {
  await deleteAuthCookie();
  revalidatePath('/');
  redirect('/auth/login');
}

