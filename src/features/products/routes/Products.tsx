import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

import { MinusIcon, PlusIcon } from "@/assets/icons";
import { products } from "@/data";
import { getCurrency } from "@/utils/getCurrency";

import { ExtraItem } from "../components/ExtraItem";
import { ProductImage } from "../components/ProductImage";
import { ExtraCount } from "../types";

export const ProductsPage = () => {
  const router = useRouter();
  const { product } = router.query;

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

  return (
    <Stack
      sx={(theme) => ({
        background: theme.palette.common.white,
        boxShadow: theme.shadows[2],
        borderRadius: "10px",
      })}
      direction="row"
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
          px: 2.5,
          py: 4,
          width: "30%",
          borderLeft: `0.5px solid ${theme.palette.grey[300]}`,
        })}
        spacing={2.5}
      >
        <Stack>
          <Typography sx={{ fontSize: "28px" }} component="div">
            {getCurrency(price)}
          </Typography>
          {extras.length > 0 && (
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
          sx={(theme) => ({
            alignItems: "center",
            alignSelf: "stretch",
            justifyContent: "space-between",
            border: `0.5px solid ${theme.palette.grey[300]}`,
            borderRadius: "5px",
            px: 2.5,
            py: 0.5,
          })}
          direction="row"
          spacing={1}
        >
          <IconButton
            sx={() => ({
              height: "24px",
              width: "24px",
            })}
            color="primary"
            onClick={handleSubstractCount}
          >
            <MinusIcon sx={{ fontSize: "18px" }} />
          </IconButton>
          <Typography sx={{ fontSize: "17px" }}>{itemCount}</Typography>
          <IconButton
            sx={() => ({
              height: "24px",
              width: "24px",
            })}
            color="primary"
            onClick={handleAddCount}
          >
            <PlusIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        </Stack>
        <Button variant="contained">Add to Cart</Button>
      </Stack>
    </Stack>
  );
};
