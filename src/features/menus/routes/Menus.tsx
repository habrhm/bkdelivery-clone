import { Stack, Unstable_Grid2 as Grid } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

import { menus, products } from "@/data";
import { Product } from "@/types";

import { ProductItem } from "../components/ProductItem";

export const MenusPage = () => {
  const router = useRouter();
  const { menu } = router.query;

  const selectedMenu = React.useMemo(() => {
    if (menu) {
      return menus.find((item) => item.slug === menu);
    } else {
      return menus[0];
    }
  }, [menu]);

  const productsData: Product[] = React.useMemo(() => {
    if (selectedMenu) {
      return products.filter((item) => item.menuId === selectedMenu.id);
    }

    return [];
  }, [selectedMenu]);

  return (
    <Stack spacing={4}>
      <Grid sx={{ width: "100%" }} container spacing={2}>
        {productsData.map((item) => (
          <Grid
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "stretch",
            }}
            component="div"
            xs={12}
            lg={6}
          >
            <ProductItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
