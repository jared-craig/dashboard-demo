import { Stack } from '@mui/material';
import SideDrawerItem from './SideDrawerItem';

interface SideDrawerProps {
  open: boolean;
}

export default function SideDrawer({ open }: SideDrawerProps) {
  return (
    <Stack
      direction='column'
      sx={{
        width: open ? 200 : 0,
        minWidth: open ? 200 : 0,
        transition: 'width 0.25s',
        borderRight: '2px solid',
        overflow: 'hidden',
      }}
    >
      <SideDrawerItem title='Home' to='' />
      <SideDrawerItem title='Analytics' to='analytics' />
      <SideDrawerItem title='About' to='about' />
      <SideDrawerItem title='BadLink' to='badlink' />
    </Stack>
  );
}
