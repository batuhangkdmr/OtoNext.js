# 🚀 Vercel Deployment Rehberi

## 📋 Ön Hazırlık

### 1. Environment Variables Hazırla

`.env.local` dosyası oluştur (local test için):

```env
# Database
DB_SERVER=104.247.167.194\\MSSQLSERVER2019
DB_NAME=yone8215_yoneltic_y
DB_USER=yone8215_yoneltic_y
DB_PASSWORD=yeiE2dve?m3!KzA2

# JWT
JWT_SECRET=dsd13r1sd1wdsawdqsd15w949w.dqw14123dwqsa244421
JWT_ISSUER=https://yonelotoyedekparca.com
JWT_AUDIENCE=https://yonelotoyedekparca.com

# Admin Secret Key
ADMIN_SECRET_KEY=yonel1.

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dhqdwiovd
CLOUDINARY_API_KEY=985332843956355
CLOUDINARY_API_SECRET=OYI8UH9Ufe_ljkvxGLm0Loa_rZ4

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=905542597273
```

### 2. Cloudinary Unsigned Upload Preset

Cloudinary Dashboard'da:
1. Settings → Upload → Add upload preset
2. Signing Mode: **Unsigned**
3. Preset Name: `ml_default`
4. Folder: `yonel-products`

---

## 🌐 Vercel'e Deploy

### Adım 1: GitHub'a Push

```bash
cd yonel-nextjs
git init
git add .
git commit -m "Initial Next.js deployment"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

### Adım 2: Vercel'e Bağla

1. https://vercel.com → Login
2. **New Project**
3. GitHub repository seç: `yonel-nextjs`
4. Framework Preset: **Next.js** (otomatik algılanır)
5. Root Directory: `./` (varsayılan)

### Adım 3: Environment Variables Ekle

Vercel Dashboard → Settings → Environment Variables

**Ekle (Her biri için):**
```
DB_SERVER=104.247.167.194\MSSQLSERVER2019
DB_NAME=yone8215_yoneltic_y
DB_USER=yone8215_yoneltic_y
DB_PASSWORD=yeiE2dve?m3!KzA2
JWT_SECRET=dsd13r1sd1wdsawdqsd15w949w.dqw14123dwqsa244421
JWT_ISSUER=https://yonelotoyedekparca.com
JWT_AUDIENCE=https://yonelotoyedekparca.com
ADMIN_SECRET_KEY=yonel1.
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dhqdwiovd
CLOUDINARY_API_KEY=985332843956355
CLOUDINARY_API_SECRET=OYI8UH9Ufe_ljkvxGLm0Loa_rZ4
NEXT_PUBLIC_WHATSAPP_NUMBER=905542597273
```

⚠️ **NOT:** Vercel'de backslash tek olmalı: `104.247.167.194\MSSQLSERVER2019`

### Adım 4: Deploy

**Deploy** butonuna tıkla! 🎉

---

## 🌍 Custom Domain Ekleme

### Adım 1: Vercel'de Domain Ekle

1. Vercel Project → Settings → Domains
2. **Add Domain:** `www.yonelotoyedekparca.com`
3. Vercel size DNS kayıtlarını gösterecek

### Adım 2: DNS Ayarları (Güzel.net)

Güzel.net DNS panelinde:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**A Record (opsiyonel - root domain için):**
```
Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)
TTL: 3600
```

### Adım 3: Bekle

DNS yayılması 5-30 dakika sürer.

---

## 🧪 Test

### 1. Local Test

```bash
npm install
npm run dev
```

http://localhost:3000 → Çalışmalı

### 2. Production Test

Deploy sonrası:

**Public Pages:**
- https://yonelotoyedekparca.com
- https://yonelotoyedekparca.com/products
- https://yonelotoyedekparca.com/products/1

**Admin:**
- https://yonelotoyedekparca.com/auth/login
- Username/Password ile giriş
- Products CRUD test et

---

## ⚠️ Önemli Notlar

### MSSQL Connection Pool

Vercel serverless olduğu için:
- Her request yeni connection açar
- **500'den az günlük ziyaretçi** için sorunsuz
- Yüksek trafikte connection leak riski var

### Alternatifler (Yüksek Trafik İçin)

**Render.com ($7/ay):**
- Always-on server
- Connection pool stabil
- Yüksek trafiğe hazır

**Railway.app ($5/ay):**
- Render alternatifi
- İlk $5 credit ücretsiz

---

## 🐛 Sorun Giderme

### Hata: "Database connection failed"

**Çözüm:**
1. Vercel environment variables kontrol et
2. `DB_SERVER` tek backslash olmalı: `IP\INSTANCE`
3. MSSQL firewall açık mı kontrol et

### Hata: "Middleware redirect loop"

**Çözüm:**
- Cookies çalışıyor mu kontrol et
- Browser cache temizle

### Hata: "Cloudinary upload failed"

**Çözüm:**
- Unsigned preset oluşturuldu mu?
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` doğru mu?

---

## 📝 Sonuç

✅ **Başarılı Deploy Sonrası:**
- Site: https://yonelotoyedekparca.com
- Admin: https://yonelotoyedekparca.com/auth/login
- API: Yok (Server Actions kullanılıyor)
- Database: MSSQL (Güzel.net)
- Images: Cloudinary
- Hosting: Vercel (Ücretsiz!)

🎉 **Tebrikler! Site canlıda!**

