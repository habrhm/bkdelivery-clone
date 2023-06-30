import { Stack } from "@mui/material";
import * as React from "react";

export const CardContainer = React.memo(function CardContainer({
  children,
  ...props
}: React.PropsWithChildren) {
  return (
    <Stack
      sx={(theme) => ({
        background: theme.palette.common.white,
        boxShadow: theme.shadows[4],
        p: {
          xs: 1.25,
          lg: 2.5,
        },
        alignItems: "stretch",
        borderRadius: "10px",
        flex: 1,
      })}
      spacing={1}
      {...props}
    >
      {children}
    </Stack>
  );
});
