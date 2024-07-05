import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#5BE49B',
      main: '#00A76F',
      dark: '#007867',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#dc004e',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
  },
});

export default theme;
