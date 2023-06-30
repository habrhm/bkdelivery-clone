export type PaletteName =
  | "common"
  | "mode"
  | "contrastThreshold"
  | "tonalOffset"
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "grey"
  | "text"
  | "divider"
  | "action"
  | "background"
  | "inherit"
  | "disabled"
  | undefined;

export interface Menu {
  id: number;
  name: string;
  slug: string;
  img: string;
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}
