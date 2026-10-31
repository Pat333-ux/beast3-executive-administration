import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beast3 Executive Administration",
  description: "Executive governance, policy oversight, and strategic administration dashboard.",
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
