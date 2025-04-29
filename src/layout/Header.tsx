import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  headerHeight: number;
  onMenuClick: () => void;
}

export default function Header({ headerHeight, onMenuClick }: HeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: headerHeight,
        paddingInline: 8,
        borderBottom: '2px solid',
      }}
    >
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={onMenuClick}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant='h4'>Dashboard Demo</Typography>
    </Box>
  );
}
