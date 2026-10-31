import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beast3 Executive Administration",
  description: "Executive governance and strategic administration dashboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
