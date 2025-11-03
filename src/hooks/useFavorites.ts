'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/models/Product';

const STORAGE_KEY = 'yonel_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Favorites parse error:', error);
      }
    }
  }, []);

  // Check if product is favorite
  const isFavorite = (productId: number): boolean => {
    return favorites.some(p => p.Id === productId);
  };

  // Toggle favorite
  const toggleFavorite = (product: Product) => {
    let updated: Product[];
    
    if (isFavorite(product.Id)) {
      // Remove
      updated = favorites.filter(p => p.Id !== product.Id);
    } else {
      // Add
      updated = [...favorites, product];
    }
    
    setFavorites(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // Clear all favorites
  const clearAll = () => {
    setFavorites([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearAll,
    count: favorites.length,
  };
}

