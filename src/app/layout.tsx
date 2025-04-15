import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destiny Omaye",
  description:
    "G'day, I'm Destiny, a Full-Stack Web Developer. This is my personal website. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-black scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
