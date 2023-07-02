import {
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import Slider from "react-slick";

import { menus, promotions } from "@/data";

import { MenuItem } from "../components/MenuItem";
import { SliderArrow } from "../components/SliderArrow";
import { SliderItem } from "../components/SliderItem";

export const HomePage = () => {
  const [isDragging, setDragging] = React.useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

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
          <Grid container spacing={isDesktop ? 2 : 0.5}>
            {menus.map((item) => (
              <Grid
                key={item.id}
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
