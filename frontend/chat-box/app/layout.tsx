import type {Metadata} from "next";

import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat-box",
  description: "Talk to ai about subjests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
