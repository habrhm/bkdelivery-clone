import { Link as MaterialLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { CustomArrowProps } from "react-slick";

import { Menu } from "@/types";

interface Props extends CustomArrowProps {
  item: Menu;
  selectedItem?: Menu;
}

export const MenuItem = React.memo(function MenuItem({
  item,
  selectedItem,
}: Props) {
  const isSelected = selectedItem?.id === item.id;

  return (
    <Link key={item.id} href={`/menus/${item.slug}`} passHref legacyBehavior>
      <MaterialLink sx={{ flex: 1 }} underline="none">
        <Stack
          sx={(theme) => ({
            borderRadius: "10px",
            background: isSelected
              ? theme.palette.secondary.main
              : theme.palette.secondary.light,
            p: "10px 20px",
            minHeight: "36px",
            verticalAlign: "middle",
            justifyContent: "center",
          })}
        >
          <Typography
            variant="subtitle2"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
            })}
          >
            {item.name}
          </Typography>
        </Stack>
      </MaterialLink>
    </Link>
  );
});
