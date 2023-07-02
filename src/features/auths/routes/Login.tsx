import {
  Button,
  Container,
  Link as MaterialLink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

import { TextInput } from "@/components/TextInput";

export const LoginPage = () => {
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
          <Stack sx={{ p: 4 }}>
            <Typography
              sx={(theme) => ({
                textAlign: "center",
                fontSize: "38px",
                color: theme.palette.primary.dark,
              })}
              component="h1"
            >
              Welcome!
            </Typography>
            <Typography
              sx={() => ({
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "200",
              })}
              component="h2"
            >
              Enter your mobile phone and password to login
            </Typography>
            <Stack sx={{ mt: 2 }}>
              <TextInput
                name="mobile_number"
                size="small"
                placeholder="82136426745 (example)"
                startAdornment={
                  <Typography sx={{ font: "inherit", mr: 1 }}>+62</Typography>
                }
              />
              <TextInput
                name="password"
                size="small"
                placeholder="Password"
                type="password"
              />
            </Stack>
            <Link href={`/`} passHref legacyBehavior>
              <MaterialLink underline="none">
                <Button sx={{ mt: 2, width: "100%" }} variant="contained">
                  Login
                </Button>
              </MaterialLink>
            </Link>
            <Link href={`/accounts/forgot-password`} passHref legacyBehavior>
              <MaterialLink underline="none">
                <Button
                  sx={(theme) => ({
                    color: theme.palette.primary.main,
                  })}
                >
                  Forget Password?
                </Button>
              </MaterialLink>
            </Link>
          </Stack>
          <Stack
            sx={(theme) => ({
              border: `0.5px solid ${theme.palette.grey[300]}`,
              p: 4,
            })}
            spacing={1}
          >
            <Typography
              sx={(theme) => ({
                fontSize: "26px",
                color: theme.palette.primary.dark,
              })}
            >
              Not A Member Yet?
            </Typography>
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={1}>
              <Typography
                sx={() => ({
                  fontSize: "15px",
                  fontWeight: "200",
                })}
              >
                Register to get reward points and exclusive promotions.
              </Typography>
              <Link href="/accounts/register" passHref legacyBehavior>
                <MaterialLink underline="none">
                  <Button variant="contained" color="secondary" size="large">
                    Register
                  </Button>
                </MaterialLink>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
