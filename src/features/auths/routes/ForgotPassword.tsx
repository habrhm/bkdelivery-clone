import {
  Button,
  Container,
  Link as MaterialLink,
  // Select,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

import { TextInput } from "@/components/TextInput";

export const ForgotPasswordPage = () => {
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
              Forget Password
            </Typography>
            <Typography
              sx={() => ({
                fontSize: "15px",
                fontWeight: "200",
                pt: 2,
              })}
              component="h2"
            >
              Please fill in your email address below and we&quot;ll send you an
              email with instructions on how to reset your password.
            </Typography>

            <Stack sx={{ mt: 2 }}>
              <TextInput name="email" size="small" placeholder="Email" />
            </Stack>
            <Link href={`/`} passHref legacyBehavior>
              <MaterialLink underline="none">
                <Button sx={{ mt: 2, width: "100%" }} variant="contained">
                  Send
                </Button>
              </MaterialLink>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
