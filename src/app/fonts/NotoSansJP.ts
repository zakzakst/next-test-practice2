import localFont from "next/font/local";

export const NotoSansJP = localFont({
  src: [
    {
      path: "./NotoSansJP-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NotoSansJP-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans",
});
