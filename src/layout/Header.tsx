import { Box, Typography } from '@mui/material';

interface HeaderProps {
  headerHeight: number;
}

export default function Header({ headerHeight }: HeaderProps) {
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
      <Typography variant='h4'>Dashboard Demo</Typography>
    </Box>
  );
}
