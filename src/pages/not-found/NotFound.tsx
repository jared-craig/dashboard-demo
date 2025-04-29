import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg) scale(1.5);
  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  75% {
    transform: rotate(270deg) scale(1.5);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography
        variant='h1'
        color='error'
        sx={{
          animation: `${bounce} 5s linear infinite`,
        }}
      >
        404
      </Typography>
    </Box>
  );
}
