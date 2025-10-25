# 🚀 GitHub & Vercel Deployment Rehberi
## yonelotoyedekparca.com

**GitHub Repository:** https://github.com/barisyonel/YonelTicaret  
**Deployment Hedef:** Vercel Production  
**Tarih:** 25 Ekim 2025

---

## 📋 ADIM ADIM DEPLOYMENT

### 1️⃣ **GitHub'a Yükleme**

#### Adım 1.1: Git Repository Kontrolü
```bash
cd /Users/mac/Desktop/_next

# Git repo var mı kontrol et
git status

# Eğer "not a git repository" hatası alırsanız:
git init
```

#### Adım 1.2: GitHub Remote Ekle
```bash
# Remote kontrol
git remote -v

# Eğer remote yoksa veya farklıysa:
git remote add origin https://github.com/barisyonel/YonelTicaret.git

# Veya mevcut remote'u güncelle:
git remote set-url origin https://github.com/barisyonel/YonelTicaret.git
```

#### Adım 1.3: .gitignore Kontrolü ✅
```bash
# .gitignore zaten mevcut ve doğru yapılandırılmış
# Şunlar GİTHUB'A YÜKLENMEYECEK:
✓ node_modules/
✓ .next/
✓ .env (hassas bilgiler)
✓ .vercel/
```

#### Adım 1.4: Git Add, Commit, Push
```bash
# 1. Mevcut branch'i kontrol et
git branch

# 2. Eğer main branch'de değilseniz:
git checkout -b main  # veya git branch -M main

# 3. Tüm dosyaları stage'e al
git add .

# 4. Commit yap
git commit -m "🚀 Production ready: SSL, SEO, Performance optimizations

✅ Added metadataBase for social media
✅ Created 404, error, loading pages
✅ Added Product Schema (SEO)
✅ Fixed category filtering bug
✅ Added subcategory display
✅ Updated navbar with Contact link
✅ Added 2 new slider images
✅ SSL & security headers configured
✅ Cleaned up unused files
✅ Updated sitemap to 2025-10-25
✅ All 23 pages building successfully

Ready for production deployment!"

# 5. GitHub'a push
git push -u origin main
```

**⚠️ NOT:** İlk push'ta GitHub credentials isteyebilir:
- Username: barisyonel
- Password: GitHub Personal Access Token (şifre değil!)

#### Adım 1.5: GitHub'da Kontrol
```
1. https://github.com/barisyonel/YonelTicaret adresine git
2. Tüm dosyaların yüklendiğini kontrol et
3. node_modules, .env gibi dosyaların OLMADIĞINI kontrol et
```

---

### 2️⃣ **Vercel'e Deployment**

#### Adım 2.1: Vercel'e Giriş
```
1. https://vercel.com adresine git
2. GitHub ile giriş yap (Continue with GitHub)
3. barisyonel hesabını seç
```

#### Adım 2.2: Yeni Proje Oluştur
```
1. Vercel Dashboard'da "Add New" → "Project" tıkla
2. "Import Git Repository" altında
3. "YonelTicaret" repository'sini seç
4. "Import" butonuna tıkla
```

#### Adım 2.3: Proje Yapılandırması
```
Project Settings:

Framework Preset: Next.js (otomatik algılar)
Root Directory: ./ (değiştirme)
Build Command: npm run build (otomatik)
Output Directory: .next (otomatik)
Install Command: npm install (otomatik)
```

#### Adım 2.4: Environment Variables Ekle ⚠️ ÖNEMLİ!
```
Settings → Environment Variables → Add

ZORUNLU ENVIRONMENT VARIABLES:

1. DB_SERVER
   Value: 104.247.167.194\\MSSQLSERVER2019
   
2. DB_NAME
   Value: yone8215_yoneltic_y
   
3. DB_USER
   Value: yone8215_yoneltic_y
   
4. DB_PASSWORD
   Value: [VERİTABANI ŞİFRENİZ]
   
5. JWT_SECRET
   Value: [GÜÇ LÜ_RANDOM_SECRET_EN_AZ_32_KARAKTER]
   Örnek: openssl rand -base64 32
   
6. JWT_ISSUER
   Value: https://yonelotoyedekparca.com
   
7. JWT_AUDIENCE
   Value: https://yonelotoyedekparca.com
   
8. ADMIN_SECRET_KEY
   Value: [ADMIN_SECRET_KEY]
   
9. NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
   Value: [CLOUDINARY_CLOUD_NAME]
   
10. CLOUDINARY_API_KEY
    Value: [CLOUDINARY_API_KEY]
    
11. CLOUDINARY_API_SECRET
    Value: [CLOUDINARY_API_SECRET]
    
12. NEXT_PUBLIC_WHATSAPP_NUMBER
    Value: 905542597273
```

