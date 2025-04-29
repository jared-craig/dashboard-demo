import { Box, Typography, List, ListItem, Paper, Button } from '@mui/material';
import { Link } from 'react-router';

export default function Home() {
  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
      <Typography variant='h3' gutterBottom>
        Welcome to Dashboard Demo
      </Typography>
      <Typography gutterBottom>
        This is a sample dashboard application. Here you can:
      </Typography>
      <List>
        <ListItem>Track quarterly sales across regions</ListItem>
        <ListItem>Visualize sales trends over time</ListItem>
        <ListItem>See market share breakdowns</ListItem>
        <ListItem>Monitor customer satisfaction</ListItem>
      </List>
      <Box
        component={Paper}
        sx={{ my: 4, p: 2, border: '2px solid', borderRadius: 2 }}
      >
        <Typography variant='h5' gutterBottom>
          Featured: Analytics
        </Typography>
        <Typography variant='body2' gutterBottom>
          Explore interactive charts and insights on the <b>Analytics</b> page.
        </Typography>
        <Button
          component={Link}
          to='/analytics'
          variant='contained'
          color='primary'
          sx={{ fontWeight: 'bold', mt: 1 }}
        >
          Go to Analytics →
        </Button>
      </Box>
    </Box>
  );
}
