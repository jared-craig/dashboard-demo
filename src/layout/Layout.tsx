import { useState } from 'react';
import SideDrawer from '@/layout/side-drawer/SideDrawer';
import { Stack, Box } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const headerHeight = 60;
  const footerHeight = 30;

  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => setDrawerOpen((open) => !open);

  return (
    <>
      <Header headerHeight={headerHeight} onMenuClick={toggleDrawer} />
      <Stack
        direction='row'
        sx={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        <SideDrawer open={drawerOpen} />
        <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
          <Outlet />
        </Box>
      </Stack>
      <Footer footerHeight={footerHeight} />
    </>
  );
}
