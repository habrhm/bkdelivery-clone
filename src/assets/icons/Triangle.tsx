import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const TriangleIcon = React.memo(function TriangleIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill={getColor(color)}
        d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z"
      />
    </SvgIcon>
  );
});
