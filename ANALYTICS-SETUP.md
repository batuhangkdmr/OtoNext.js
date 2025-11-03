# 📊 Analytics & Tracking Setup Guide

## 🎯 Genel Bakış

Bu proje şu analytics araçları için hazır:
- ✅ Google Analytics 4 (GA4)
- ✅ Google Tag Manager (GTM)
- ✅ Microsoft Clarity (Heatmaps)
- ✅ Facebook Pixel (Ads tracking)
- ✅ Google Search Console

---

## 1️⃣ GOOGLE ANALYTICS 4 (GA4)

### Adım 1: GA4 Hesabı Oluştur
1. https://analytics.google.com adresine git
2. "Create Account" tıkla
3. Website seç: `yonelotoyedekparca.com`
4. **Measurement ID**'yi kopyala (örn: `G-XXXXXXXXXX`)

### Adım 2: Environment Variable Ekle
`.env.local` dosyasına ekle:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Adım 3: Layout'a Analytics Ekle
`src/app/layout.tsx` dosyasını aç:
```tsx
import Analytics from '@/components/Analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
```

### Adım 4: Test Et
```bash
npm run dev
```
Tarayıcıda aç, console'da "gtag" hatası olmamalı.

---

## 2️⃣ GOOGLE TAG MANAGER (GTM)

### Adım 1: GTM Konteyner Oluştur
1. https://tagmanager.google.com adresine git
2. "Create Account" → "Container" oluştur
3. **Container ID**'yi kopyala (örn: `GTM-XXXXXXX`)

### Adım 2: Environment Variable Ekle
`.env.local`:
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Adım 3: GA4'ü GTM'ye Bağla
1. GTM Dashboard → "Tags" → "New"
2. Tag Type: "Google Analytics: GA4 Configuration"
3. Measurement ID: `G-XXXXXXXXXX` (GA4'den)
4. Trigger: "All Pages"
5. Save & Publish

---

## 3️⃣ MICROSOFT CLARITY (Heatmaps & Recordings)

### Adım 1: Clarity Projesi Oluştur
1. https://clarity.microsoft.com adresine git
2. "Add New Project"
3. Website: `yonelotoyedekparca.com`
4. **Project ID**'yi kopyala

### Adım 2: Environment Variable Ekle
`.env.local`:
```env
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
```

### Avantajları:
- ✅ Heatmaps (kullanıcılar nereye tıklıyor)
- ✅ Session recordings (kullanıcı davranışı)
- ✅ Ücretsiz!

---

## 4️⃣ FACEBOOK PIXEL (Reklam İçin)

### Adım 1: Facebook Business Manager
1. https://business.facebook.com
2. Events Manager → "Create Pixel"
3. **Pixel ID**'yi kopyala

### Adım 2: Environment Variable Ekle
`.env.local`:
```env
NEXT_PUBLIC_FB_PIXEL_ID=xxxxxxxxxxxx
```

---

## 5️⃣ GOOGLE SEARCH CONSOLE

### Adım 1: Domain Doğrulama
1. https://search.google.com/search-console
2. "Add Property" → Domain: `yonelotoyedekparca.com`
3. DNS verification (TXT record ekle)

#### DNS TXT Record Ekle:
```
Host: @
Type: TXT
Value: google-site-verification=XXXXXXXXXXXXXXX
```

### Adım 2: Sitemap Submit
Search Console'da:
1. "Sitemaps" → "Add new sitemap"
2. Sitemap URL: `https://yonelotoyedekparca.com/sitemap.xml`
3. Submit

### Adım 3: robots.txt Kontrol
```
https://yonelotoyedekparca.com/robots.txt
```
Sitemap satırı olmalı:
```
Sitemap: https://yonelotoyedekparca.com/sitemap.xml
```

---

## 6️⃣ EVENT TRACKING KULLANIMI

### Ürün Görüntüleme
```tsx
import { trackProductView } from '@/lib/analytics/gtag';

// Ürün detay sayfasında
useEffect(() => {
  trackProductView({
    id: product.Id,
    name: product.Name,
    category: product.CategoryName,
  });
}, [product]);
```

### WhatsApp Tıklama
```tsx
import { trackWhatsAppClick } from '@/lib/analytics/gtag';

<Button onClick={() => {
  trackWhatsAppClick(product.Name);
  window.open(whatsappUrl, '_blank');
}}>
  WhatsApp
</Button>
```

### Arama
```tsx
import { trackSearch } from '@/lib/analytics/gtag';

const handleSearch = (term: string) => {
  trackSearch(term);
  // ... arama işlemi
};
```

---

## 7️⃣ VERCEL DEPLOYMENT

Vercel'de Environment Variables ekle:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Tüm `NEXT_PUBLIC_*` değişkenleri ekle:
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_CLARITY_ID`
   - `NEXT_PUBLIC_FB_PIXEL_ID`

3. Redeploy:
```bash
vercel --prod
```

---

## 8️⃣ TEST & DOĞRULAMA

### GA4 Test
1. Site'yi aç
2. GA4 Dashboard → Reports → Realtime
3. Kendini görmeli (1 active user)

### GTM Test
1. GTM Dashboard → Preview mode
2. Site'yi aç
3. GTM debugger açılmalı

### Search Console Test
1. Search Console → URL Inspection
2. URL gir: `https://yonelotoyedekparca.com/urunler`
3. "Request Indexing" tıkla

---

## 9️⃣ ÖNEMLİ EVENTS

Tracking edilmesi gereken önemli aksiyonlar:
- ✅ Sayfa görüntüleme (otomatik)
- ✅ Ürün görüntüleme
- ✅ Kategori değiştirme
- ✅ Arama yapma
- ✅ WhatsApp butonu tıklama
- ✅ Ürün kartı tıklama
- ✅ Favorilere ekleme (gelecekte)

---

## 🎯 HEDEF METRİKLER

### İlk 1 Ay
- 📊 1000+ page views
- 👥 200+ unique visitors
- ⏱️ 2+ dakika average session
- 📈 %60+ returning visitors

### 3 Ay Sonra
- 📊 5000+ page views/month
- 👥 1000+ unique visitors/month
- 🔍 100+ search queries/month
- 💬 50+ WhatsApp leads/month

---

## 📞 DESTEK

**Dokümantasyon:**
- GA4: https://support.google.com/analytics
- GTM: https://support.google.com/tagmanager
- Search Console: https://support.google.com/webmasters

**Test Tools:**
- GA4 Debug: https://analytics.google.com/analytics/web/
- GTM Preview: https://tagmanager.google.com/
- Rich Results Test: https://search.google.com/test/rich-results

---

## ✅ CHECKLIST

- [ ] GA4 Measurement ID eklendi
- [ ] GTM Container ID eklendi
- [ ] Clarity Project ID eklendi (opsiyonel)
- [ ] Facebook Pixel ID eklendi (opsiyonel)
- [ ] Analytics component layout'a eklendi
- [ ] Vercel'de environment variables set edildi
- [ ] Search Console'da domain doğrulandı
- [ ] Sitemap submit edildi
- [ ] Realtime data görünüyor
- [ ] Event tracking test edildi

**Tamamlandığında:** 🎉 **Analytics tamam!**

