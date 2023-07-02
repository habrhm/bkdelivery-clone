import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link as MaterialLink,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { CartIcon, CloseIcon, MenuIcon } from "@/assets/icons";
import { useOrderStore } from "@/hooks/useOrderStore";

export const Header = React.memo(function Header() {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const orders = useOrderStore((state) => state.orders);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleToggleDrawer = React.useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  const orderCount = React.useMemo(() => {
    let count = 0;

    orders.forEach((item) => {
      count = count + item.count;
    });

    return count;
  }, [orders]);

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [router.pathname]);

  return (
    <AppBar
      sx={(theme) => ({
        height: { xs: "50px", lg: "76px" },
        backgroundColor: "#2D2D2D",
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: "none",
      })}
      color="transparent"
      position={isDesktop ? "relative" : "fixed"}
    >
      <Container
        sx={{
          px: { xs: 0, lg: 6 },

          display: "flex",
          flexDirection: "row",
          gap: 4,
          position: "relative",
        }}
        maxWidth={"lg"}
      >
        <Box
          sx={{
            mt: { xs: 0.5, lg: 1.5 },
            position: { xs: "absolute", lg: "unset" },
            left: { xs: "50%", lg: "unset" },
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <MaterialLink underline="none">
              <Image
                src="/BK-NewLogo.png"
                width={isDesktop ? 90 : 40}
                height={isDesktop ? 90 : 40}
                style={{
                  position: "relative",
                  left: isDesktop ? "unset" : "-50%",
                }}
                alt="home"
              />
            </MaterialLink>
          </Link>
        </Box>
        <Stack
          sx={{
            alignItems: "stretch",
            justifyContent: "space-between",
            flex: 1,
            height: { xs: "50px", lg: "76px" },
          }}
          direction="row"
        >
          {isDesktop ? (
            <Stack sx={{ alignItems: "stretch" }} direction="row" spacing={4}>
              <Stack sx={{ alignItems: "center" }} direction="row" spacing={4}>
                <Link href="/menus" passHref legacyBehavior>
                  <MaterialLink underline="none">
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                      })}
                      variant="caption"
                    >
                      Delivery
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        fontWeight: "800",
                      })}
                      variant="h5"
                    >
                      Order
                    </Typography>
                  </MaterialLink>
                </Link>
                <Link href="/" passHref legacyBehavior>
                  <MaterialLink underline="none">
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                      })}
                      variant="caption"
                    >
                      Get Fresh
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        fontWeight: "800",
                      })}
                      variant="h5"
                    >
                      Promotions
                    </Typography>
                  </MaterialLink>
                </Link>
              </Stack>
            </Stack>
          ) : (
            <IconButton color="primary" onClick={handleToggleDrawer}>
              {drawerOpen ? (
                <CloseIcon sx={{ color: "inherit", fontSize: "32px" }} />
              ) : (
                <MenuIcon sx={{ color: "inherit", fontSize: "32px" }} />
              )}
            </IconButton>
          )}

          <Stack sx={{ alignItems: "center" }} direction="row" spacing={4}>
            {isDesktop && (
              <Link href="/" passHref legacyBehavior>
                <MaterialLink underline="none">
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.common.white,
                    })}
                    variant="h6"
                  >
                    LOGIN
                  </Typography>
                </MaterialLink>
              </Link>
            )}

            {!router.pathname.startsWith("/cart") ? (
              <Link href="/cart/preview" passHref legacyBehavior>
                <MaterialLink
                  sx={(theme) => ({
                    background: theme.palette.primary.main,
                    alignSelf: "stretch",
                    py: { xs: 1, lg: 2.5 },
                    px: 1,
                    alignItems: "center",
                    position: "relative",
                  })}
                  underline="none"
                >
                  <CartIcon
                    sx={(theme) => ({
                      color: theme.palette.common.white,
                      fontSize: { xs: "34px", lg: "36px" },
                    })}
                  />
                  {orderCount > 0 && (
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        fontSize: "14px",
                        fontWeight: "300",
                        width: "16px",
                        height: "16px",
                        background: "red",
                        textAlign: "center",
                        borderRadius: "50%",
                        position: "absolute",
                        lineHeight: 1.3,
                        top: { xs: 8, lg: 16 },

                        right: 5,
                      })}
                    >
                      {orderCount}
                    </Typography>
                  )}
                </MaterialLink>
              </Link>
            ) : (
              <Box sx={{ width: "52px" }}></Box>
            )}
          </Stack>
        </Stack>
      </Container>
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
        open={drawerOpen}
      >
        <Stack spacing={6}>
          <Stack spacing={3}>
            <Link href="/" passHref legacyBehavior>
              <MaterialLink underline="none">
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: "32px",
                  })}
                >
                  Home
                </Typography>
              </MaterialLink>
            </Link>
            <Link href="/menus" passHref legacyBehavior>
              <MaterialLink underline="none">
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.secondary.main,
                    fontSize: "15px",
                  })}
                >
                  Delivery
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: "32px",
                  })}
                >
                  Order
                </Typography>
              </MaterialLink>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <MaterialLink underline="none">
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.secondary.main,
                    fontSize: "15px",
                  })}
                >
                  Get Fresh
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: "32px",
                  })}
                >
                  Promotions
                </Typography>
              </MaterialLink>
            </Link>
          </Stack>
          <Divider
            sx={(theme) => ({
              borderColor: theme.palette.common.white,
            })}
          />
          <Link href="/accounts/login" passHref legacyBehavior>
            <MaterialLink underline="none">
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "25px",
                })}
              >
                Login
              </Typography>
            </MaterialLink>
          </Link>
        </Stack>
      </Drawer>
    </AppBar>
  );
});
