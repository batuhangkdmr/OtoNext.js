# 🚗 Yönel Oto Yedek Parça - Next.js Full Stack

**API'siz, tam Next.js uygulaması!** Aura benzeri mimari ile MSSQL veritabanı entegrasyonu.

## 🎯 Özellikler

### 🌐 Frontend
- **Ana Sayfa:** SSR ile dinamik içerik (slider, öne çıkan ürünler)
- **Ürünler:** Filtreleme, arama, pagination
- **Ürün Detay:** SEO uyumlu ürün sayfaları
- **Hakkımızda & İletişim:** Statik bilgi sayfaları

### 🔐 Admin Panel
- **Giriş/Kayıt:** JWT + Cookie based authentication
- **Ürün Yönetimi:** CRUD işlemleri
- **Kategori Yönetimi:** Hiyerarşik kategori sistemi
- **Slider Yönetimi:** Ana sayfa slider görselleri
- **Cloudinary:** Görsel yükleme entegrasyonu

### 🏗️ Mimari
- **Framework:** Next.js 14 (App Router)
- **Server Actions:** API YOK! Direkt server-side fonksiyonlar
- **Database:** MSSQL (Repository Pattern)
- **Auth:** JWT (jose) + HTTP-only Cookies
- **Styling:** Tailwind CSS
- **Image Upload:** Cloudinary
- **Deployment:** Vercel (Serverless)

## 📋 Gereksinimler

- Node.js 18+
- MSSQL Server 2019+
- Cloudinary hesabı

## 🚀 Kurulum

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Environment Variables

`.env.local` dosyası oluştur:

```env
# Database
DB_SERVER=YOUR-SERVER
DB_NAME=DB_SERVER=YOUR-SERVER
DB_USER=DB_SERVER=YOUR-SERVER
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_jwt_secret
JWT_ISSUER=https:DB_SERVER=YOUR-ISSUER
JWT_AUDIENCE=https:DB_SERVER=YOUR-AUDIENVE

# Admin
ADMIN_SECRET_KEY=your_secret

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=905*********
```

### 3. Development

```bash
npm run dev
```

### 4. Production Build

```bash
npm run build
npm start
```

## 📁 Proje Yapısı

```
yonel-nextjs/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # Public pages
│   │   ├── admin/                # Protected admin pages
│   │   ├── auth/                 # Login/Register + Server Actions
│   │   ├── layout.tsx
│   │   └── page.tsx              # Home (SSR)
│   ├── lib/
│   │   ├── auth/                 # JWT + Cookies
│   │   ├── models/               # TypeScript interfaces
│   │   ├── repositories/         # MSSQL Repository Pattern
│   │   └── db.ts                 # Connection Pool
│   ├── components/               # React Components
│   └── middleware.ts             # Route Protection
└── package.json
```

## 🔄 Mimari Akış

```
User Request
    ↓
Next.js Page (SSR)
    ↓
Server Action ('use server')
    ↓
Repository (MSSQL Connection Pool)
    ↓
MSSQL Database
```

**NOT:** Geleneksel REST API YOK! Her şey Next.js Server Actions ile.

## 🌐 Vercel Deployment

### 1. GitHub'a Push

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercel'e Bağla

- Vercel Dashboard → New Project
- Repository seç
- Environment variables ekle
- Deploy!

### 3. Custom Domain

Vercel panelinde custom domain ekle:
- `www.yonelotoyedekparca.com`
- DNS ayarları: CNAME → `cname.vercel-dns.com`

## ⚠️ Önemli Notlar

### MSSQL Connection
- Vercel serverless olduğu için connection pool her request'te yeniden oluşur
- Düşük trafik (<500/gün) için sorunsuz çalışır
- Yüksek trafikte connection leak riski var

### Alternatifler
- **Yüksek Trafik:** Render.com ($7/ay) always-on server
- **Orta Trafik:** Railway.app ($5/ay credit)

## 📝 Lisans

Private - Yönel Oto Yedek Parça © 2025

