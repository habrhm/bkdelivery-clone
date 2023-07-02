import { IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import { CustomArrowProps } from "react-slick";

import { MinusIcon, PlusIcon } from "@/assets/icons";

interface Props extends CustomArrowProps {
  count: number;
  size?: "normal" | "small";
  onAdd: () => void;
  onSubstract: () => void;
}

export const CountInput = React.memo(function CountInput({
  count,
  size = "normal",
  onAdd,
  onSubstract,
}: Props) {
  return (
    <Stack
      sx={(theme) => ({
        alignItems: "center",
        alignSelf: size === "normal" ? "stretch" : undefined,
        justifyContent: "space-between",
        border: `0.5px solid ${theme.palette.grey[300]}`,
        borderRadius: "5px",
        px: size === "normal" ? 2.5 : 0.5,
        py: 0.5,
        width: size === "normal" ? undefined : "70px",
      })}
      direction="row"
      spacing={size === "normal" ? 1 : 0}
    >
      <IconButton
        sx={() => ({
          height: "24px",
          width: "24px",
        })}
        color="primary"
        onClick={onSubstract}
      >
        <MinusIcon sx={{ fontSize: "18px" }} />
      </IconButton>
      <Typography
        sx={{
          fontSize: { xs: "12px", lg: "17px" },
          fontWeight: size === "normal" ? "500" : "300",
        }}
      >
        {count}
      </Typography>
      <IconButton
        sx={() => ({
          height: "24px",
          width: "24px",
        })}
        color="primary"
        onClick={onAdd}
      >
        <PlusIcon sx={{ fontSize: "18px" }} />
      </IconButton>
    </Stack>
  );
});
