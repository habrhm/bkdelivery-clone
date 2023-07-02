import {
  Box,
  Button,
  Link as MaterialLink,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

export const DeliveryStep = React.memo(function DeliveryStep() {
  return (
    <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
      <Stack
        sx={{
          width: { xs: "auto", lg: "32%" },

          px: 3.5,
          py: 3,
        }}
        spacing={2}
      >
        <Typography
          sx={{
            fontWeight: "300",
            fontSize: "16px",
          }}
          component="h2"
        >
          GUEST DETAILS
        </Typography>
        <OutlinedInput
          sx={(theme) => ({
            fontWeight: "300",
            fontSize: "15px",
            "& fieldset": {
              border: `0.5px solid ${theme.palette.grey[300]} !important`,
            },
            mb: 1.25,
          })}
          name="name"
          size="small"
          placeholder="Full Name"
        />
        <OutlinedInput
          sx={(theme) => ({
            fontWeight: "300",
            fontSize: "15px",
            "& fieldset": {
              border: `0.5px solid ${theme.palette.grey[300]} !important`,
            },
            mb: 1.25,
          })}
          name="mobile_number"
          size="small"
          placeholder="Mobile Number"
          startAdornment={
            <Typography sx={{ font: "inherit", mr: 1, pt: 0.5 }}>
              +62
            </Typography>
          }
        />
      </Stack>

      <Stack
        sx={(theme) => ({
          flex: 1,
          px: 3.75,
          py: 3,
          borderLeft: `0.5px solid ${theme.palette.grey[300]}`,
        })}
      >
        <Typography
          sx={(theme) => ({
            fontSize: "23px",
            color: theme.palette.primary.dark,
            mb: 2.5,
          })}
          component="h1"
        >
          Lokasi Pengiriman
        </Typography>
        <Typography
          sx={{
            fontWeight: "300",
            fontSize: "16px",
          }}
          component="h2"
        >
          1. Set Lokasi Pengentaran di Peta
        </Typography>
        <Typography
          sx={{
            fontWeight: "300",
            fontSize: "14px",
            mb: 2.25,
          }}
        >
          Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran
        </Typography>
        <Box sx={{ height: "300px", background: "gray", mb: 2.25 }}></Box>
        <Typography
          sx={{
            fontWeight: "300",
            fontSize: "16px",
          }}
          component="h2"
        >
          2. Berikan Alamat Lengkap
        </Typography>
        <Typography
          sx={{
            fontWeight: "300",
            fontSize: "14px",
            mb: 2.25,
          }}
        >
          {
            ' Tambahkan catatan atau acuan jika perlu (contoh: "di sebelah salon")'
          }
        </Typography>
        <OutlinedInput
          sx={(theme) => ({
            fontWeight: "300",
            fontSize: "15px",
            "& fieldset": {
              border: `0.5px solid ${theme.palette.grey[300]} !important`,
            },
            mb: 1.25,
          })}
          name="address"
          size="small"
          placeholder="Mohon set lokasi pengantaran di peta sebelum mengisi alamat pengantaran"
          multiline
          minRows={4}
          maxRows={4}

          // onChange={handleNoteChange}
        />
        <Link href={`/cart/payment`} passHref legacyBehavior>
          <MaterialLink underline="none">
            <Button sx={{ width: "100%" }} variant="contained" size="large">
              Continue
            </Button>
          </MaterialLink>
        </Link>
      </Stack>
    </Stack>
  );
});
