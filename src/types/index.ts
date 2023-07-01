export interface ExtraCount {
  product: Product;
  count: number;
}

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
export interface Product {
  id: number;
  thumbImg: {
    url: string;
    alt: string;
  };
  imgs: {
    url: string;
    alt: string;
  }[];
  name: string;
  title?: string;
  description?: string;
  slug: string;
  price: number;
  optionalMealPrice?: number;
  upsizePrice?: number;
  menuId?: number;
  extraProducts?: number[];
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

export interface Order {
  product: Product;
  count: number;
  extras: ExtraCount[];
}
