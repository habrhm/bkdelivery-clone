import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const MinusIcon = React.memo(function MinusIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill={getColor(color)}
        d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
      />
    </SvgIcon>
  );
});
