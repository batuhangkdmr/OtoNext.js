'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { Category } from '@/lib/models/Category';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createCategory, updateCategory, deleteCategory } from './actions';

interface Props {
  categories: Category[];
}

interface CategoryFormData {
  id?: number;
  name: string;
  parentId?: number;
  isSubCategory: boolean;
}

export default function CategoriesTable({ categories }: Props) {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    isSubCategory: false,
  });
  const [loading, setLoading] = useState(false);

  const handleOpenDialog = (data?: CategoryFormData) => {
    if (data) {
      setFormData(data);
    } else {
      setFormData({ name: '', isSubCategory: false });
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setFormData({ name: '', isSubCategory: false });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      alert('Kategori adı gerekli!');
      return;
    }

    setLoading(true);

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    if (formData.parentId) {
      formDataObj.append('parentId', formData.parentId.toString());
    }

    const result = formData.id
      ? await updateCategory(formData.id, formDataObj)
      : await createCategory(formDataObj);

    setLoading(false);

    if (result.success) {
      alert(result.message);
      handleCloseDialog();
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  const handleDeleteCategory = async (categoryId: number, categoryName: string) => {
    if (!confirm(`"${categoryName}" markasını silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz ve tüm alt kategoriler de silinecektir!`)) {
      return;
    }

    setLoading(true);
    const result = await deleteCategory(categoryId);
    setLoading(false);

    if (result.success) {
      alert(result.message);
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  const handleEditCategory = (category: Category) => {
    handleOpenDialog({
      id: category.Id,
      name: category.Name,
      parentId: category.ParentId || undefined,
      isSubCategory: !!category.ParentId,
    });
  };

  const handleAddSubCategory = (parentId: number, parentName: string) => {
    handleOpenDialog({
      name: '',
      parentId: parentId,
      isSubCategory: true,
    });
  };

  const handleEditSubCategory = (subCategory: { Id: number; Name: string; ParentId: number }) => {
    handleOpenDialog({
      id: subCategory.Id,
      name: subCategory.Name,
      parentId: subCategory.ParentId,
      isSubCategory: true,
    });
  };

  const handleDeleteSubCategory = async (subCategoryId: number, subCategoryName: string) => {
    if (!confirm(`"${subCategoryName}" alt kategorisini silmek istediğinize emin misiniz?`)) {
      return;
    }

    setLoading(true);
    const result = await deleteCategory(subCategoryId);
    setLoading(false);

    if (result.success) {
      alert(result.message);
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  return (
    <>
      {/* Add Category Button */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
          disabled={loading}
          sx={{
            bgcolor: '#dc2626',
            '&:hover': { bgcolor: '#b91c1c' },
          }}
        >
          Yeni Marka Ekle
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f9fafb' }}>
              <TableCell sx={{ fontWeight: 700, fontSize: '14px' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: '14px' }}>Marka Adı</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: '14px' }}>Alt Kategoriler</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: '14px' }}>İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow 
                key={category.Id}
                sx={{ 
                  '&:hover': { bgcolor: '#f9fafb' },
                  borderBottom: '1px solid #e5e7eb'
                }}
              >
                <TableCell sx={{ fontSize: '14px' }}>{category.Id}</TableCell>
                <TableCell sx={{ fontSize: '14px', fontWeight: 600 }}>{category.Name}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.SubCategories && category.SubCategories.length > 0 ? (
                      category.SubCategories.map((sub) => (
                        <Chip
                          key={sub.Id}
                          label={sub.Name}
                          size="small"
                          sx={{
                            bgcolor: '#f3f4f6',
                            color: '#374151',
                            fontWeight: 500,
                            '& .MuiChip-deleteIcon': {
                              color: '#dc2626',
                              '&:hover': { color: '#b91c1c' }
                            }
                          }}
                          onDelete={() => handleDeleteSubCategory(sub.Id, sub.Name)}
                          deleteIcon={
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                gap: 0.5,
                                alignItems: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              <EditIcon 
                                sx={{ fontSize: 16 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditSubCategory(sub);
                                }}
                              />
                              <DeleteIcon sx={{ fontSize: 16 }} />
                            </Box>
                          }
                        />
                      ))
                    ) : (
                      <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '13px' }}>
                        Alt kategori yok
                      </Typography>
                    )}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button
                      size="small"
                      startIcon={<AddIcon />}
                      onClick={() => handleAddSubCategory(category.Id, category.Name)}
                      disabled={loading}
                      sx={{
                        color: '#dc2626',
                        fontSize: '12px',
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': { bgcolor: '#fee2e2' }
                      }}
                    >
                      Alt Kategori Ekle
                    </Button>
                    <IconButton
                      size="small"
                      onClick={() => handleEditCategory(category)}
                      disabled={loading}
                      sx={{ color: '#3b82f6' }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteCategory(category.Id, category.Name)}
                      disabled={loading}
                      sx={{ color: '#dc2626' }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: '20px' }}>
          {formData.id 
            ? (formData.isSubCategory ? 'Alt Kategori Düzenle' : 'Marka Düzenle')
            : (formData.isSubCategory ? 'Yeni Alt Kategori' : 'Yeni Marka')}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={formData.isSubCategory ? "Alt Kategori Adı" : "Marka Adı"}
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={loading}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDialog} disabled={loading}>
            İptal
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained" 
            disabled={loading}
            sx={{ bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}
          >
            {loading ? 'Kaydediliyor...' : 'Kaydet'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

