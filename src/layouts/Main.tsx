import Stack from "@mui/material/Stack";
import Head from "next/head";
import * as React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = React.PropsWithChildren<{
  title?: string;
  plainBg?: boolean;
}>;

export const MainLayout = ({ children, title, plainBg = false }: Props) => {
  const pageTitle = title ? `${title} - Burger King` : "Burger King";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Stack
        sx={{
          background: plainBg
            ? "#f9f4f2"
            : `url("https://bkdelivery.co.id/static/website/img/BK_bg.jpg?5218847fa211") no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
        minHeight="100vh"
      >
        <Header />
        <Stack sx={{ flex: 1, pt: { xs: "50px", lg: 0 } }}>{children}</Stack>
        <Footer />
      </Stack>
    </>
  );
};
