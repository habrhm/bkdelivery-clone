import { Container, Stack } from "@mui/material";
import * as React from "react";

import { promotions } from "@/data";

import { NewsItem } from "../components/NewsItem";

export const NewsPage = () => {
  return (
    <Stack sx={{ alignItems: "stretch", pb: 4 }} spacing={4}>
      <Container sx={{ alignSelf: "center" }} maxWidth="lg">
        <Stack
          sx={{ alignItems: "stretch", px: { xs: 0, lg: 12 } }}
          spacing={3}
        >
          {promotions.map((item) => (
            <NewsItem img={item.img} url={item.url} isDragging={false} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
