'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import { Product } from '@/lib/models/Product';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea component={Link} href={`/products/${product.Id}`} sx={{ flexGrow: 1 }}>
        {product.ImageUrl ? (
          <CardMedia
            component="img"
            height="200"
            image={product.ImageUrl}
            alt={product.Name}
            sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
          />
        ) : (
          <CardMedia
            sx={{
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#f5f5f5',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Görsel Yok
            </Typography>
          </CardMedia>
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {product.Name}
          </Typography>
          {product.Description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {product.Description}
            </Typography>
          )}
          {product.CategoryName && (
            <Chip
              label={product.CategoryName}
              size="small"
              color="primary"
              sx={{ mt: 1 }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

