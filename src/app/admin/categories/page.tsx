import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

export default async function AdminCategoriesPage() {
  const categories = await CategoriesRepository.findAll();

  const renderCategories = (cats: any[], level = 0) => {
    return cats.map((cat) => (
      <Box key={cat.Id}>
        <ListItem sx={{ pl: level * 4 }}>
          <ListItemText
            primary={cat.Name}
            secondary={`ID: ${cat.Id}`}
          />
        </ListItem>
        {cat.SubCategories && cat.SubCategories.length > 0 && renderCategories(cat.SubCategories, level + 1)}
      </Box>
    ));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Kategori Yönetimi
        </Typography>
      </Box>

      <Paper>
        <List>
          {renderCategories(categories)}
        </List>
      </Paper>

      <Box sx={{ mt: 4 }}>
        <Button component={Link} href="/admin" variant="outlined">
          ← Panele Dön
        </Button>
      </Box>
    </Container>
  );
}

