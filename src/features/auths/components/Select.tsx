import { Select as MaterialSelect } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

import { TextInput } from "@/components/TextInput";

interface Props {
  name: string;
  options: string[];
}

const Option = styled("option")();

export const Select = React.memo(function Select({ name, options }: Props) {
  const [value, setValue] = React.useState("");

  return (
    <MaterialSelect
      placeholder="-"
      input={<TextInput placeholder="-" />}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size="small"
      native
    >
      {options.map((item) => (
        <Option
          sx={{
            background: "white !important",
            fontWeight: "200 !important",
          }}
        >
          {item}
        </Option>
      ))}
    </MaterialSelect>
  );
});
