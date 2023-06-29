import Stack from "@mui/material/Stack";
import Head from "next/head";
import * as React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = React.PropsWithChildren<{
  title?: string;
}>;

export const MainLayout = ({ children, title }: Props) => {
  const pageTitle = title ? `${title} | Burger King` : "Burger King";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Stack
        sx={{
          background: `url("https://bkdelivery.co.id/static/website/img/BK_bg.jpg?5218847fa211") no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
        minHeight="100vh"
      >
        <Header />
        <Stack sx={{ flex: 1 }}>{children}</Stack>
        <Footer />
      </Stack>
    </>
  );
};
