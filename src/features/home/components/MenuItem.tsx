import {
  Box,
  Button,
  Link as MaterialLink,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CustomArrowProps } from "react-slick";

import { CardContainer } from "@/components/CardContainer";
import { Menu } from "@/types";

interface Props extends CustomArrowProps {
  item: Menu;
}

export const MenuItem = React.memo(function MenuItem({ item }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Link key={item.id} href={`/menus/${item.slug}`} passHref legacyBehavior>
      <MaterialLink
        sx={{
          display: "flex",
          alignItems: "stretch",
          flex: "1",
        }}
        underline="none"
      >
        <CardContainer>
          <Box
            sx={{
              width: "100%",
              position: "unset",
            }}
          >
            <Image
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt="a"
              style={{
                width: "100%",
                height: "unset",
                objectFit: "contain",
              }}
            />
          </Box>
          <Stack
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            direction="row"
            spacing={1.25}
          >
            <Typography
              sx={(theme) => ({
                textAlign: {
                  xs: "center",
                  lg: "start",
                },
                color: theme.palette.primary.dark,
                fontWeight: "700",
                lineHeight: 1.2,
                fontSize: "21px",
                mt: 1.125,
              })}
            >
              {item.name}
            </Typography>
            {isDesktop && (
              <Button sx={{ px: 6.25 }} variant="contained">
                Order
              </Button>
            )}
          </Stack>
        </CardContainer>
      </MaterialLink>
    </Link>
  );
});
