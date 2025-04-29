import { Box, Stack, Typography } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
      <Typography variant='h3' gutterBottom>
        About Us
      </Typography>
      <Typography variant='subtitle1' color='text.secondary' gutterBottom>
        Empowering businesses with data-driven decisions
      </Typography>
      <Stack direction='column' spacing={2} sx={{ my: 3 }}>
        <Typography>
          We are a leading provider of innovative analytics solutions for modern
          enterprises. Our mission is to help organizations unlock the full
          potential of their data through intuitive dashboards, actionable
          insights, and seamless integrations.
        </Typography>
        <Typography>
          Our team of passionate engineers, designers, and data scientists is
          dedicated to delivering products that are not only powerful but also
          easy to use. We believe that great analytics should be accessible to
          everyone, regardless of technical background.
        </Typography>
        <Typography>
          With customers in over 30 countries and a commitment to continuous
          improvement, we are your trusted partner on the journey to smarter
          business decisions.
        </Typography>
      </Stack>
      <Typography variant='caption' color='text.secondary'>
        © 2025 Company. All rights reserved.
      </Typography>
    </Box>
  );
}
