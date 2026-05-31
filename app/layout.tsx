import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uranus House — Luxury Boutique Hotel, Uyo",
  description:
    "Uranus House by Pointcode Hospitality Ltd. A luxury boutique hotel in the heart of Uyo, Akwa Ibom State. 30 exquisite rooms, restaurant, conference hall, and personalized service.",
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
