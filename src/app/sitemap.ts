import { MetadataRoute } from 'next';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import { slugify } from '@/lib/utils/slugify';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yonelotoyedekparca.com';
  const currentDate = new Date();

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  let categoryPages: MetadataRoute.Sitemap = [];
  let productPages: MetadataRoute.Sitemap = [];

  try {
    // Fetch all categories
    const categories = await CategoriesRepository.findAll();

    // Helper function to find parent category
    const findParentCategory = (categoryId: number): any | null => {
      for (const cat of categories) {
        if (cat.SubCategories) {
          for (const sub of cat.SubCategories) {
            if (sub.Id === categoryId) {
              return cat;
            }
          }
        }
      }
      return null;
    };

    // Generate category URLs
    const allCategories: any[] = [];
    categories.forEach((cat) => {
      allCategories.push(cat);
      if (cat.SubCategories) {
        allCategories.push(...cat.SubCategories);
      }
    });

    categoryPages = allCategories.map((category) => {
      const parentCat = findParentCategory(category.Id);
      let url = `${baseUrl}/urunler/${slugify(category.Name)}`;
      
      // If this is a subcategory, include parent in URL
      if (parentCat) {
        url = `${baseUrl}/urunler/${slugify(parentCat.Name)}/${slugify(category.Name)}`;
      }

      return {
        url,
        lastModified: category.CreatedAt || currentDate,
        changeFrequency: 'daily' as const,
        priority: parentCat ? 0.9 : 0.85,
      };
    });

    // Fetch all products
    const { products } = await ProductsRepository.findAll({ limit: 10000 });

    // Generate product URLs
    productPages = products
      .filter((product) => product.Id && product.Name)
      .map((product) => ({
        url: `${baseUrl}/products/${slugify(product.Name)}-${product.Id}`,
        lastModified: product.CreatedAt || currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    console.log(`✅ Sitemap generated: ${staticPages.length} static, ${categoryPages.length} categories, ${productPages.length} products`);
  } catch (error) {
    console.error('❌ Sitemap generation error:', error);
    // Return at least static pages if database fails
  }

  // Combine all pages
  return [...staticPages, ...categoryPages, ...productPages];
}

