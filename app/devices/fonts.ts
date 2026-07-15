import { Inter, Syne } from "next/font/google";
import localFont from "next/font/local";

// Independent, page-scoped font instances per docs/spec/tasks/TASK-B-devices.md —
// must not depend on app/layout.tsx variables (TASK A owns global fonts).
export const syne = Syne({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--devices-font-syne",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--devices-font-inter",
  display: "swap",
});

// Pretendard 700 (card labels) self-hosted from the npm package per spec §1-3.
export const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2",
  weight: "700",
  variable: "--devices-font-pretendard",
  display: "swap",
});

export const devicesFontClassName = `${syne.variable} ${inter.variable} ${pretendard.variable}`;
