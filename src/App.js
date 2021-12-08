import logo from './logo.svg';
import './App.css';
import PersistentDrawerLeft from './ClippedDrawer';
import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from "@mui/styles";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme();
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
       <PersistentDrawerLeft />
      </ThemeProvider>
  );
}

export default App;
