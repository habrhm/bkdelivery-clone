import type { PaletteColor } from "@mui/material/styles";

import theme from "@/theme";
import type { PaletteName } from "@/types";

export const getColor = (name: PaletteName) => {
  if (name === "inherit" || !name) {
    return "inherit";
  }

  if (name === "disabled") {
    return theme.palette.action.disabled;
  }

  return (theme.palette[name] as PaletteColor).main;
};
