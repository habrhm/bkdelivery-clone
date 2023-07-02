import {
  Button,
  Container,
  FormControlLabel,
  Link as MaterialLink,
  Radio,
  RadioGroup,
  // Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { TextInput } from "@/components/TextInput";
import { getRangeArray } from "@/utils/getRangeArray";

import { Select } from "../components/Select";

// const Option = styled("option")();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const RegisterPage = () => {
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
              Please enter your account details to register
            </Typography>

            <Stack sx={{ mt: 2 }}>
              <TextInput name="name" size="small" placeholder="Full Name" />
              <TextInput name="email" size="small" placeholder="Email" />
              <Stack direction="row">
                <Select
                  name="date"
                  options={[
                    "--",
                    ...getRangeArray(1, 31, 1).map((item) => item.toString()),
                  ]}
                />
                <Select name="month" options={["--", ...months]} />
                <Select
                  name="year"
                  options={[
                    "--",
                    ...getRangeArray(1945, 2011, 1)
                      .sort((a, b) => b - a)
                      .map((item) => item.toString()),
                  ]}
                />
              </Stack>
              <RadioGroup row name="gender">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  sx={{ span: { fontWeight: "200" } }}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  sx={{ span: { fontWeight: "200" } }}
                />
              </RadioGroup>
              <TextInput
                name="name"
                size="small"
                placeholder="Password"
                type="password"
              />
              <TextInput name="name" size="small" placeholder="OTP Number" />
            </Stack>
            <Link href={`/`} passHref legacyBehavior>
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
