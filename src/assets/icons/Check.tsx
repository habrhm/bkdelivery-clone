import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const CheckIcon = React.memo(function CheckIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill={getColor(color)}
        d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
      />
    </SvgIcon>
  );
});
