import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";

import { products } from "@/data";
import { useOrderStore } from "@/hooks/useOrderStore";
import { ExtraCount } from "@/types";

export const useProducts = () => {
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

  return {
    extras,
    isDesktop,
    itemCount,
    price,
    selectedExtras,
    selectedProduct,
    handleAddCount,
    handleAddOrder,
    handleSubstractCount,
    setSelectedExtras,
  };
};
