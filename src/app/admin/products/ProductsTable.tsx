'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/models/Product';
import { deleteProduct } from './actions';
import { useRouter } from 'next/navigation';

interface Props {
  products: Product[];
}

export default function ProductsTable({ products }: Props) {
  const router = useRouter();

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`"${name}" ürününü silmek istediğinize emin misiniz?`)) {
      return;
    }

    const result = await deleteProduct(id);
    if (result.success) {
      alert(result.message);
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Ürün Adı</TableCell>
            <TableCell>Görsel</TableCell>
            <TableCell>Kategori</TableCell>
            <TableCell>Alt Kategori</TableCell>
            <TableCell align="right">İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.Id}>
              <TableCell>{product.Id}</TableCell>
              <TableCell>{product.Name}</TableCell>
              <TableCell>
                {product.ImageUrl ? (
                  <div style={{ position: 'relative', width: 60, height: 60 }}>
                    <Image
                      src={product.ImageUrl}
                      alt={product.Name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <span style={{ color: '#999', fontSize: '12px' }}>Görsel yok</span>
                )}
              </TableCell>
              <TableCell>{product.CategoryName || '-'}</TableCell>
              <TableCell>{product.SubCategoryName || '-'}</TableCell>
              <TableCell align="right">
                <IconButton
                  component={Link}
                  href={`/admin/products/edit/${product.Id}`}
                  color="primary"
                  size="small"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(product.Id, product.Name)}
                  color="error"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

