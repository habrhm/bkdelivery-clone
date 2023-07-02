import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import * as React from "react";

export const TextInput = React.memo(function TextInput(
  props: OutlinedInputProps
) {
  return (
    <OutlinedInput
      sx={(theme) => ({
        fontWeight: "300",
        fontSize: "15px",
        "& fieldset": {
          border: `0.5px solid ${theme.palette.grey[300]} !important`,
        },
        mb: 1.25,
      })}
      name="name"
      size="small"
      placeholder="Full Name"
      {...props}
    />
  );
});
