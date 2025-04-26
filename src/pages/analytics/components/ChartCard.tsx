import { Box, Paper, Typography } from '@mui/material';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <Box component={Paper} sx={{ border: '1px solid', p: 2 }}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
