import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

import "../globals.css";


import { ClerkProvider } from "@clerk/nextjs";

const Gfont = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--Gfont",
});

export const metadata: Metadata = {
  title: "Print Perfection",
  description: "page for Print_Perfection Webapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
