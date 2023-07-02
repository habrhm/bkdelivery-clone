import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const MenuIcon = React.memo(function MenuIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fill={getColor(color)}
        fillRule="evenodd"
        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
});
