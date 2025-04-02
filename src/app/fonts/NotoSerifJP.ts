import localFont from "next/font/local";

export const NotoSerifJP = localFont({
  src: [
    {
      path: "./NotoSerifJP-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NotoSerifJP-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-serif",
});
