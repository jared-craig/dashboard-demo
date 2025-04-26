import SideDrawer from '@/layout/side-drawer/SideDrawer';
import { Stack, Box } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const headerHeight = 60;
  const footerHeight = 40;

  return (
    <>
      <Header headerHeight={headerHeight} />
      <Stack
        direction='row'
        sx={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        <SideDrawer />
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Outlet />
        </Box>
      </Stack>
      <Footer footerHeight={footerHeight} />
    </>
  );
}
