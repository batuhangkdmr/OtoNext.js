'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items?: BreadcrumbItem[];
  currentPage?: string;
}

export default function Breadcrumb({ items, currentPage }: Props) {
  const pathname = usePathname();

  // Eğer custom items verilmemişse, pathname'den otomatik oluştur
  const breadcrumbItems = items || generateBreadcrumbs(pathname);

  // Schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://yonelotoyedekparca.com/',
      },
      ...breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `https://yonelotoyedekparca.com${item.href}` : undefined,
      })),
    ],
  };

  // Add current page if provided
  if (currentPage) {
    breadcrumbSchema.itemListElement.push({
      '@type': 'ListItem',
      position: breadcrumbItems.length + 2,
      name: currentPage,
      item: undefined,
    });
  }

  return (
    <>
      {/* Breadcrumb Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Box sx={{ mb: 3, py: 2 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: '#a80000',
          },
        }}
      >
        {/* Ana Sayfa */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#666',
            transition: 'color 0.2s',
          }}
          className="hover:text-primary"
        >
          <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} />
          Ana Sayfa
        </Link>

        {/* Dinamik breadcrumb items */}
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          if (isLast || !item.href) {
            return (
              <Typography
                key={index}
                color="text.primary"
                sx={{ fontWeight: 600, color: '#a80000' }}
              >
                {item.label}
              </Typography>
            );
          }

          return (
            <Link
              key={index}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: '#666',
                transition: 'color 0.2s',
              }}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          );
        })}

        {/* Current Page */}
        {currentPage && (
          <Typography color="text.primary" sx={{ fontWeight: 600, color: '#a80000' }}>
            {currentPage}
          </Typography>
        )}
      </Breadcrumbs>
    </Box>
    </>
  );
}

// Otomatik breadcrumb oluşturma fonksiyonu
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  const pathMap: Record<string, string> = {
    products: 'Ürünler',
    urunler: 'Ürünler',
    about: 'Hakkımızda',
    hakkimizda: 'Hakkımızda',
    contact: 'İletişim',
    iletisim: 'İletişim',
    blog: 'Blog',
    admin: 'Admin Panel',
    categories: 'Kategoriler',
  };

  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const isLast = index === paths.length - 1;

    breadcrumbs.push({
      label: pathMap[path] || path,
      href: isLast ? undefined : currentPath,
    });
  });

  return breadcrumbs;
}

