import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import SliderImagesRepository from '@/lib/repositories/SliderImagesRepository';

export default async function AdminSlidersPage() {
  const sliders = await SliderImagesRepository.findAll();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Slider Yönetimi
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {sliders.map((slider) => (
          <Grid item key={slider.Id} xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={slider.ImageUrl}
                alt="Slider"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  ID: {slider.Id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Button component={Link} href="/admin" variant="outlined">
          ← Panele Dön
        </Button>
      </Box>
    </Container>
  );
}

