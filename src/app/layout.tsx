import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neuePlak = localFont({
  src: [
    {
      path: "../fonts/neue-plak/Neue Plak Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/neue-plak/Neue Plak Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/neue-plak/Neue Plak SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/neue-plak/Neue Plak Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/neue-plak/Neue Plak Black.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-plak",
});

export const metadata: Metadata = {
  title: "Horizon",
  description:
    "Horizon is the world's first Super Engagement Platform, enabling enterprises to deliver big-tech-level engagement at scale and drive unparalleled growth. Stay tuned for our official website launch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neuePlak.variable} antialiased`}>{children}</body>
    </html>
  );
}
