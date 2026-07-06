import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Placeholder Newnal Homepage",
  description: "Placeholder description for the new philosophical homepage draft.",
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
