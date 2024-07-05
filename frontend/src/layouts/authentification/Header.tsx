// 💡

import { AppBar, Container } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position={'sticky'} color={'secondary'}>
        <Container sx={{ width: '100%' }}>HEADER VERSION LOGIN PAGE</Container>
      </AppBar>
    </>
  );
};

export default Header;
