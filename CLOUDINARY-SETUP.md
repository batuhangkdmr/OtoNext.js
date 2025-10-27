# 📸 Cloudinary Kurulum Rehberi

Admin panelinde resim yükleme özelliğinin çalışması için Cloudinary hesabınızı yapılandırmanız gerekiyor.

---

## 🚀 Adım 1: Cloudinary Hesabı

1. [Cloudinary](https://cloudinary.com/) sitesine gidin
2. Ücretsiz hesap oluşturun (Free Plan yeterlidir)
3. Dashboard'a giriş yapın

---

## 🔑 Adım 2: API Bilgilerini Alın

Dashboard'da şu bilgileri bulun:

```
Cloud Name: dxxxxxx
API Key: 123456789012345
API Secret: xxxxxxxxxxxxxxxxxxxx
```

---

## 📝 Adım 3: Upload Preset Oluşturun

**ÖNEMLİ:** Bu adım olmadan resim yükleme çalışmaz!

### 3.1 Settings'e Gidin
- Dashboard'da sağ üstteki **⚙️ Settings** butonuna tıklayın

### 3.2 Upload Presets Bölümü
- Sol menüden **Upload** sekmesine gidin
- **Upload presets** bölümünü bulun
- **Add upload preset** butonuna tıklayın

### 3.3 Preset Ayarları

**Preset Name:** `yonel_products` (veya istediğiniz bir isim)

**Signing Mode:** 
- ✅ **Unsigned** seçin (Önemli!)

**Folder:** 
- `yonel-products` yazın

**Diğer Ayarlar:**
- Unique filename: ✅ Enabled
- Use filename: ❌ Disabled
- Overwrite: ❌ Disabled

**Save** butonuna tıklayın.

---

## 🔧 Adım 4: .env Dosyasını Güncelleyin

`.env.local` dosyanızı açın ve şu değişkenleri ekleyin:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxxxxxx
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=yonel_products
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxx
```

**NOT:** 
- `NEXT_PUBLIC_` ile başlayan değişkenler client-side'da kullanılır
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` değerini yukarıda oluşturduğunuz preset ismi ile değiştirin

---

## ✅ Adım 5: Test Edin

1. Development server'ı yeniden başlatın:
   ```bash
   npm run dev
   ```

2. Admin paneline gidin: `http://localhost:3000/admin/products/create`

3. "Görsel Yükle" butonuna tıklayın

4. Bir resim seçin (max 5MB)

5. Resim başarıyla yüklenirse ✅ "Resim başarıyla yüklendi!" mesajını göreceksiniz

---

## 🐛 Sorun Giderme

### Hata: "Upload preset not found"
**Çözüm:** 
1. Cloudinary dashboard'da Upload Preset oluşturdunuz mu kontrol edin
2. Preset ismini `.env.local` dosyasında doğru yazdığınızdan emin olun
3. Preset'in **Unsigned** olduğundan emin olun

### Hata: "Cloudinary ayarları eksik"
**Çözüm:** 
1. `.env.local` dosyasında `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` tanımlı mı kontrol edin
2. Server'ı yeniden başlatın (`npm run dev`)

### Hata: "Invalid signature"
**Çözüm:** 
1. Upload Preset'i **Unsigned** modda oluşturdunuz mu kontrol edin
2. Signed mod için backend API endpoint gerekir

### Resim yükleniyor ama görünmüyor
**Çözüm:** 
1. Browser console'da hata var mı kontrol edin
2. Cloudinary dashboard'da resim yüklendi mi kontrol edin: Media Library > yonel-products klasörü
3. Image URL'yi doğru kaydediyor mu kontrol edin

---

## 📚 Ek Bilgiler

### Folder Organizasyonu
Resimler Cloudinary'de şu klasörde saklanır:
```
yonel-products/
  ├── product_1.jpg
  ├── product_2.png
  └── ...
```

### Resim Optimizasyonu
Cloudinary otomatik olarak:
- ✅ Resmi optimize eder
- ✅ Farklı boyutlar oluşturur
- ✅ WebP formatına dönüştürür
- ✅ CDN üzerinden sunar

### Güvenlik
- Unsigned upload sadece admin paneli için kullanılmalı
- Public web sitesinde signed upload kullanın
- Upload preset'te dosya boyutu limiti koyabilirsiniz

---

## 🎉 Tamamlandı!

Artık admin panelinde ürün resimleri yükleyebilir, değiştirebilir ve silebilirsiniz!

Sorular için: [Cloudinary Docs](https://cloudinary.com/documentation)

