import { redirect } from 'next/navigation';

// Redirect /products to /urunler (SEO-friendly Turkish URL)
export default function ProductsPage() {
  redirect('/urunler');
}

