import {
  Box,
  Button,
  Link as MaterialLink,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CustomArrowProps } from "react-slick";

import { CardContainer } from "@/components/CardContainer";
import { useImageDimension } from "@/hooks/useImageDimension";
import { Menu } from "@/types";

interface Props extends CustomArrowProps {
  item: Menu;
}

export const MenuItem = React.memo(function MenuItem({ item }: Props) {
  const { containerRef, imageDimension } = useImageDimension({ ratio: 6 / 10 });

  return (
    <Link key={item.id} href={`/menus/${item.slug}`} passHref legacyBehavior>
      <MaterialLink
        sx={{
          display: "flex",
          alignItems: "stretch",
          flex: 1,
        }}
        underline="none"
      >
        <CardContainer>
          <Box
            sx={{
              width: "100%",
            }}
            ref={containerRef}
          >
            <Image
              src={item.img}
              width={imageDimension.width}
              height={imageDimension.height}
              alt="a"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
                mt: 1.125,
              })}
              variant="h6"
            >
              {item.name}
            </Typography>
            <Button sx={{ px: 6.25 }} variant="contained">
              Order
            </Button>
          </Stack>
        </CardContainer>
      </MaterialLink>
    </Link>
  );
});
