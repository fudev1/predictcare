
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import Router from "./routes/sections";
// import "./App.css";



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;
