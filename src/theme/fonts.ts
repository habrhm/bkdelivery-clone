import localFont from "next/font/local";

export const flame = localFont({
  src: [
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
