import {
  Button,
  Container,
  Drawer,
  IconButton,
  OutlinedInput,
  Stack,
  Unstable_Grid2 as Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";

import { SearchIcon, TriangleIcon } from "@/assets/icons";
import { MenuItem } from "@/components/MenuItem";
import { menus, products } from "@/data";
import { useStateStore } from "@/hooks/useStateStore";

export const MenuLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const { menu, product } = router.query;

  const menuDrawerOpen = useStateStore((state) => state.menuDrawerOpen);
  const setMenuDrawerOpen = useStateStore((state) => state.setMenuDrawerOpen);

  const selectedProduct = React.useMemo(() => {
    if (product) {
      return products.find((item) => item.slug === product);
    } else {
      return null;
    }
  }, [product]);

  const selectedMenu = React.useMemo(() => {
    if (menu && router.pathname.startsWith("/menus")) {
      return menus.find((item) => item.slug === menu);
    } else if (
      product &&
      router.pathname.startsWith("/products") &&
      selectedProduct
    ) {
      return menus.find((item) => item.id === selectedProduct.menuId);
    } else {
      return menus[0];
    }
  }, [menu, product, router.pathname, selectedProduct]);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          sx={{
            py: { xs: 2, lg: 4 },
            px: { xs: 0, lg: 12 },
            alignItems: "stretch",
            flexDirection: { xs: "column", lg: "row" },
            gap: 4,
          }}
        >
          <Stack sx={{ width: { xs: "100%", lg: "21%" } }} spacing={6}>
            {isDesktop ? (
              <>
                <Stack
                  sx={(theme) => ({
                    boxShadow: theme.shadows[2],
                    borderRadius: "10px",
                  })}
                  direction="row"
                >
                  <OutlinedInput
                    sx={() => ({
                      height: "42px",
                      border: "none",
                      "& fieldset": { border: "none" },
                      flex: 1,
                      borderRadius: "10px 0px 0px 10px",
                      py: 1.5,
                      pr: 0,
                      ".MuiOutlinedInput-adornedEnd": {
                        p: 10,
                      },
                    })}
                    size="small"
                    placeholder="Search menu..."
                  />
                  <IconButton
                    sx={(theme) => ({
                      background: theme.palette.primary.main,
                      borderRadius: "0px 10px 10px 0px",

                      ":hover": {
                        background: theme.palette.primary.main,
                      },
                    })}
                  >
                    <SearchIcon
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    />
                  </IconButton>
                </Stack>
                <Stack alignItems="stretch" spacing={1}>
                  {menus.map((item) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      selectedItem={selectedMenu}
                    />
                  ))}
                </Stack>
              </>
            ) : (
              <Stack
                sx={{ alignSelf: "stretch", mr: 2 }}
                direction="row"
                spacing={1}
              >
                <Button sx={{ px: 6 }} variant="contained" size="large">
                  <SearchIcon />
                </Button>
                <Button
                  sx={{ flex: 1, justifyContent: "space-between" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  endIcon={
                    <TriangleIcon
                      sx={{
                        transform: "rotate(180deg)",
                        fontSize: "18px !important",
                      }}
                    />
                  }
                  onClick={() => setMenuDrawerOpen(true)}
                >
                  {selectedMenu?.name}
                </Button>
              </Stack>
            )}
          </Stack>
          <Stack flex={1}>{children}</Stack>
        </Stack>
        <Drawer
          anchor="top"
          PaperProps={{
            sx: {
              height: "100%",
              mt: "50px",
              py: 5,
              px: 2.5,
            },
          }}
          open={menuDrawerOpen}
        >
          <Grid sx={{ width: "100%" }} container spacing={2}>
            {menus.map((item) => (
              <Grid
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "stretch",
                }}
                component="div"
                xs={6}
              >
                <MenuItem item={item} selectedItem={selectedMenu} />
              </Grid>
            ))}
          </Grid>
        </Drawer>
      </Container>
    </>
  );
};
