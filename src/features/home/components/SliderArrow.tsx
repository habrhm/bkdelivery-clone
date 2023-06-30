import { IconButton } from "@mui/material";
import * as React from "react";
import { CustomArrowProps } from "react-slick";

import { ChevronLeftIcon } from "@/assets/icons";

interface Props extends CustomArrowProps {
  direction: string;
}

export const SliderArrow = React.memo(function SliderArrow({
  direction = "left",
  onClick,
}: Props) {
  return (
    <IconButton
      sx={(theme) => ({
        position: "absolute",
        zIndex: 5,
        top: "40%",
        right: direction === "right" ? 0 : undefined,
        mx: 4,
        background: theme.palette.common.white,
        opacity: 0.3,
        ":hover": {
          background: theme.palette.common.white,
          opacity: 0.5,
        },
      })}
      onClick={onClick}
      color="primary"
    >
      <ChevronLeftIcon
        sx={{
          fontSize: "40px",
          transform: direction === "left" ? undefined : "rotate(180deg)",
        }}
      />
    </IconButton>
  );
});
