import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const blogPosts: Record<string, BlogPost> = {
  'iveco-daily-yedek-parca-secimi-rehberi': {
    slug: 'iveco-daily-yedek-parca-secimi-rehberi',
    title: 'İveco Daily Yedek Parça Seçimi: Orijinal mi Yan Sanayi mi? Uzman Rehberi',
    excerpt: 'İveco Daily 120-14, 85-12, 65-9 ve 50NC modelleri için doğru yedek parça seçimi nasıl yapılır?',
    content: `
# İveco Daily Yedek Parça Seçimi: Kapsamlı Rehber

İveco Daily serisi (120-14, 85-12, 65-9, 50NC), Türkiye'de en çok tercih edilen hafif ticari araçlar arasında yer alıyor. Bu araçların performansını ve kullanım ömrünü maksimize etmek için **doğru yedek parça seçimi kritik önem taşıyor**.

## İveco Daily Modelleri ve Yedek Parça İhtiyaçları

### İveco Daily 120-14
En yüksek taşıma kapasitesine sahip model olan 120-14, özellikle **ağır yük taşımacılığında** tercih ediliyor. Bu modelde:
- **Motor yedek parçaları**: Yüksek tork nedeniyle daha sık aşınma
- **Fren sistemi**: Ağır yük nedeniyle balata ve disk ömrü daha kısa
- **Süspansiyon**: Yay ve amortisörler kritik

### İveco Daily 85-12
Orta segment taşımacılıkta ideal olan bu model:
- **Yakıt sistemi**: Enjektör ve pompa bakımı önemli
- **Elektrik sistemi**: Alternatör ve marş motoru kontrolü
- **Debriyaj sistemi**: Periyodik kontrol şart

### İveco Daily 65-9 ve 50NC
Şehir içi dağıtım ve hafif taşımacılıkta kullanılan bu modeller:
- **Stop-and-go kullanım**: Fren ve debriyaj aşınması
- **Kısa mesafe**: Motor ısınma sorunları
- **Sık kullanım**: Yağ ve filtre değişimleri kritik

## Orijinal vs Yan Sanayi: Karşılaştırmalı Analiz

### Orijinal Yedek Parça Avantajları
1. **Tam Uyumluluk**: %100 araç uyumluluğu
2. **Garanti Güvencesi**: Üretici garantisi
3. **Uzun Ömür**: Ortalama 2x daha uzun kullanım
4. **Performans**: Tam kapasite çalışma

### Kaliteli Yan Sanayi Alternatifleri
1. **Fiyat Avantajı**: %30-50 daha ekonomik
2. **Geniş Yelpaze**: Çok sayıda marka seçeneği
3. **Hızlı Tedarik**: Kolay bulunabilirlik
4. **Kalite Standartları**: ISO ve TSE sertifikalı ürünler

## Hangi Parçalarda Orijinal Şart?

### Mutlaka Orijinal Olması Gereken Parçalar
1. **Motor Parçaları**
   - Piston, Silindir Gömlekleri
   - Krank, Biyel Mili
   - Supap ve Supap Yayları

2. **Yakıt Sistemi**
   - Enjektörler (Common Rail)
   - Yakıt Pompası
   - Basınç Regülatörleri

3. **Elektronik Kontrol Üniteleri (ECU)**
   - Motor Kontrol Ünitesi
   - ABS/ESP Modülleri
   - Airbag Sistemleri

### Yan Sanayi Kullanılabilecek Parçalar
1. **Filtreler** (Filtron, Mann Filter, Bosch)
2. **Fren Balataları** (Sampiyon, Valeo, TRW)
3. **Diskler ve Kampanalar** (Brembo, ATE)
4. **Silecek ve Ampuller**
5. **Bakım Malzemeleri** (Yağlar, sıvılar)

## İveco Daily Bakım Periyotları

### Periyodik Bakım Tablosu

#### Her 10.000 km'de
- ✅ Motor yağı değişimi (10W-40 veya 5W-30)
- ✅ Yağ filtresi değişimi
- ✅ Hava filtresi kontrolü
- ✅ Polen filtresi kontrolü

#### Her 20.000 km'de
- ✅ Hava filtresi değişimi
- ✅ Polen filtresi değişimi
- ✅ Yakıt filtresi değişimi
- ✅ Fren balata kontrolü

#### Her 40.000 km'de
- ✅ Diferansiyel yağı değişimi
- ✅ Fren hidroliği kontrolü
- ✅ Süspansiyon kontrolü

#### Her 80.000 km'de
- ✅ Triger kayışı değişimi (kritik!)
- ✅ Su pompası değişimi
- ✅ Gergi bilyaları değişimi

## Yedek Parça Alırken Dikkat Edilmesi Gerekenler

### 1. Parça Kodlarını Kontrol Edin
İveco Daily için her parçanın kendine özel **OEM kodu** vardır. Sipariş vermeden önce:
- Aracın şase numarasını hazır bulundurun
- Motor kodunu bilin (F1CE, F1AE vb.)
- Mevcut parçanın kodunu not edin

### 2. Kalite Sertifikalarına Bakın
- **ISO 9001**: Kalite yönetim standardı
- **TSE**: Türk Standartları Enstitüsü onayı
- **CE**: Avrupa uygunluk sertifikası
- **OEM Onaylı**: Üretici onaylı yan sanayi

### 3. Garanti Şartlarını Öğrenin
- Orijinal parçalarda 2 yıl garanti standart
- Yan sanayide 1 yıl garanti normal
- Montaj hatalarını kapsayan garanti avantajlı

### 4. Satıcı Güvenilirliğini Araştırın
- 50+ yıllık tecrübeli firmalardan alın
- Google yorumlarını kontrol edin
- Fatura ve garanti belgesi isteyin

## İveco Daily'de Sık Değişen Parçalar ve Ortalama Ömürleri

| Parça | Ortalama Değişim Süresi |
|-------|------------------------|
| **Fren Balatası** | 30.000-40.000 km |
| **Fren Diski** | 60.000-80.000 km |
| **Debriyaj Seti** | 80.000-120.000 km |
| **Amortisör** | 80.000-100.000 km |
| **Triger Kayış Seti** | 80.000-100.000 km |
| **Alternatör** | 150.000-200.000 km |

## Yönel Oto'dan Profesyonel Tavsiyeler

**50+ yıllık tecrübemizle** İveco Daily sahiplerine önerilerimiz:

1. **Periyodik Bakımı Aksatmayın**: Motor ömrünü 2 katına çıkarır
2. **Orijinal Yağ Kullanın**: İveco Daily 5W-30 tam sentetik tercih edin
3. **Triger Kayış Değişimini Ertelemeyin**: Kopması halinde motor hasar görür
4. **Fren Sistemini İhmal Etmeyin**: Can güvenliği için kritik
5. **Kaliteli Yakıt Filtresi Kullanın**: Enjektör ömrünü uzatır

## Kış ve Yaz Aylarında Özel Bakım

### Kış Bakımı
- Akü durumunu kontrol edin
- Antifriz seviyesini ölçün (-35°C)
- Kış lastiği kullanın
- Motor ısıtma sistemini kontrol edin

### Yaz Bakımı
- Klima gazını kontrol ettirin
- Motor soğutma sistemini inceleyin
- Yaz yağına geçiş yapın (10W-40)
- Radyatör ve fan kontrolü

## Sonuç ve Öneriler

İveco Daily yedek parça seçiminde **altın kural**: Motor ve güvenlik kritik parçalarda orijinal, bakım ve sarf malzemelerinde kaliteli yan sanayi kullanımı.

Yönel Oto Yedek Parça olarak:
- ✅ Hem orijinal hem kaliteli yan sanayi ürünleri sunuyoruz
- ✅ 50+ yıllık tecrübemizle doğru parça seçiminde size yol gösteriyoruz
- ✅ Türkiye geneline aynı gün kargo ile hızlı teslimat yapıyoruz
- ✅ Tüm ürünlerimiz garantili ve sertifikalı

### İletişim
📞 **Telefon**: 0554 259 72 73  
📍 **Adres**: Tokat  
🌐 **Web**: yonelotoyedekparca.com

**İveco Daily'niz için doğru parça seçiminde profesyonel destek almak için bizi arayın!**
    `,
    category: 'İveco Daily',
    tags: ['İveco Daily', 'Yedek Parça', 'Orijinal Parça', 'Bakım', '120-14', '85-12'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '15 Aralık 2024',
    readTime: '8 dk',
    image: '/assets/dailly.png',
    featured: true,
  },
  'fiat-ducato-motor-bakimi-ipuclari': {
    slug: 'fiat-ducato-motor-bakimi-ipuclari',
    title: 'Fiat Ducato Motor Bakımı: 2.3 ve 3.0 Dizel Motorlar için Kapsamlı Bakım Rehberi',
    excerpt: 'Fiat Ducato 2.3 MultiJet ve 3.0 HDI motorlarının uzun ömürlü olması için yapılması gereken periyodik bakımlar.',
    content: `
# Fiat Ducato Motor Bakımı: Profesyonel Rehber

Fiat Ducato, Avrupa'nın en çok satan hafif ticari aracı olarak özellikle **2.3 MultiJet** ve **3.0 HDI** dizel motorlarıyla dikkat çekiyor. Bu motorların performansını korumak ve sorunsuz çalışmasını sağlamak için düzenli bakım şart.

## Fiat Ducato Motor Tipleri

### 2.3 MultiJet (120-130-140 HP)
En yaygın kullanılan motor tipi:
- **Hacim**: 2.287 cc
- **Güç**: 120/130/140 HP versiyonları
- **Tork**: 320-350 Nm
- **Common Rail Teknolojisi**: Yüksek basınçlı enjeksiyon
- **Turbo**: Değişken geometrili turbo

**Avantajlar**:
- Yakıt ekonomisi
- Düşük emisyon
- Sessiz çalışma
- Yedek parça bulma kolaylığı

**Dikkat Edilmesi Gerekenler**:
- DPF (Partikül Filtresi) bakımı
- EGR valfi temizliği
- Turbo bakımı
- Common Rail sistem hassasiyeti

### 3.0 HDI (160-180 HP)
Ağır yük taşımacılığında tercih edilen güçlü motor:
- **Hacim**: 2.999 cc
- **Güç**: 160/180 HP versiyonları
- **Tork**: 400-450 Nm
- **Daha Dayanıklı Yapı**: Ağır hizmet tipi

**Avantajlar**:
- Yüksek tork
- Ağır yük kaldırma
- Uzun ömürlü
- Dağlık arazide performans

## Periyodik Bakım Takvimi

### Her 10.000 km (veya Yılda 1 Kez)

#### Motor Yağı Değişimi
**2.3 MultiJet için**:
- Kapasite: 5.9 litre
- Önerilen: 5W-30 tam sentetik
- Alternatif: 10W-40 yarı sentetik

**3.0 HDI için**:
- Kapasite: 7.2 litre
- Önerilen: 5W-40 tam sentetik
- Ağır hizmet: 10W-40 mineral

**Yağ Seçimi İpuçları**:
- ACEA C3 standardına uygun yağ kullanın
- DPF'li araçlarda Low SAPS yağ şart
- Marka: Castrol Edge, Shell Helix, Total Quartz

#### Yağ Filtresi
- Her yağ değişiminde mutlaka değiştirilmeli
- Orijinal Fiat veya Mann Filter tercih edilmeli
- Filtre muhakkak yağlanarak takılmalı

### Her 20.000 km (veya 2 Yılda 1 Kez)

#### Hava Filtresi
- Temiz hava = Daha iyi yanma
- Tozlu ortamlarda 15.000 km'de değişim
- Performans kaybının %10'u kirli hava filtresinden

#### Yakıt Filtresi
**Kritik Önem**:
- Common Rail sistemde enjektör ömrünü doğrudan etkiler
- Su ayırıcılı filtre kullanın
- Kaliteli dizel yakıt tercih edin

**Yakıt Filtresi Değişimi Sırasında**:
1. Sistemi boşaltın
2. Filtreyi yağla doldurun
3. Hava almadığından emin olun
4. Manuel pompa ile hava alın

#### Polen Filtresi
- Kabin hava kalitesi için önemli
- Aktif karbonlu filtre tavsiye edilir
- Alerjisi olanlar için kritik

### Her 40.000 km

#### Diferansiyel ve Şanzıman Yağı
**Manuel Şanzıman**:
- 75W-90 tam sentetik dişli yağı
- Kapasite: 1.8-2.2 litre

**Diferansiyel**:
- 75W-90 veya 80W-90
- Ağır yük taşımada daha sık değişim

### Her 80.000 km veya 5 Yılda 1 Kez

#### Triger Kayış Seti (KRİTİK!)
**Neden Bu Kadar Önemli?**:
- Kopması durumunda supaplar pistonlara çarpar
- Ciddi motor hasarına yol açar

**Triger Seti İçeriği**:
- Triger kayışı
- Gergi bilyası (2 adet)
- Kasnak
- Su pompası (önerilir)

**Montaj Önerileri**:
- Mutlaka kalifiye ustaya yaptırın
- Orijinal veya Gates, Contitech kullanın
- Su pompasını da birlikte değiştirin

## Motor Sorunları ve Çözümleri

### Common Rail Enjektör Sorunları

**Belirtiler**:
- Motor titremesi
- Güç kaybı
- Siyah duman
- Yüksek yakıt tüketimi

**Çözüm**:
- Enjektör test ve temizliği
- Gerekirse enjektör değişimi
- Kaliteli yakıt ve yakıt katkısı kullanımı

### DPF (Partikül Filtresi) Tıkanması

**Belirtiler**:
- Kontrol lambası yanması
- Güç kaybı
- Rejenerasyon yapamaması
- Limp mode (acil mod)

**Önlem**:
- Haftada en az 1 kez uzun yol (30+ km)
- 3000+ devirde çalıştırma
- Kaliteli motor yağı kullanımı

**Çözüm**:
- Profesyonel DPF temizliği
- Son çare olarak DPF değişimi

### EGR Valfi Kirlenmesi

**Belirtiler**:
- Motor gücünde düşüş
- Titreşim
- Siyah duman
- Rölantide düzensiz çalışma

**Çözüm**:
- Profesyonel EGR valfi temizliği
- EGR iptal (önerilmez, emisyonda sorun)

### Turbo Arızaları

**Belirtiler**:
- Islık sesi
- Mavi duman
- Güç kaybı
- Yağ kaçağı

**Önlem**:
- Turbo yağ hatlarını kontrol edin
- Kaliteli motor yağı kullanın
- Soğumadan motoru kapatmayın

**Çözüm**:
- Turbo yağ ve hortum kontrolü
- Turbo revize işlemi
- Gerekirse yeni turbo takımı

## Motor Performansını Artırma İpuçları

### 1. Kaliteli Yakıt Kullanın
- BP, Shell, Opet gibi markaların Euro 6 dizelini tercih edin
- Cetane+ katkı maddesi performansı artırır

### 2. Motor Yağını Zamanında Değiştirin
- 10.000 km'yi aşmayın
- Ağır kullanımda 7.500 km'de değişim

### 3. Soğutma Sistemini İhmal Etmeyin
- Antifriz her 2 yılda değişmeli
- Radyatör temizliği yaptırın
- Termostat ve fan kontrolü

### 4. Hava Akışını Optimize Edin
- Hava filtresini temiz tutun
- Hava kanallarını kontrol edin

### 5. Motor Isınmasını Bekleyin
- Özellikle kış aylarında 2-3 dakika rölantide çalıştırın
- Isınmadan yükleme yapmayın

## Fiat Ducato Motor Bakım Periyotları

| Bakım Kalemi | Önerilen Periyot |
|--------------|------------------|
| **Motor Yağı + Filtre** | Her 10.000 km |
| **Hava Filtresi** | Her 20.000 km |
| **Yakıt Filtresi** | Her 20.000 km |
| **Polen Filtresi** | Her 20.000 km |
| **Triger Seti** | Her 80.000 km |
| **Enjektör Temizliği** | İhtiyaca göre |
| **DPF Temizliği** | İhtiyaca göre |

## Sonuç ve Öneriler

Fiat Ducato motorları **düzenli bakım** ile 500.000 km üzeri sorunsuz çalışabilir. Önemli olan:

✅ Periyodik bakımları aksatmamak  
✅ Orijinal veya OEM kalitesinde yedek parça kullanmak  
✅ Kaliteli yakıt ve yağ tercih etmek  
✅ Motor uyarılarını ciddiye almak  
✅ Yetkili servislerde bakım yaptırmak  

### Yönel Oto'dan Ducato Sahiplerine Özel Hizmetler

- 📦 Orijinal Fiat ve kaliteli yan sanayi yedek parçaları
- 🚚 Türkiye geneline aynı gün kargo
- 💰 Uygun fiyat ve havale indirimi
- ☎️ Uzman kadro ile teknik destek

**Ducato motorunuz için profesyonel bakım ve yedek parça ihtiyaçlarınızda:**  
📞 **0554 259 72 73**  
🌐 **yonelotoyedekparca.com**
    `,
    category: 'Fiat Ducato',
    tags: ['Ducato', 'Motor Bakımı', 'Dizel Motor', '2.3 MultiJet', '3.0 HDI'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '10 Aralık 2024',
    readTime: '10 dk',
    image: '/assets/d.png',
    featured: true,
  },
  'foton-traktor-yedek-parca-temini': {
    slug: 'foton-traktor-yedek-parca-temini',
    title: 'Foton Traktör Yedek Parça Temini ve Bakım Önerileri: Güvenilir Kaynaklardan Tedarik',
    excerpt: 'Foton traktör sahipleri için yedek parça bulma zorlukları, doğru tedarikçi seçimi ve traktörünüzün performansını artıracak bakım önerileri.',
    content: `# Foton Traktör Yedek Parça Rehberi

Foton traktörler, uygun fiyatları ve güçlü motorları ile Türkiye'de tarım sektöründe giderek daha çok tercih ediliyor. Bu rehberde Foton traktör yedek parçaları hakkında bilmeniz gereken her şeyi bulabilirsiniz.

## Foton Traktör Yedek Parça Kategorileri

### Motor Parçaları
- Piston ve segman takımları
- Silindir kapağı ve contaları
- Krank ve kam milleri
- Enjektör ve yakıt pompaları

### Hidrolik Sistem
- Hidrolik pompa ve motorlar
- Lift kol aksam parçaları
- Hidrolik silindirler
- Kontrol vanaları

### Fren ve Debriyaj
- Balata ve kampana
- Fren silindirleri
- Debriyaj diskler

Yönel Oto olarak Foton traktör yedek parçalarında geniş stok ve hızlı teslimat avantajı sunuyoruz.`,
    category: 'Foton Traktör',
    tags: ['Foton', 'Traktör', 'Yedek Parça', 'Tarım Makinaları'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '5 Aralık 2024',
    readTime: '7 dk',
    image: '/assets/foton.png',
    featured: true,
  },
  'karatas-traktor-hidrolik-sistem-bakimi': {
    slug: 'karatas-traktor-hidrolik-sistem-bakimi',
    title: 'Karataş Traktör Hidrolik Sistem Bakımı: Sorunsuz Çalışma için Profesyonel İpuçları',
    excerpt: 'Karataş traktörlerde hidrolik sistem bakımı, yağ değişimi, filtre seçimi ve sık karşılaşılan sorunların çözümleri hakkında detaylı bilgiler.',
    content: `# Karataş Traktör Hidrolik Sistem Bakımı

Karataş traktörlerde hidrolik sistem, tarla çalışmalarının verimliliği için kritik önem taşır. Doğru bakım ile hidrolik sistemin ömrü önemli ölçüde uzar.

## Hidrolik Yağ Değişimi

### Ne Zaman Değiştirilmeli?
- İlk 50 saat sonra
- Sonrasında her 500 saatte bir
- Yağ kirlendiğinde veya köpürdüğünde

### Hidrolik Yağ Seçimi
- SAE 10W-30 veya 15W-40
- Multigrade hidrolik yağları tercih edin
- Mevsime göre viskozite ayarı

## Sık Karşılaşılan Sorunlar

### Lift Kol Yavaş Çalışıyor
**Olası Nedenler:**
- Hidrolik pompa aşınması
- Yağ seviyesi düşük
- Filtre tıkanmış
- Vana ayar bozukluğu

### Hidrolik Kaçağı
- Hortum ve bağlantı kontrolleri
- Conta ve keçe değişimi
- Silindir sızdırmazlık kontrolü

Karataş traktör hidrolik yedek parçaları için bizimle iletişime geçin.`,
    category: 'Karataş Traktör',
    tags: ['Karataş', 'Hidrolik Sistem', 'Traktör Bakımı', 'Yağ Değişimi'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '1 Aralık 2024',
    readTime: '9 dk',
    image: '/assets/karat.png',
    featured: false,
  },
  'mutlu-aku-bakim-ve-kullanim-omru': {
    slug: 'mutlu-aku-bakim-ve-kullanim-omru',
    title: 'Mutlu Akü Bakımı ve Kullanım Ömrü Nasıl Uzatılır? Kış Aylarında Dikkat Edilmesi Gerekenler',
    excerpt: 'Mutlu akü bakım önerileri, şarj durumu kontrolü, kış aylarında alınacak önlemler ve akü ömrünü 2 katına çıkaracak pratik bilgiler.',
    content: `# Mutlu Akü Bakım Rehberi

Mutlu akü, Türkiye'nin en güvenilir akü markası olarak bilinir. Doğru bakım ile akü ömrünü 5-6 yıla kadar çıkarabilirsiniz.

## Akü Bakım İpuçları

### Günlük Kontroller
- Akü üstü temizliği
- Kutup başları kontrolü
- Sızdırma kontrolü

### Aylık Kontroller
- Şarj durumu testi
- Elektrolit seviyesi (bakım gerektiren akülerde)
- Kutup başlarının temizliği

## Kış Ayları Özel Bakım

### Soğuk Havada Dikkat Edilmesi Gerekenler
- Akü kapasitesi soğukta %50'ye düşer
- Motor çalıştırmadan önce farları yakarak ısıtın
- Kısa mesafe kullanımlardan kaçının
- Tam şarj durumunda tutun

### Yazın Akü Bakımı
- Sıcak havalarda su kaybı artar
- Elektrolit seviyesini kontrol edin
- Aşırı şarj problemine dikkat
- Motor bölmesi havalandırması önemli

## Akü Ömrünü Uzatan Faktörler

1. Düzenli şarj kontrolü
2. Kutup başlarının temiz tutulması
3. Kısa mesafe kullanımdan kaçınma
4. Araç uzun süre kullanılmazsa periyodik çalıştırma
5. Kaliteli şarj cihazı kullanımı

Mutlu akü çeşitleri ve fiyatları için mağazamızı ziyaret edin.`,
    category: 'Mutlu Akü',
    tags: ['Mutlu Akü', 'Akü Bakımı', 'Kış Bakımı', 'Şarj'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '25 Kasım 2024',
    readTime: '6 dk',
    image: '/images/60aku.png',
    featured: false,
  },
  'iveco-daily-fren-sistemi-bakimi': {
    slug: 'iveco-daily-fren-sistemi-bakimi',
    title: 'İveco Daily Fren Sistemi Bakımı: Balata, Disk ve Hidrolik Sistem Kontrolü',
    excerpt: 'İveco Daily ticari araçlarda fren sisteminin önemi, balata ve disk değişim zamanları, fren hidroliği bakımı ve güvenli sürüş için kritik kontroller.',
    content: `# İveco Daily Fren Sistemi Bakımı

İveco Daily gibi ticari araçlarda fren sistemi, hem sürücü hem de yük güvenliği açısından kritik öneme sahiptir. Düzenli bakım hayat kurtarır.

## Fren Balata Değişim Zamanı

### Balata Aşınma Belirtileri
- Fren yaparken ses geliyorsa
- Fren pedalı titreme yapıyorsa
- Balata kalınlığı 3mm'nin altına düşmüşse
- Fren mesafesi uzamışsa

### Değişim Periyodu
- Ön balata: 30.000-40.000 km
- Arka balata: 50.000-60.000 km
- Ağır yük taşımada daha sık

## Fren Diski Kontrolü

### Disk Aşınma Sınırları
- Minimum kalınlık değerlerini kontrol edin
- Disk üzerinde çatlak olmamalı
- Yüzey düzgün olmalı, çizik ve oyuk olmamalı

### Disk Değişimi
- Genellikle her 2 balata değişiminde 1 disk
- Titreşim varsa disk tornalama veya değişim
- Her iki tarafı birlikte değiştirin

## Fren Hidroliği

### Fren Hidroliği Bakımı
- Her 2 yılda bir fren hidroliği değişimi
- Renk kontrolü (koyulaşmış ise değişim zamanı)
- Nem absorbsiyonu (kaynatma noktası düşer)
- Sistem hava kaçağı kontrolü

### Fren Hortum ve Boruları
- Çatlak ve şişme kontrolü
- Pas ve korozyon kontrolü
- Sızdırma testi
- Bağlantı noktaları kontrolü

## Güvenli Fren İçin Tavsiyeler

1. Periyodik kontrolleri aksatmayın
2. Kaliteli yedek parça kullanın
3. Ağır fren yapmaktan kaçının
4. Dağ yollarında motor freni kullanın
5. Yük dağılımına dikkat edin

İveco Daily fren yedek parçaları için Yönel Oto'yu tercih edin.`,
    category: 'İveco Daily',
    tags: ['İveco', 'Fren Sistemi', 'Güvenlik', 'Balata'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '20 Kasım 2024',
    readTime: '8 dk',
    image: '/assets/dailly.png',
    featured: false,
  },
  'orijinal-yan-sanayi-yedek-parca-farklari': {
    slug: 'orijinal-yan-sanayi-yedek-parca-farklari',
    title: 'Orijinal ve Yan Sanayi Yedek Parça Farkları: Hangi Durumlarda Hangisi Tercih Edilmeli?',
    excerpt: 'Orijinal yedek parça mı yoksa kaliteli yan sanayi mı? Fiyat-performans dengesini nasıl kurarsınız? Hangi parçalarda orijinal şart? Tüm soruların cevapları.',
    content: `# Orijinal vs Yan Sanayi Yedek Parça Karşılaştırması

Araç sahipleri için en büyük ikilemlerden biri: Orijinal mi, yan sanayi mi? Her ikisinin de avantaj ve dezavantajları var.

## Orijinal Yedek Parça

### Avantajları
- %100 araç uyumluluğu garantisi
- Üretici garantisi (genellikle 2 yıl)
- Uzun kullanım ömrü
- Sorunsuz montaj
- Performans kaybı yok

### Dezavantajları
- Yüksek fiyat (%50-100 daha pahalı)
- Tedarik süresi uzun olabilir
- Sadece yetkili servislerde bulunur

## Yan Sanayi Yedek Parça

### Avantajları
- Ekonomik fiyat
- Geniş yelpaze ve seçenek
- Kolay bulunabilirlik
- Hızlı tedarik
- ISO/TSE sertifikalı markalar kaliteli

### Dezavantajları
- Kalite farklılıkları olabilir
- Garanti süresi daha kısa (1 yıl)
- Bazı parçalarda uyumluluk sorunu
- Performans farkı olabilir

## Hangi Parçalarda Orijinal Şart?

### Mutlaka Orijinal Kullanılmalı
1. Motor iç aksam (piston, silindir, krank)
2. Enjektör ve yakıt pompası
3. Turbo ve kompresör
4. ECU ve elektronik modüller
5. Güvenlik sistemleri (ABS, airbag)

### Yan Sanayi Tercih Edilebilir
1. Filtreler (kaliteli markalarda)
2. Fren balata ve diskleri
3. Amortisör ve yaylar
4. Egzoz sistemleri
5. Aydınlatma ve silecekler
6. Bakım malzemeleri

## Kaliteli Yan Sanayi Markaları

- **Filtreler**: Mann Filter, Bosch, Mahle
- **Fren**: Brembo, TRW, ATE, Valeo
- **Amortisör**: Sachs, Bilstein, Monroe
- **Yağ**: Shell, Mobil, Castrol

## Karar Verme Kriterleri

### Orijinal Tercih Edin
- Aracınız garantide ise
- Kritik güvenlik parçası ise
- Motor ve şanzıman parçası ise
- Aracınızı uzun süre kullanacaksanız

### Yan Sanayi Tercih Edebilirsiniz
- Bütçeniz kısıtlı ise
- Sarf malzemesi ise
- Aracınız eski ve değeri düşük ise
- Kaliteli marka seçimi yapabiliyorsanız

## Yönel Oto Önerisi

50+ yıllık tecrübemizle tavsiyemiz: **Hibrit yaklaşım**
- Kritik parçalarda orijinal
- Bakım malzemelerinde kaliteli yan sanayi
- Profesyonel danışmanlık alın
- Fiyat-kalite dengesini doğru kurun

Her iki ürün grubunda da geniş stoğumuz var. Doğru seçim için bizi arayın!`,
    category: 'Genel',
    tags: ['Orijinal Parça', 'Yan Sanayi', 'Kalite', 'Fiyat'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '15 Kasım 2024',
    readTime: '12 dk',
    image: '/assets/logo.webp',
    featured: true,
  },
  'ducato-salincak-ve-rotil-degisimi': {
    slug: 'ducato-salincak-ve-rotil-degisimi',
    title: 'Fiat Ducato Ön Takım: Salıncak, Rotil ve Bijon Değişimi Zamanı Nasıl Anlaşılır?',
    excerpt: 'Ducato ön takım parçalarının (salıncak, rotil, bijon, rot başı) yıpranma belirtileri, değişim zamanı ve kaliteli yedek parça seçimi hakkında bilmeniz gerekenler.',
    content: `# Fiat Ducato Ön Takım Rehberi

Fiat Ducato'da ön takım parçaları, hem konfor hem de güvenlik açısından kritik öneme sahiptir. Doğru zamanda müdahale etmek büyük tamir masraflarını önler.

## Ön Takım Parçaları

### Salıncak (Köprü Yatağı)
- Tekerlekleri karoserise bağlar
- Alt ve üst salıncak mevcuttur
- Ömrü: 80.000-120.000 km

### Rotil (Rot Başı)
- Direksiyon kutusu ile tekerleği bağlar
- İç ve dış rotil vardır
- Ömrü: 60.000-80.000 km

### Bijon (Bilyalı Mafsal)
- Salıncağı göbeğe bağlar
- Aşınması kontrolör kaybına yol açar
- Ömrü: 80.000-100.000 km

## Aşınma Belirtileri

### Salıncak Aşınması
- Viraj alırken gıcırtı sesi
- Kasis geçerken tok ses
- Direksiyon titremesi
- Lastik iç kısmı aşınması

### Rotil Arızası
- Direksiyonda boşluk hissi
- Virajda yalpalama
- Lastik kenarlarında aşırı aşınma
- Direksiyon çekme problemi

### Bijon Problemi
- Tekerlek oynatma (kaldırıldığında)
- Sürüş sırasında çarpma hissi
- Fren mesafesinde artış
- Ani direksiyon kayması

## Ön Takım Kontrolü

### Görsel Kontrol
- Lastiği kaldırıp oynatma testi
- Körük çatlağı kontrolü
- Yağ sızıntısı kontrolü
- Paso ayar kontrolü

### Test Sürüşü
- Kasis geçişi
- Viraj alma
- Fren testi
- Yüksek hız dengesi

## Değişim Önerileri

### Toplu Değişim Avantajlı
- Ön takım komple değişim daha ekonomik
- İş gücünden tasarruf
- Tüm parçalar yeni olur
- Paso ayarı bir kez

### Dikkat Edilmesi Gerekenler
- Kaliteli marka seçimi (TRW, Lemförder)
- Montaj sonrası mutlaka paso ayarı
- Sıkma torklarına uyum
- Test sürüşü yapılmalı

## Paso Ayarı

Ön takım değişimi sonrası **mutlaka** paso ayarı yapılmalıdır:
- Lastik ömrünü uzatır
- Yakıt tüketimini azaltır
- Sürüş konforunu artırır
- Güvenli sürüş sağlar

## Parça Ömürleri

| Parça | Ortalama Değişim Süresi |
|-------|------------------------|
| Salıncak | 100.000 km |
| Rotil | 70.000 km |
| Bijon | 90.000 km |
| Komple Set | Kullanım durumuna göre |

Fiat Ducato ön takım yedek parçaları için Yönel Oto ile iletişime geçin.`,
    category: 'Fiat Ducato',
    tags: ['Ducato', 'Ön Takım', 'Salıncak', 'Rotil'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '10 Kasım 2024',
    readTime: '7 dk',
    image: '/assets/d.png',
    featured: false,
  },
  'traktor-filtre-bakimi-rehberi': {
    slug: 'traktor-filtre-bakimi-rehberi',
    title: 'Traktör Filtre Bakımı: Hava, Yağ, Yakıt ve Hidrolik Filtre Değişim Aralıkları',
    excerpt: 'Foton ve Karataş traktörlerde filtre bakımının önemi, doğru filtre seçimi, değişim periyotları ve filtrelerin motor ömrüne etkisi hakkında kapsamlı rehber.',
    content: `# Traktör Filtre Bakım Rehberi

Traktörlerde filtre bakımı, motor ömrünü ve performansını doğrudan etkileyen en önemli bakım işlemlerinden biridir. Doğru filtre kullanımı ve zamanında değişim, pahalı tamirlerden korur.

## Filtre Türleri ve İşlevleri

### 1. Hava Filtresi
**Görevi**: Motora giren havayı temizler
- Toz ve kiri tutar
- Motor verimini korur
- Yakıt ekonomisi sağlar

**Değişim Periyodu**:
- Toz yoğun ortam: Her 100 saat
- Normal kullanım: Her 200-250 saat
- Yıllık: En az 1 kez

### 2. Yağ Filtresi
**Görevi**: Motor yağındaki partikülleri tutar
- Metal parçacıkları filtreler
- Yağı temiz tutar
- Motor aşınmasını önler

**Değişim Periyodu**:
- Her yağ değişiminde (200-250 saat)
- Yılda en az 1 kez

### 3. Yakıt Filtresi
**Görevi**: Yakıttaki kirliği ve suyu tutar
- Enjektör ömrünü uzatır
- Motor performansını korur
- Yakıt sistemini temiz tutar

**Değişim Periyodu**:
- İlk 50 saatte
- Sonra her 400-500 saat
- Yakıt kalitesi düşükse daha sık

### 4. Hidrolik Filtre
**Görevi**: Hidrolik yağını temizler
- Pompa ömrünü uzatır
- Vana ve silindiri korur
- Sistem verimliliğini artırır

**Değişim Periyodu**:
- İlk 50 saatte
- Sonra her 400-500 saat
- Yağ değişiminde mutlaka

## Filtre Seçim Kriterleri

### Kaliteli Filtre Özellikleri
1. **Filtrasyon Etkinliği**: Micron değeri düşük olmalı
2. **Dayanıklılık**: Uzun ömürlü malzeme
3. **Flow Kapasitesi**: Yeterli geçiş hızı
4. **Sertifika**: ISO, TSE onaylı

### Önerilen Markalar
- **Hava Filtreleri**: Mann Filter, Donaldson, Mahle
- **Yağ Filtreleri**: Bosch, Mann, Filtron
- **Yakıt Filtreleri**: Mann, Bosch, Purflux
- **Hidrolik Filtreler**: Hydac, Parker, Donaldson

## Filtre Değişim İşlemleri

### Hava Filtresi Değişimi
1. Hava filtre kabını açın
2. Eski filtreyi çıkarın
3. İç kısmı temizleyin
4. Yeni filtreyi yerleştirin
5. Kapağı sıkıca kapatın

### Yağ Filtresi Değişimi
1. Motoru ısıtın
2. Eski yağı boşaltın
3. Filtre anahtarı ile eski filtreyi sökün
4. Yeni filtrenin contasını yağlayın
5. Elle sıkın, anahtar kullanmayın

### Yakıt Filtresi Değişimi
1. Yakıt musluğunu kapatın
2. Eski filtreyi sökün
3. Bağlantıları temizleyin
4. Yeni filtreyi takın
5. Sistem hava alma yapın

## Filtre Bakımının Önemi

### Filtre Değiştirilmezse
- Motor gücü kaybı (%15-20)
- Yakıt tüketimi artışı
- Motor aşınması hızlanır
- Pahalı tamir masrafları
- Motor ömrü kısalır

### Düzenli Bakım Faydaları
- Motor ömrü 2 katına çıkar
- Yakıt ekonomisi %10 artar
- Tamir masrafları azalır
- Verimli çalışma
- Sorunsuz sezon

## Mevsimsel Filtre Bakımı

### Hasat Öncesi Kontrol
- Tüm filtreleri kontrol edin
- Gerekirse değiştirin
- Sistemleri temizleyin
- Yağ seviyelerini kontrol edin

### Kış Hazırlığı
- Yakıt filtresini mutlaka değiştirin
- Hava filtresini kontrol edin
- Hidrolik filtresini kontrol edin
- Nem alıcıları temizleyin

## Filtre Bakımının Önemi

Düzenli filtre bakımı ile:
- Motor ömrü 2 katına çıkar
- Yakıt ekonomisi %10-15 artar
- Pahalı tamir masraflarından korunursunuz
- Motor performansı maksimum seviyede kalır

**Sonuç**: Filtre bakımı, traktör bakımının en önemli ve vazgeçilmez kısmıdır. İhmal edilmesi durumunda enjektör ve pompa gibi pahalı parçalarda arızalara yol açabilir.

Foton ve Karataş traktör filtreleri için Yönel Oto'nun geniş stoğundan yararlanın!`,
    category: 'Tarım Makinaları',
    tags: ['Traktör', 'Filtre', 'Bakım', 'Foton', 'Karataş'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '5 Kasım 2024',
    readTime: '9 dk',
    image: '/assets/foton.png',
    featured: false,
  },
};

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    };
  }

  return {
    title: `${post.title} | Yönel Oto Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://yonelotoyedekparca.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  // Related posts (same category)
  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: `https://yonelotoyedekparca.com${post.image}`,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Yönel Oto Yedek Parça',
              logo: {
                '@type': 'ImageObject',
                url: 'https://yonelotoyedekparca.com/assets/logo.webp',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://yonelotoyedekparca.com/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-primary font-semibold">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
            className="object-contain md:object-cover opacity-40"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-5xl">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <PersonIcon sx={{ fontSize: 20 }} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarTodayIcon sx={{ fontSize: 20 }} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <AccessTimeIcon sx={{ fontSize: 20 }} />
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="max-w-none">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: (() => {
                    let html = post.content;
                    
                    // Başlıklar
                    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
                    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
                    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
                    
                    // Bold
                    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                    
                    // Liste itemleri
                    const lines = html.split('\n');
                    let inList = false;
                    const processedLines = [];
                    
                    for (const line of lines) {
                      if (line.startsWith('- ')) {
                        if (!inList) {
                          processedLines.push('<ul>');
                          inList = true;
                        }
                        processedLines.push(`<li>${line.substring(2)}</li>`);
                      } else {
                        if (inList) {
                          processedLines.push('</ul>');
                          inList = false;
                        }
                        processedLines.push(line);
                      }
                    }
                    if (inList) processedLines.push('</ul>');
                    
                    html = processedLines.join('\n');
                    
                    // Tablolar (basit 3 sütunlu)
                    html = html.replace(/\|(.+?)\|(.+?)\|(.+?)\|/g, (match, c1, c2, c3) => {
                      return `<tr><td>${c1.trim()}</td><td>${c2.trim()}</td><td>${c3.trim()}</td></tr>`;
                    });
                    html = html.replace(/(<tr>[\s\S]+?<\/tr>)/g, '<table><thead>$1</thead><tbody></tbody></table>');
                    
                    // Paragraflar
                    html = html.split('\n\n').map(para => {
                      if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<table')) {
                        return para;
                      }
                      return para ? `<p>${para}</p>` : '';
                    }).join('\n');
                    
                    return html;
                  })()
                }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-3 flex-wrap">
                <LocalOfferIcon sx={{ fontSize: 20, color: 'gray' }} />
                <span className="text-gray-600 font-semibold">Etiketler:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-4">
                <ShareIcon sx={{ fontSize: 20, color: 'gray' }} />
                <span className="text-gray-600 font-semibold">Paylaş:</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                  Twitter
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp
                </button>
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-r from-primary to-red-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Yedek Parça İhtiyacınız mı Var?</h3>
              <p className="mb-6 text-red-50">
                50+ yıllık tecrübemizle İveco Daily, Ducato, Foton ve Karataş Traktör için en kaliteli yedek parçaları sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905542597273"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                >
                  📞 Hemen Arayın
                </a>
                <Link
                  href="/products"
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors text-center"
                >
                  🛒 Ürünleri İnceleyin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">İlgili Yazılar</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              <ArrowBackIcon sx={{ fontSize: 20 }} />
              Tüm Blog Yazılarına Dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

