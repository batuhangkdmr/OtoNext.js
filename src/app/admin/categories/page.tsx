import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import CategoriesTable from './CategoriesTable';

// Force dynamic rendering to avoid build-time database connection
export const dynamic = 'force-dynamic';

export default async function AdminCategoriesPage() {
  const categories = await CategoriesRepository.findAll();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
          Marka Yönetimi
        </Typography>
      </Box>

      <CategoriesTable categories={categories} />
    </Box>
  );
}