**⚠️ ÖNEMLİ NOTLAR:**
- Tüm değişkenler için "All" (Production, Preview, Development) seç
- Özellikle `NEXT_PUBLIC_` ile başlayanlar client-side'da görünür olacak
- JWT_SECRET mutlaka güçlü ve random olmalı!

#### Adım 2.5: Deploy Et
```
1. "Deploy" butonuna tıkla
2. Build süreci başlayacak (2-3 dakika)
3. Build loglarını izle
4. ✅ "Deployment Ready" mesajını bekle
```

---

### 3️⃣ **Domain Bağlama**

#### Adım 3.1: Vercel'de Domain Ekle
```
1. Vercel Dashboard → Proje seç → Settings → Domains
2. "Add" butonuna tıkla
3. "yonelotoyedekparca.com" yaz
4. "Add" tıkla
```

#### Adım 3.2: DNS Ayarları (Domain Sağlayıcıda)
```
Domain sağlayıcınızda (örn: GoDaddy, Namecheap) şu DNS kayıtlarını ekleyin:

ZORUNLU KAYITLAR:

1. A Record:
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600 (veya Auto)

2. CNAME Record:
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (veya Auto)

OPSIYONEL (Önerilen):

3. TXT Record (SPF):
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.vercel-dns.com ~all
```

#### Adım 3.3: SSL Sertifikası (Otomatik)
```
DNS ayarları propagate olduktan sonra (5-60 dakika):
✓ Vercel otomatik SSL sertifikası oluşturacak (Let's Encrypt)
✓ https://yonelotoyedekparca.com otomatik aktif olacak
✓ HTTP → HTTPS redirect otomatik çalışacak
```

---

### 4️⃣ **Deployment Sonrası Kontroller**

#### Test Checklist ✅

```bash
# 1. SSL Kontrolü
curl -I https://yonelotoyedekparca.com
# Beklenecek: HTTP/2 200 + strict-transport-security header

# 2. Sitemap
curl https://yonelotoyedekparca.com/sitemap.xml
# Beklenecek: 173 satır XML

# 3. Robots.txt
curl https://yonelotoyedekparca.com/robots.txt
# Beklenecek: Sitemap URL görünmeli

# 4. Meta Tags
curl -s https://yonelotoyedekparca.com | grep -E "<title>|<meta.*og:"
# Beklenecek: Title ve OpenGraph tags
```

#### UI/Functionality Kontrolü

```
□ Ana sayfa yükleniyor mu?
□ 5 slider görseli görünüyor mu?
□ Navbar'da 5 menü linki var mı? (İletişim dahil)
□ Ürünler sayfası açılıyor mu?
□ Kategori filtreleme çalışıyor mu?
□ Alt kategoriler görünüyor mu?
□ Ürün detay sayfası açılıyor mu?
□ WhatsApp butonları çalışıyor mu?
□ Blog sayfası ve yazılar açılıyor mu?
□ İletişim sayfası ve harita yükleniyor mu?
□ 404 sayfası çalışıyor mu? (random URL dene)
□ Admin login sayfası açılıyor mu?
□ Ürün görselleri Cloudinary'den yükleniyor mu?
```

#### Database Bağlantı Kontrolü

```
□ Ana sayfada ürünler görünüyor mu?
□ Ürünler sayfasında filtreleme çalışıyor mu?
□ Admin paneline giriş yapılabiliyor mu?
□ Kategori listesi görünüyor mu?
```

---

### 5️⃣ **SEO Kurulumları (Deploy Sonrası)**

#### Google Search Console
```
1. https://search.google.com/search-console
2. "Add Property" → "Domain" seç
3. yonelotoyedekparca.com ekle
4. DNS verification yap (TXT record)
5. "Sitemaps" → Add: https://yonelotoyedekparca.com/sitemap.xml
6. "URL Inspection" ile ana sayfayı test et
7. "Request Indexing" yap
```

#### Google Analytics (Opsiyonel)
```
1. https://analytics.google.com
2. Yeni property oluştur: yonelotoyedekparca.com
3. Tracking ID al (G-XXXXXXXXXX)
4. src/app/layout.tsx içine Google Analytics script ekle
```

#### Bing Webmaster Tools
```
1. https://www.bing.com/webmasters
2. Site ekle: yonelotoyedekparca.com
3. Sitemap ekle: https://yonelotoyedekparca.com/sitemap.xml
```

---

### 6️⃣ **Sorun Giderme**

#### Build Hataları

**Problem:** Build sırasında hata
```bash
# Vercel Dashboard → Deployments → Failed deployment → View Logs

Yaygın Hatalar:
1. Environment variables eksik → Settings'den ekle
2. Database bağlantısı → DB credentials kontrol
3. Type errors → npm run build ile local test et
```

