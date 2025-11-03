'use client';

import Pagination from '@mui/material/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  currentPage: number;
  totalPages: number;
  categorySlug?: string;
}

export default function ProductsPagination({ currentPage, totalPages, categorySlug }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    
    let url = '/urunler';
    if (categorySlug) {
      url += `/${categorySlug}`;
    }
    url += `?${params.toString()}`;
    
    router.push(url);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      size="large"
    />
  );
}

