import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import * as React from "react";

export const NewsDetailsPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const descriptions = `Syarat dan Ketentuan:
Promo berlaku pada 27 - 11 Juli 2023
Diskon 30% senilai hingga Rp40.000 dengan minimum pembelian Rp.60.000
Promo ini tidak berlaku untuk produk promo lainnya, seperti: King's Chicken, King Deals, Side & Dessert, BK App Exclusive Menu, Whopper Wednesday dan Friyay Chicken
Promo berlaku nasional untuk Delivery, Contactless Dine-in, atau Pre-order Takeaway
Promo dalam bentuk kupon diberikan saat login
Setiap kupon hanya dapat digunakan sebanyak satu (1) kali selama periode promo
Promo tidak dapat digabungkan dengan promo lainnya
Kupon hanya diberikan pada pengguna yang sudah terdaftar sebelum tanggal 27 Juni 2023


*S&K Berlaku
  `;

  return (
    <Stack sx={{ alignItems: "stretch", py: 6 }} spacing={4}>
      <Container sx={{ alignSelf: "center" }} maxWidth="lg">
        <Stack
          sx={{ alignItems: "stretch", px: { xs: 0, lg: 12 } }}
          spacing={3}
        >
          {!isDesktop && (
            <Typography
              sx={(theme) => ({
                fontSize: "33px",
                color: theme.palette.primary.dark,
              })}
              component="h1"
            >
              PROMO BK APP DISKON 30%
            </Typography>
          )}
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                lg: "row-reverse",
              },
              gap: { xs: 3, lg: 1 },
            }}
          >
            <Box sx={{ width: { xs: "100%", lg: "120%" } }}>
              <Image
                src="https://bkdelivery.co.id/media/hero_image/2023/5/11/s7mo9ktn3dc5v7sh5dmcff.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="a"
                style={{
                  width: "100%",
                  height: "unset",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Stack>
              {isDesktop && (
                <Typography
                  sx={(theme) => ({
                    fontSize: "26px",
                    color: theme.palette.primary.dark,
                    mb: 1,
                  })}
                  component="h1"
                >
                  PROMO BK APP DISKON 30%
                </Typography>
              )}

              {descriptions.split("\n").map((item) => (
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.black,
                    fontWeight: "300",
                  })}
                >
                  {item !== "" ? item : <>&nbsp;</>}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
