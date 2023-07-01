import localFont from "next/font/local";

export const flame = localFont({
  src: [
    {
      path: "../assets/fonts/FlameSans.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/FlameRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/FlameBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
