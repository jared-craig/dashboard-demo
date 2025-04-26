import { Box, Typography } from '@mui/material';
import { Link } from 'react-router';

interface SideDrawerItemProps {
  title: string;
  to: string;
}

export default function SideDrawerItem({ title, to }: SideDrawerItemProps) {
  return (
    <Box
      sx={{
        p: '8px 16px',
        '&:hover': { backgroundColor: 'lightblue' },
      }}
    >
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant='h6'>{title}</Typography>
      </Link>
    </Box>
  );
}
