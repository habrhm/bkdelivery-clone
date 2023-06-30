import { createTheme } from "@mui/material/styles";

import { flame } from "./fonts";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: flame.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ed7801",
      dark: "#8b542f",
    },
    secondary: {
      main: "#faaf18",
    },
  },
});

export default theme;
