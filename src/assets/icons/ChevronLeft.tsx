import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const ChevronLeftIcon = React.memo(function ChevronLeftIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill={getColor(color)}
        d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"
      />
    </SvgIcon>
  );
});
