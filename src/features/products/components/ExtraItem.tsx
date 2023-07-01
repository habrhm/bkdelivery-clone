import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";

import { MinusIcon, PlusIcon } from "@/assets/icons";
import { useImageDimension } from "@/hooks/useImageDimension";
import { ExtraCount, Product } from "@/types";
import { getCurrency } from "@/utils/getCurrency";

interface Props {
  item: Product;
  selectedExtras: ExtraCount[];
  setSelectedExtras: (extras: ExtraCount[]) => void;
}

export const ExtraItem = React.memo(function ExtraItem({
  item,
  selectedExtras,
  setSelectedExtras,
}: Props) {
  const { containerRef, imageDimension } = useImageDimension({
    ratio: 22 / 30,
  });

  const currentSelectedExtra = selectedExtras.find(
    (extra) => extra.product.id === item.id
  );

  const handleAddExtra = React.useCallback(() => {
    const selectedExtrasData = selectedExtras.slice();

    if (currentSelectedExtra) {
      if (currentSelectedExtra.count < 5) {
        const currentSelectedExtraIndex = selectedExtras.findIndex(
          (extra) => extra.product.id === item.id
        );

        if (currentSelectedExtraIndex >= 0) {
          selectedExtrasData[currentSelectedExtraIndex] = {
            ...currentSelectedExtra,
            count: currentSelectedExtra.count + 1,
          };

          setSelectedExtras(selectedExtrasData);
        }
      }
    } else {
      setSelectedExtras([...selectedExtrasData, { count: 1, product: item }]);
    }
  }, [currentSelectedExtra, item, selectedExtras, setSelectedExtras]);

  const handleSubstractExtra = React.useCallback(() => {
    const selectedExtrasData = selectedExtras.slice();

    if (currentSelectedExtra) {
      if (currentSelectedExtra.count > 0) {
        const currentSelectedExtraIndex = selectedExtras.findIndex(
          (extra) => extra.product.id === item.id
        );

        if (currentSelectedExtraIndex >= 0) {
          selectedExtrasData[currentSelectedExtraIndex] = {
            ...currentSelectedExtra,
            count: currentSelectedExtra.count - 1,
          };

          setSelectedExtras(selectedExtrasData);
        }
      }
    }
  }, [currentSelectedExtra, item.id, selectedExtras, setSelectedExtras]);

  return (
    <Stack
      sx={(theme) => ({
        border: `0.5px solid ${theme.palette.grey[300]}`,
        py: 1.5,
        px: 2,
        borderRadius: "5px",
        alignItems: "center",
        height: "48px",
      })}
      direction="row"
      spacing={2}
    >
      <Box sx={{ width: "20%" }} ref={containerRef}>
        <Image
          src={item.thumbImg.url}
          width={imageDimension.width}
          height={imageDimension.height}
          alt={item.thumbImg.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack sx={{ flex: 1 }}>
        <Typography sx={{ fontWeight: "200", fontSize: "12px" }}>
          {item.name}
        </Typography>
        <Typography
          sx={(theme) => ({
            fontWeight: "200",
            fontSize: "12px",
            color: theme.palette.grey[500],
          })}
        >
          {getCurrency(item.price)}
        </Typography>
      </Stack>
      <Stack>
        {currentSelectedExtra && currentSelectedExtra.count > 0 ? (
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={1}>
            <IconButton
              sx={() => ({
                height: "24px",
                width: "24px",
              })}
              color="primary"
              onClick={handleSubstractExtra}
            >
              <MinusIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <Typography sx={{ fontSize: "15px", fontWeight: "300" }}>
              {currentSelectedExtra.count}
            </Typography>
            <IconButton
              sx={() => ({
                height: "24px",
                width: "24px",
              })}
              color="primary"
              onClick={handleAddExtra}
            >
              <PlusIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </Stack>
        ) : (
          <IconButton
            sx={(theme) => ({
              background: theme.palette.primary.main,
              height: "24px",
              width: "24px",
              ":hover": {
                background: theme.palette.primary.main,
              },
            })}
            onClick={handleAddExtra}
          >
            <PlusIcon sx={{ color: "white", fontSize: "18px" }} />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
});
