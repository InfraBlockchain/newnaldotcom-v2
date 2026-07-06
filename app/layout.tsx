import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newnal Draft Homepage",
  description: "Draft philosophical homepage for the next Newnal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
