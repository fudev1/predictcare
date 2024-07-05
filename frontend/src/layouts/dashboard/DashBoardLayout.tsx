import { Box } from '@mui/material';
import Header from '../dashboard/HeaderDashboard';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box display="flex" minHeight="100vh">
      {/* <Nav /> */}
      <Box flex={1}>
        <Header isLoggedIn={true} />
        <Box p={2}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
