'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/models/Product';

const STORAGE_KEY = 'yonel_recently_viewed';
const MAX_ITEMS = 10;

export function useRecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRecentProducts(JSON.parse(stored));
      } catch (error) {
        console.error('Recently viewed parse error:', error);
      }
    }
  }, []);

  // Add product to recently viewed
  const addProduct = (product: Product) => {
    const updated = [
      product,
      ...recentProducts.filter(p => p.Id !== product.Id)
    ].slice(0, MAX_ITEMS);
    
    setRecentProducts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // Clear all
  const clearAll = () => {
    setRecentProducts([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    recentProducts,
    addProduct,
    clearAll,
  };
}

