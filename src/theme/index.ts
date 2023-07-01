import { createTheme } from "@mui/material/styles";

import { flame } from "./fonts";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: flame.style.fontFamily,
    subtitle2: {
      lineHeight: "20px",
      fontSize: "18px",
    },
    allVariants: {
      color: "#502314",
    },
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
    text: {
      secondary: "#502314",
    },
    secondary: {
      main: "#faaf18",
      light: "#fbe6d6",
    },
  },
});

export default theme;
