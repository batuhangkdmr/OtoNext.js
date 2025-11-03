import { Card, CardContent, Box, Skeleton } from '@mui/material';

export default function ProductCardSkeleton() {
  return (
    <Card 
      sx={{ 
        height: '100%',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
      }}
    >
      {/* Image skeleton with gradient background */}
      <Skeleton 
        variant="rectangular" 
        height={280}
        sx={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}
      />
      
      <CardContent sx={{ p: 2.5 }}>
        {/* Category chips */}
        <Box sx={{ display: 'flex', gap: 0.75, mb: 1.5 }}>
          <Skeleton variant="rectangular" width={90} height={24} sx={{ borderRadius: 2 }} />
          <Skeleton variant="rectangular" width={70} height={24} sx={{ borderRadius: 2 }} />
        </Box>
        
        {/* Title */}
        <Skeleton variant="text" height={32} sx={{ mb: 0.5 }} />
        <Skeleton variant="text" height={32} width="70%" sx={{ mb: 1 }} />
        
        {/* Description */}
        <Skeleton variant="text" height={20} sx={{ mb: 0.5 }} />
        <Skeleton variant="text" height={20} width="90%" sx={{ mb: 2 }} />
        
        {/* Info banner */}
        <Skeleton 
          variant="rectangular" 
          height={40} 
          sx={{ borderRadius: 2, mb: 2 }} 
        />
        
        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Skeleton 
            variant="rectangular" 
            width={44} 
            height={44} 
            sx={{ borderRadius: 2 }} 
          />
          <Skeleton 
            variant="rectangular" 
            height={44} 
            sx={{ flex: 1, borderRadius: 2 }} 
          />
        </Box>
      </CardContent>
    </Card>
  );
}

