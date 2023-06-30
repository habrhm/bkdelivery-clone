import { Box, Link as MaterialLink, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CustomArrowProps } from "react-slick";

import { CardContainer } from "@/components/CardContainer";
import { useImageDimension } from "@/hooks/useImageDimension";
import { Product } from "@/types";
import { getCurrency } from "@/utils/getCurrency";

interface Props extends CustomArrowProps {
  item: Product;
}

export const ProductItem = React.memo(function ProductItem({ item }: Props) {
  const { containerRef, imageDimension } = useImageDimension({
    ratio: 22 / 30,
  });

  const coverImg = item.thumbImg;

  return (
    <Link key={item.id} href={`/products/${item.slug}`} passHref legacyBehavior>
      <MaterialLink
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "stretch",
          width: "100%",
        }}
        underline="none"
      >
        <CardContainer>
          <Stack
            sx={{
              alignItems: "stretch",
              flexDirection: { xs: "row", lg: "column" },
              gap: 2,
            }}
          >
            <Box sx={{ width: { xs: "25%", lg: "auto" } }} ref={containerRef}>
              {coverImg && (
                <Image
                  src={coverImg.url}
                  width={imageDimension.width}
                  height={imageDimension.height}
                  alt={coverImg.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
            <Stack sx={{ alignSelf: { xs: "center", lg: "stretch" } }}>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  lineHeight: 1.2,
                  mt: 1.125,
                })}
                variant="h5"
              >
                {item.name}
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  lineHeight: 1.2,
                  mt: 1.125,
                })}
                variant="h6"
              >
                {getCurrency(item.price)}
              </Typography>
            </Stack>
          </Stack>
        </CardContainer>
      </MaterialLink>
    </Link>
  );
});
