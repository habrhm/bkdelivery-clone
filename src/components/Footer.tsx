import {
  Box,
  Container,
  Divider,
  Link as MaterialLink,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";

import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";

export const Footer = React.memo(function Footer() {
  return (
    <Box sx={{ background: "#2D2D2D", py: 2 }}>
      <Container maxWidth="lg">
        <Stack
          sx={{
            px: { xs: 0, lg: 12 },
            alignItems: { xs: "center", lg: "flex-start" },
            gap: { xs: 2, lg: 4 },
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.common.white,
              fontSize: { xs: "25px", lg: "20px" },
              textAlign: "center",
            })}
          >
            BURGER KING&reg; DELIVERY
          </Typography>
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 2, lg: 4 },
            }}
            direction="row"
          >
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2, md: 4 },
              }}
              direction="row"
            >
              <MaterialLink href="tel:1500025" underline="none">
                <Stack sx={{ alignItems: "center" }} direction="row">
                  <PhoneIcon
                    sx={{
                      color: "white",
                      fontSize: { xs: "28px", lg: "18px" },
                    }}
                  />
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.common.white,
                      fontSize: { xs: "28px", lg: "18px" },
                    })}
                  >
                    15000 25
                  </Typography>
                </Stack>
              </MaterialLink>
              <MaterialLink
                href="mailto:guestservice@burgerking.co.id"
                underline="none"
              >
                <Stack sx={{ alignItems: "center" }} direction="row">
                  <MailIcon
                    sx={(theme) => ({
                      pr: 1,
                      color: theme.palette.common.white,
                      fontSize: { xs: "28px", lg: "18px" },
                    })}
                  />

                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.common.white,
                      fontSize: "15px",
                      fontWeight: "300",
                    })}
                  >
                    guestservice@burgerking.co.id
                  </Typography>
                </Stack>
              </MaterialLink>
            </Stack>
            <Stack
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: { xs: "28px", lg: "18px" },
                alignItems: "center",
                gap: { xs: 1.5, lg: 0.5 },
              })}
              direction="row"
            >
              <FacebookIcon sx={{ fontSize: "inherit" }} />
              <InstagramIcon sx={{ fontSize: "inherit" }} />
              <TwitterIcon sx={{ fontSize: "inherit" }} />
              <YoutubeIcon sx={{ fontSize: "inherit" }} />
            </Stack>
          </Stack>
          <Stack
            sx={(theme) => ({
              color: {
                xs: theme.palette.common.white,
                lg: theme.palette.grey[500],
              },
              fontSize: { xs: "15px", lg: "12px" },
              fontWeight: "300",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: { xs: "center", lg: "flex-start" },
              gap: { xs: 0.25, lg: 1.5 },
              pt: { xs: 2, lg: 0 },
            })}
          >
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              About Us
            </Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.grey[500],
                my: 0.5,
              })}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              Kebijakan Privasi
            </Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.grey[500],
                my: 0.5,
              })}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              Syarat dan Ketentuan
            </Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.grey[500],
                my: 0.5,
              })}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Typography
              sx={(theme) => ({
                color: theme.palette.grey[500],
                font: "inherit",
                pt: { xs: 2, lg: 0 },
              })}
            >
              TM & © 2023 Burger King Corporation. Used Under License. All
              rights reserved.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
});
