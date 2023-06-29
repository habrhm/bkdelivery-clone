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
    <Box sx={{ background: "#2D2D2D", py: 1 }}>
      <Container maxWidth="lg">
        <Stack sx={{ px: 12 }} spacing={1}>
          <Typography
            sx={(theme) => ({
              color: theme.palette.common.white,
            })}
            variant="h6"
          >
            BURGER KING&reg; DELIVERY
          </Typography>
          <Stack direction="row" spacing={4}>
            <MaterialLink href="tel:1500025" underline="none">
              <Stack sx={{ alignItems: "center" }} direction="row">
                <PhoneIcon sx={{ color: "white", fontSize: "18px" }} />
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                  })}
                  variant="h6"
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
                  })}
                />

                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                  })}
                  variant="subtitle1"
                >
                  guestservice@burgerking.co.id
                </Typography>
              </Stack>
            </MaterialLink>
            <Stack
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: "22px",
              })}
              direction="row"
              spacing={0.5}
            >
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YoutubeIcon />
            </Stack>
          </Stack>
          <Stack
            sx={(theme) => ({
              color: theme.palette.grey[500],
            })}
            direction="row"
            spacing={2}
          >
            <Typography variant="caption">About Us</Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.grey[500],
              })}
              orientation="vertical"
              variant="inset"
              flexItem
            />
            <Typography variant="caption">Kebijakan Privasi</Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.grey[500],
              })}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Typography variant="caption">Syarat dan Ketentuan</Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.grey[500],
              })}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Typography variant="caption">
              TM & © 2023 Burger King Corporation. Used Under License. All
              rights reserved.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
});
