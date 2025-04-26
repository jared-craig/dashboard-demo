import { Stack } from '@mui/material';
import SideDrawerItem from './SideDrawerItem';

export default function SideDrawer() {
  return (
    <Stack
      direction='column'
      sx={{
        width: '250px',
        borderRight: '2px solid',
      }}
    >
      <SideDrawerItem title='Home' to='' />
      <SideDrawerItem title='About' to='about' />
      <SideDrawerItem title='BadLink' to='badlink' />
    </Stack>
  );
}
