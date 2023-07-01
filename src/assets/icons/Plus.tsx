import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const PlusIcon = React.memo(function PlusIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        fill={getColor(color)}
        d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5V2.75Z"
      />
    </SvgIcon>
  );
});
