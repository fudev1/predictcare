import { Box } from '@mui/material';
import Header from '../authentification/Header';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header isLoggedIn={false} />
      <Box display="flex" minHeight="100vh">
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" bgcolor="#f5f5f5">
          {children}
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <Box
            component="img"
            src="https://github.com/minimal-ui-kit/material-kit-react/blob/main/public/assets/images/avatars/avatar_1.jpg?raw=true"
            alt="login"
          />
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
