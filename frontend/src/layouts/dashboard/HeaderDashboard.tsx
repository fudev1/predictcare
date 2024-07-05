// 💡

import { AppBar, Container } from '@mui/material';
import AccountPopover from './common/AccountPopover';

const HeaderDashboard = () => {
  return (
    <>
      <AppBar position={'sticky'} color={'secondary'}>
        <Container maxWidth="xl">HEADER VERSION DASHBOARD</Container>
      </AppBar>
      <AccountPopover />
    </>
  );
};

export default HeaderDashboard;
