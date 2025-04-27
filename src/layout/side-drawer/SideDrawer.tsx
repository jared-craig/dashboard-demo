import { Stack } from '@mui/material';
import SideDrawerItem from './SideDrawerItem';

export default function SideDrawer() {
  return (
    <Stack
      direction='column'
      sx={{
        width: '300px',
        minWidth: '300px',
        borderRight: '2px solid',
      }}
    >
      <SideDrawerItem title='Home' to='' />
      <SideDrawerItem title='Analytics' to='analytics' />
      <SideDrawerItem title='About' to='about' />
      <SideDrawerItem title='BadLink' to='badlink' />
    </Stack>
  );
}
