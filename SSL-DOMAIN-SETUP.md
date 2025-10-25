# 🔐 SSL & Domain Yapılandırma Rehberi
## yonelotoyedekparca.com

**Güncelleme Tarihi:** 25 Ekim 2025

---

## ✅ Tamamlanan Yapılandırmalar

### 1. **SSL (HTTPS) Yapılandırması**

#### Next.js Güvenlik Başlıkları (`next.config.js`)
```javascript
- Strict-Transport-Security: HSTS aktif (2 yıl)
- X-Content-Type-Options: nosniff (MIME sniffing koruması)
- X-Frame-Options: SAMEORIGIN (Clickjacking koruması)
- X-XSS-Protection: XSS saldırı koruması
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Kamera, mikrofon izinleri kısıtlı
```

#### Vercel SSL Yapılandırması (`vercel.json`)
```json
- Otomatik HTTPS yönlendirmesi
- SSL sertifikası otomatik yenileme
- HTTP → HTTPS zorunlu yönlendirme
- Güvenlik başlıkları her istekte aktif
```

**SSL Sertifikası:** Vercel otomatik Let's Encrypt sertifikası sağlar (ücretsiz)

---

### 2. **SSR (Server-Side Rendering) Yapılandırması**

Next.js 14 App Router ile SSR **otomatik aktif**:

#### ✅ Aktif SSR Özellikleri:
- **Server Components:** Tüm sayfalar varsayılan olarak sunucu tarafında render
- **Dynamic Routing:** Ürün detay sayfaları SSR ile çalışıyor
- **SEO Optimizasyonu:** Her sayfa sunucu tarafında meta tagları ile render
- **React 18 Streaming:** Sayfa içeriği kademeli olarak yükleniyor

#### SSR Kullanımı:
```typescript
// Otomatik SSR - Server Component
export default async function Page() {
  const data = await fetchData(); // Sunucu tarafında çalışır
  return <div>{data}</div>
}

// generateMetadata - SSR
export async function generateMetadata() {
  return { title: 'Yönel Oto' }
}
```

**Performans İyileştirmeleri:**
- `reactStrictMode: true` - Geliştirme hatalarını yakalar
- `swcMinify: true` - Daha hızlı build ve küçük bundle
- `compress: true` - Gzip sıkıştırma aktif
- `poweredByHeader: false` - X-Powered-By başlığı kaldırıldı

---

### 3. **Domain Yapılandırması**

#### ✅ Güncellenen Dosyalar:

**Sitemap (`public/sitemap.xml`)**
- ✅ Tüm tarihler `2025-10-25` olarak güncellendi
- ✅ Domain: `https://yonelotoyedekparca.com`
- ✅ 182 satır SEO optimizasyonu

**Robots.txt (`public/robots.txt`)**
- ✅ Sitemap URL: `https://yonelotoyedekparca.com/sitemap.xml`
- ✅ Admin alanları korunuyor
- ✅ Tüm botlar için izin verildi

**Manifest (`public/manifest.json`)**
- ✅ PWA start_url: `https://yonelotoyedekparca.com/`
- ✅ Mobil uygulama desteği

**Environment Variables (`env.example.txt`)**
- ✅ JWT_ISSUER: `https://yonelotoyedekparca.com`
- ✅ JWT_AUDIENCE: `https://yonelotoyedekparca.com`

---

## 🚀 Vercel'de Domain Bağlama Adımları

### 1. **Domain DNS Ayarları**

yonelotoyedekparca.com için DNS kayıtları:

```dns
Type    Name    Value                           TTL
A       @       76.76.21.21                     3600
CNAME   www     cname.vercel-dns.com            3600
```

### 2. **Vercel Dashboard**

1. Vercel Dashboard'a giriş yap: https://vercel.com
2. Proje seç: `yonel-nextjs`
3. **Settings** → **Domains**
4. **Add Domain:** `yonelotoyedekparca.com`
5. DNS doğrulaması yap
6. **Add Domain:** `www.yonelotoyedekparca.com`
7. SSL sertifikası otomatik oluşur (1-2 dakika)

### 3. **SSL Sertifikası Doğrulama**

