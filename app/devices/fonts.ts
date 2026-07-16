import localFont from "next/font/local";

// Syne/Inter now come from the global layout variables (--font-syne/--font-inter);
// only Pretendard (card labels) stays page-scoped so other pages don't pay for it.
export const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2",
  weight: "700",
  variable: "--devices-font-pretendard",
  display: "swap",
});

export const devicesFontClassName = pretendard.variable;
