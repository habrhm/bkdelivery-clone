import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";

import { CountInput } from "@/components/CountInput";
import { products } from "@/data";
import { useOrderStore } from "@/hooks/useOrderStore";
import { ExtraCount } from "@/types";
import { getCurrency } from "@/utils/getCurrency";

import { ExtraItem } from "../components/ExtraItem";
import { ProductImage } from "../components/ProductImage";

export const ProductsPage = () => {
  const router = useRouter();
  const { product } = router.query;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [itemCount, setitemCount] = React.useState(1);
  const [selectedExtras, setSelectedExtras] = React.useState<ExtraCount[]>([]);

  const selectedProduct = React.useMemo(() => {
    if (product) {
      return products.find((item) => item.slug === product);
    } else {
      return null;
    }
  }, [product]);

  const extras = React.useMemo(() => {
    if (selectedProduct?.extraProducts?.length) {
      return products.filter((item) =>
        selectedProduct.extraProducts?.find(
          (extraItem) => extraItem === item.id
        )
      );
    } else {
      return [];
    }
  }, [selectedProduct]);

  const addOrder = useOrderStore((state) => state.addOrder);

  const handleAddCount = React.useCallback(() => {
    setitemCount(itemCount + 1);
  }, [itemCount]);

  const handleSubstractCount = React.useCallback(() => {
    if (itemCount > 1) {
      setitemCount(itemCount - 1);
    }
  }, [itemCount]);

  const price = React.useMemo(() => {
    if (selectedProduct) {
      let priceValue = selectedProduct.price * itemCount;

      if (extras.length > 0) {
        selectedExtras
          .filter((item) => item.count > 0)
          .forEach((item) => {
            priceValue = priceValue + item.count * item.product.price;
          });
      }

      return priceValue;
    }
    return 0;
  }, [extras.length, itemCount, selectedExtras, selectedProduct]);

  const handleAddOrder = React.useCallback(() => {
    if (selectedProduct) {
      addOrder({
        count: itemCount,
        extras: selectedExtras
          .filter((item) => item.count > 0)
          .sort((a, b) => a.product.id - b.product.id),
        product: selectedProduct,
      });
    }
  }, [addOrder, itemCount, selectedExtras, selectedProduct]);

  return (
    <Stack
      sx={(theme) => ({
        background: theme.palette.common.white,
        boxShadow: theme.shadows[2],
        borderRadius: "10px",
        flexDirection: { xs: "column", lg: "row" },
      })}
    >
      <Stack
        sx={{
          px: 2.5,
          py: 4,
          flex: 1,
          alignItems: "stretch",
        }}
        spacing={4}
      >
        <Stack sx={{ gap: 2 }}>
          <Typography
            sx={{ textAlign: "center", fontSize: "30px" }}
            component="h1"
          >
            {selectedProduct?.title ?? selectedProduct?.name}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "300",
              mx: 4,
            }}
            component="div"
          >
            {selectedProduct?.description}
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              alignItems: { xs: "center", lg: "flex-start" },
            }}
          >
            <Stack sx={{ flex: 1 }} spacing={1}>
              {selectedProduct?.imgs.map((item) => (
                <ProductImage url={item.url} alt={item.alt} />
              ))}
            </Stack>
            <Stack sx={{ width: "33%" }}></Stack>
          </Stack>
        </Stack>
        {extras.length ? (
          <Stack spacing={2}>
            <Typography
              sx={(theme) => ({
                fontSize: "21px",
                color: theme.palette.primary.dark,
              })}
              component="h2"
            >
              Add Extras
            </Typography>
            {extras.map((item) => (
              <ExtraItem
                item={item}
                selectedExtras={selectedExtras}
                setSelectedExtras={setSelectedExtras}
              />
            ))}
          </Stack>
        ) : (
          <></>
        )}
      </Stack>
      <Stack
        sx={(theme) => ({
          px: { xs: 2, lg: 2.5 },
          py: { xs: 2, lg: 4 },
          width: { xs: "100%", lg: "37%" },
          borderLeft: `0.5px solid ${theme.palette.grey[300]}`,
          borderTop: {
            xs: "none",
            lg: `0.5px solid ${theme.palette.grey[900]}`,
          },
          flexDirection: { xs: "row", lg: "column" },
          position: { xs: "fixed", lg: "unset" },
          bottom: { xs: "0", lg: "unset" },
          left: { xs: "0", lg: "unset" },
          justifyContent: { xs: "space-between", lg: "flex-start" },
          background: theme.palette.common.white,
          boxSizing: "border-box",
          gap: { xs: 0, lg: 2.5 },
          alignItems: { xs: "center", lg: "stretch" },
        })}
      >
        <Stack>
          <Typography
            sx={{ fontSize: { xs: "17px", lg: "28px" } }}
            component="div"
          >
            {getCurrency(price)}
          </Typography>
          {extras.length > 0 && isDesktop && (
            <Stack direction="row" spacing={1}>
              <Typography
                sx={(theme) => ({
                  fontSize: "11px",
                  fontWeight: "300",
                  color: theme.palette.grey[600],
                })}
              >
                ADD ON
              </Typography>
              <Stack>
                {selectedExtras.filter((item) => item.count > 0).length <= 0 ? (
                  <Typography
                    sx={(theme) => ({
                      fontSize: "11px",
                      fontWeight: "300",
                      color: theme.palette.grey[600],
                    })}
                  >
                    -
                  </Typography>
                ) : (
                  selectedExtras
                    .filter((item) => item.count > 0)
                    .sort((a, b) => a.product.id - b.product.id)
                    .map((item) => (
                      <Typography
                        sx={(theme) => ({
                          fontSize: "11px",
                          fontWeight: "300",
                          color: theme.palette.grey[600],
                        })}
                      >
                        {`${item.count} ${item.product.name}`}
                      </Typography>
                    ))
                )}
              </Stack>
            </Stack>
          )}
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "row", lg: "column" },
            alignItems: { xs: "center", lg: "stretch" },
            gap: { xs: 1, lg: 2.5 },
          }}
        >
          <CountInput
            count={itemCount}
            onAdd={handleAddCount}
            onSubstract={handleSubstractCount}
            size={isDesktop ? "normal" : "small"}
          />
          <Button
            size={isDesktop ? "medium" : "small"}
            variant="contained"
            onClick={handleAddOrder}
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