```bash
# SSL kontrolü
curl -I https://yonelotoyedekparca.com

# Beklenen cevap:
HTTP/2 200
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

---

## 🔒 Güvenlik Özellikleri

### ✅ Aktif Korumalar:

1. **HSTS (HTTP Strict Transport Security)**
   - Tarayıcılar her zaman HTTPS kullanır
   - 2 yıl boyunca geçerli
   - Alt domainleri de kapsar

2. **XSS Koruması**
   - Cross-Site Scripting saldırıları engellenir
   - Tarayıcı bazlı koruma aktif

3. **Clickjacking Koruması**
   - Siteniz iframe içinde açılamaz (SAMEORIGIN)
   - Phishing saldırıları engellenir

4. **MIME Sniffing Koruması**
   - Dosya tipleri değiştirilemez
   - Script injection engellenir

5. **JWT Token Güvenliği**
   - HTTP-only cookies
   - Secure flag (sadece HTTPS)
   - SameSite=Strict

---

## 📊 SEO & Performance

### ✅ Yapılandırılan SEO Özellikleri:

- **Canonical URLs:** Tüm sayfalarda doğru
- **OpenGraph Tags:** Facebook/LinkedIn paylaşımı
- **Twitter Cards:** Twitter önizleme
- **Schema.org:** Yapılandırılmış veri (Organization, LocalBusiness)
- **Sitemap:** 182+ URL indexed
- **Robots.txt:** Bot yönlendirmesi

### Lighthouse Skorları (Hedef):
```
Performance:   90+  ⚡
Accessibility: 95+  ♿
Best Practices: 100 ✅
SEO:           100 🎯
```

---

## 🧪 Test Komutları

### SSL Test:
```bash
# SSL Labs test (A+ hedef)
https://www.ssllabs.com/ssltest/analyze.html?d=yonelotoyedekparca.com

# Security Headers test
https://securityheaders.com/?q=https://yonelotoyedekparca.com
```

### SSR Test:
```bash
# Sayfanın kaynak kodunda içerik var mı?
curl -s https://yonelotoyedekparca.com | grep "İveco Daily"

# JavaScript devre dışı test (SSR çalışıyor mu?)
curl -s https://yonelotoyedekparca.com/products
```

### Performance Test:
```bash
# Lighthouse CLI
npx lighthouse https://yonelotoyedekparca.com --view

# PageSpeed Insights
https://pagespeed.web.dev/analysis?url=https://yonelotoyedekparca.com
```

---

## 🔄 Deployment Workflow

### Vercel Otomatik Deployment:
```bash
# Production deployment
git push origin main
→ Vercel otomatik build yapar
→ SSL otomatik yenilenir
→ yonelotoyedekparca.com güncellenir

# Preview deployment (test için)
git push origin dev
→ unique-url.vercel.app oluşturulur
```

---

## 📝 Environment Variables (Production)

Vercel Dashboard'da ayarlanması gerekenler:

```env
# Database
DB_SERVER=104.247.167.194\\MSSQLSERVER2019
DB_NAME=yone8215_yoneltic_y
DB_USER=yone8215_yoneltic_y
DB_PASSWORD=[production_password]

# JWT
JWT_SECRET=[strong_random_secret]
JWT_ISSUER=https://yonelotoyedekparca.com
JWT_AUDIENCE=https://yonelotoyedekparca.com

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=[cloud_name]
CLOUDINARY_API_KEY=[api_key]
CLOUDINARY_API_SECRET=[api_secret]

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=905542597273
```

---

## ✨ Ek Öneriler

### 1. **Google Search Console**
```
https://search.google.com/search-console
- Sitemap ekle: https://yonelotoyedekparca.com/sitemap.xml
- URL inspection: index durumu kontrol
```

### 2. **Google Analytics**
```javascript
// src/app/layout.tsx içine ekle
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

### 3. **CDN & Caching**
```
Vercel Edge Network otomatik aktif:
- Global CDN: 70+ lokasyon
- Static assets: otomatik cache
- Image optimization: otomatik
```

### 4. **Monitoring**
```
Vercel Analytics (dahil):
- Real User Monitoring (RUM)
- Web Vitals tracking
- Error tracking
```

---

## 🆘 Sorun Giderme

### SSL Sertifikası Yüklenmiyor:
1. DNS kayıtlarını kontrol et (A ve CNAME)
2. Vercel Dashboard'da "Refresh SSL" tıkla
3. 24 saat bekle (DNS propagation)

### HTTP → HTTPS Yönlendirilmiyor:
1. `vercel.json` redirects kontrolü
2. Vercel Dashboard → Settings → Force HTTPS

### SSR Çalışmıyor:
1. `use client` direktifi sadece gerektiğinde kullan
2. `async` component'ler server-side render edilir
3. Build loglarını kontrol: `npm run build`

---

## 📞 Destek

**Teknik Sorunlar:**
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Repository'de issue aç

**Proje Sahibi:**
- Yönel Oto Yedek Parça
- Tel: 0554 259 72 73
- Web: https://yonelotoyedekparca.com

---

✅ **Son Güncelleme:** 25 Ekim 2025  
🔐 **SSL:** Aktif ve Güvenli  
⚡ **SSR:** Next.js 14 ile Tam Entegre  
🌐 **Domain:** yonelotoyedekparca.com

