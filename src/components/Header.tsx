import {
  AppBar,
  Box,
  Container,
  Link as MaterialLink,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { CartIcon } from "@/assets/icons";

export const Header = React.memo(function Header() {
  const router = useRouter();

  return (
    <AppBar
      sx={(theme) => ({
        height: "76px",
        backgroundColor: "#2D2D2D",
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: 2,
      })}
      color="transparent"
      position="relative"
    >
      <Container
        sx={{ px: 6, display: "flex", flexDirection: "row", gap: 4 }}
        maxWidth={"lg"}
      >
        <Box sx={{ mt: 1.5 }}>
          <Link href="/" passHref legacyBehavior>
            <MaterialLink underline="none">
              <Image src="/BK-NewLogo.png" width={90} height={90} alt="home" />
            </MaterialLink>
          </Link>
        </Box>
        <Stack
          sx={{
            alignItems: "stretch",
            justifyContent: "space-between",
            flex: 1,
            height: "76px",
          }}
          direction="row"
        >
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
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={4}>
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
            {!router.pathname.startsWith("/cart") ? (
              <Link href="/cart/preview" passHref legacyBehavior>
                <MaterialLink
                  sx={(theme) => ({
                    background: theme.palette.primary.main,
                    alignSelf: "stretch",
                    px: 1,
                    py: 2,
                    alignItems: "center",
                  })}
                  underline="none"
                >
                  <CartIcon
                    sx={(theme) => ({
                      color: theme.palette.common.white,
                      fontSize: "36px",
                    })}
                  />
                </MaterialLink>
              </Link>
            ) : (
              <Box sx={{ width: "52px" }}></Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
});
