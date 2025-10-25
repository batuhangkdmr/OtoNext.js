/**
 * Türkçe karakterleri destekleyen slug oluşturucu
 * Örnek: "ŞANZIMAN KOVANI ÖN KAPAK TAPASI" -> "sanziman-kovani-on-kapak-tapasi"
 */
export function slugify(text: string): string {
  const turkishMap: { [key: string]: string } = {
    'ç': 'c', 'Ç': 'c',
    'ğ': 'g', 'Ğ': 'g',
    'ı': 'i', 'İ': 'i',
    'ö': 'o', 'Ö': 'o',
    'ş': 's', 'Ş': 's',
    'ü': 'u', 'Ü': 'u',
  };

  return text
    .split('')
    .map(char => turkishMap[char] || char)
    .join('')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Özel karakterleri kaldır
    .replace(/\s+/g, '-')      // Boşlukları tire ile değiştir
    .replace(/-+/g, '-')       // Birden fazla tireyi tek tire yap
    .replace(/^-+|-+$/g, ''); // Başta ve sondaki tireleri kaldır
}

/**
 * Ürün için SEO-friendly URL oluştur
 * Örnek: generateProductUrl({ Id: 598, Name: "ŞANZIMAN KOVANI" })
 * Sonuç: "sanziman-kovani-598"
 */
export function generateProductUrl(product: { Id: number; Name: string }): string {
  const slug = slugify(product.Name);
  return `${slug}-${product.Id}`;
}

/**
 * URL slug'ından ID çıkar
 * Örnek: extractIdFromSlug("sanziman-kovani-598") -> 598
 */
export function extractIdFromSlug(slug: string): number | null {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart, 10);
  return isNaN(id) ? null : id;
}

