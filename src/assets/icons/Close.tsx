import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

import { getColor } from "@/utils/getColor";

export const CloseIcon = React.memo(function CloseIcon({
  color,
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 512 512" {...props}>
      <path
        fill={getColor(color)}
        d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
      />
    </SvgIcon>
  );
});
