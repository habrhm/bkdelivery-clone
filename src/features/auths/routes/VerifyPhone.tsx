import {
  Button,
  Container,
  Link as MaterialLink,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { TextInput } from "@/components/TextInput";

export const VerifyPhonePage = () => {
  const [phone, setPhone] = React.useState("");

  return (
    <Stack minHeight="100vh">
      <Container
        sx={(theme) => ({
          alignSelf: "center",
          my: 2,
          background: "white",
          boxShadow: theme.shadows[2],
          p: "0px !important",
        })}
        maxWidth="xs"
      >
        <Stack>
          <Stack sx={{ p: 4, pb: 1 }}>
            <Typography
              sx={(theme) => ({
                textAlign: "center",
                fontSize: "38px",
                color: theme.palette.primary.dark,
              })}
              component="h1"
            >
              Register
            </Typography>
            <Typography
              sx={() => ({
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "200",
              })}
              component="h2"
            >
              Please enter your mobile number to register
            </Typography>
            <Stack sx={{ mt: 2 }}>
              <TextInput
                name="mobile_number"
                size="small"
                placeholder="82136426745 (example)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                startAdornment={
                  <Typography sx={{ font: "inherit", mr: 1 }}>+62</Typography>
                }
              />
            </Stack>
            <Link
              href={`/accounts/register/+62${phone}`}
              passHref
              legacyBehavior
            >
              <MaterialLink underline="none">
                <Button sx={{ mt: 2, width: "100%" }} variant="contained">
                  Register
                </Button>
              </MaterialLink>
            </Link>
            <Stack sx={{ width: "auto", alignItems: "center" }}>
              <Image
                src={
                  "https://bkdelivery.co.id/static/website/img/burger-1x.c5408eaf310c.jpg"
                }
                width={0}
                height={0}
                sizes="100vw"
                alt="a"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "unset",
                  objectFit: "contain",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
