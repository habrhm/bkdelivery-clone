import "swiper/css";

import {
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import * as React from "react";
import Slider from "react-slick";

import { menus } from "@/data";

import { MenuItem } from "../components/MenuItem";
import { SliderArrow } from "../components/SliderArrow";
import { SliderItem } from "../components/SliderItem";

const promotions = [
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/6/28/fbmq8tgwcmkyxaskqhosbd.jpg",
    url: "/news-v1/bk-payday-50",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/6/21/hyrvweknmcxjkzb5soktmx.jpg",
    url: "/",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/5/15/8wjfofeq3vtqmpshlrw3h2.jpg",
    url: "/menus/kings-chicken-rasa-baru",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/5/15/8wjfofeq3vtqmpshlrw3h2.jpg",
    url: "/menus/kings-chicken-rasa-baru",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/5/15/8wjfofeq3vtqmpshlrw3h2.jpg",
    url: "/menus/kings-chicken-rasa-baru",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/5/15/8wjfofeq3vtqmpshlrw3h2.jpg",
    url: "/menus/kings-chicken-rasa-baru",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/5/15/8wjfofeq3vtqmpshlrw3h2.jpg",
    url: "/menus/kings-chicken-rasa-baru",
  },
  {
    img: "https://bkdelivery.co.id/media/slider_image/2023/5/15/8wjfofeq3vtqmpshlrw3h2.jpg",
    url: "/menus/kings-chicken-rasa-baru",
  },
];

export const HomePage = () => {
  const [isDragging, setDragging] = React.useState(false);

  return (
    <Stack sx={{ alignItems: "stretch", pb: 4 }} spacing={4}>
      <Slider
        dots
        infinite
        autoplay
        autoplaySpeed={5000}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        beforeChange={() => setDragging(true)}
        afterChange={() => setDragging(false)}
        prevArrow={<SliderArrow direction="left" />}
        nextArrow={<SliderArrow direction="right" />}
      >
        {promotions.map((item, index) => (
          <SliderItem
            key={index}
            img={item.img}
            url={item.url}
            isDragging={isDragging}
          />
        ))}
      </Slider>
      <Container sx={{ alignSelf: "center" }} maxWidth="lg">
        <Stack sx={{ alignItems: "stretch", px: { xs: 0, lg: 12 } }}>
          <Typography
            sx={(theme) => ({
              textAlign: "center",
              fontWeight: "700",
              color: theme.palette.primary.dark,
            })}
            variant="h4"
            component="h1"
          >
            Our Menus
          </Typography>
          <Grid sx={{ width: "100%" }} container spacing={2}>
            {menus.map((item) => (
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "stretch",
                }}
                component="div"
                xs={6}
                lg={4}
              >
                <MenuItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
