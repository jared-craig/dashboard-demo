import { Box, Typography } from '@mui/material';

interface FooterProps {
  footerHeight: number;
}

export default function Footer({ footerHeight }: FooterProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: footerHeight,
        borderTop: '2px solid',
      }}
    >
      <Typography variant='caption'>
        © {new Date().getFullYear()} Jared Craig
      </Typography>
    </Box>
  );
}
