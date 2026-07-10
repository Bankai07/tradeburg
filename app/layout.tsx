import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TradeBurg | Global Import & Export",
  description: "Premium B2B Import Export Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