**Çözüm:**
```bash
# Localde test et:
npm run build

# Hata varsa düzelt, commit, push:
git add .
git commit -m "Fix: build error"
git push origin main
# Vercel otomatik yeniden deploy edecek
```

#### SSL Sertifikası Yüklenmiyor

**Problem:** HTTPS çalışmıyor
```
1. DNS propagation'u bekle (24 saate kadar)
2. Vercel Dashboard → Domains → SSL kontrol
3. "Refresh SSL" butonuna tıkla
4. nslookup yonelotoyedekparca.com ile DNS kontrol
```

#### Database Bağlantısı

**Problem:** Ürünler görünmüyor
```
1. Vercel Dashboard → Settings → Environment Variables
2. DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD kontrol
3. IP whitelist: Vercel IP'lerini database'de allow et
4. Deployment logs'da "SQL Server bağlantısı başarılı" mesajı var mı?
```

#### Görseller Yüklenmiyor

**Problem:** Cloudinary görselleri yüklenmiyor
```
1. NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME doğru mu?
2. CLOUDINARY_API_KEY ve SECRET doğru mu?
3. Cloudinary Dashboard'da usage limiti kontrol
4. Browser console'da network errors var mı?
```

---

## 📊 **Vercel Dashboard Özellikleri**

### Analytics (Dahil)
```
✓ Real User Monitoring (RUM)
✓ Web Vitals tracking
✓ Page views
✓ Response times
✓ Error rates
```

### Deployments
```
✓ Her commit otomatik deploy (main branch)
✓ Preview deployments (diğer branch'ler)
✓ Rollback özelliği
✓ Build logs
```

### Environment Variables
```
✓ Production, Preview, Development ortamları ayrı
✓ Encrypted storage
✓ Update anında yeniden deploy gerek
```

---

## 🔄 **Gelecek Güncellemeler İçin**

### Kod Değişikliği ve Deploy
```bash
# 1. Değişiklikleri yap
# src/app/... dosyaları düzenle

# 2. Local test
npm run dev
# Test et: http://localhost:3000

# 3. Build test
npm run build
# Hata yoksa devam

# 4. Git commit & push
git add .
git commit -m "feat: yeni özellik eklendi"
git push origin main

# 5. Vercel otomatik deploy edecek!
# Dashboard'dan build loglarını izle
```

### Environment Variable Güncelleme
```
1. Vercel Dashboard → Settings → Environment Variables
2. Değişkeni güncelle
3. "Save" tıkla
4. ⚠️ Yeniden deploy gerekir
5. Deployments → ... → Redeploy
```

---

## 🎯 **Başarı Kriterleri**

### ✅ Deployment Başarılı Sayılır Eğer:

```
✓ https://yonelotoyedekparca.com açılıyor
✓ SSL sertifikası aktif (🔒 simgesi)
✓ Ana sayfa yükleniyor
✓ Ürünler listeleniyor
✓ Kategorilere tıklama çalışıyor
✓ Ürün detay sayfası açılıyor
✓ WhatsApp butonları çalışıyor
✓ Admin paneline giriş yapılabiliyor
✓ Blog yazıları açılıyor
✓ 404 sayfası görünüyor (random URL)
✓ Sitemap erişilebilir
✓ Robots.txt erişilebilir
✓ Google Search Console verification
```

---

## 📞 **Destek**

### Vercel Support
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support
- Status: https://vercel-status.com

### GitHub Support
- Docs: https://docs.github.com
- Support: https://support.github.com

### Next.js Docs
- https://nextjs.org/docs

---

## 🎉 **DEPLOYMENT KOMUTLARI ÖZET**

### Quick Deploy (Terminal)
```bash
# 1. Git kurulumu
cd /Users/mac/Desktop/_next
git init  # (eğer gerekirse)
git remote add origin https://github.com/barisyonel/YonelTicaret.git

# 2. Commit & Push
git add .
git commit -m "🚀 Production ready deployment"
git push -u origin main

# 3. Vercel'e git ve Import et
# https://vercel.com → New Project → Import YonelTicaret

# 4. Environment variables ekle (Vercel dashboard)
# 5. Deploy butonuna tıkla
# 6. Domain ekle: yonelotoyedekparca.com
# 7. DNS ayarlarını yap
# 8. SSL bekle (5-60 dakika)
# 9. ✅ CANLI!
```

---

**Son Güncelleme:** 25 Ekim 2025  
**Repository:** https://github.com/barisyonel/YonelTicaret  
**Production URL:** https://yonelotoyedekparca.com  
**Status:** 🚀 **DEPLOYMENT READY**

✨ **Başarılar!** ✨

