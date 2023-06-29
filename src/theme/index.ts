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
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ed7801",
    },
    secondary: {
      main: "#faaf18",
    },
  },
});

export default theme;
