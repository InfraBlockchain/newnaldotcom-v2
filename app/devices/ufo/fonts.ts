import { IBM_Plex_Serif, Inter } from "next/font/google";

export const ufoInter = Inter({
  variable: "--ufo-font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const ufoPlexSerif = IBM_Plex_Serif({
  variable: "--ufo-font-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const ufoFontClassName = `${ufoInter.variable} ${ufoPlexSerif.variable}`;
