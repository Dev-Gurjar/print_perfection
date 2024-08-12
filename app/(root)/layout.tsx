import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/Navbar";

const Gfont = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--Gfont",
});

export const metadata: Metadata = {
  title: "Print Perfection",
  description: "Home Page for Print_Perfection Webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Gfont.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ClerkProvider>
          <NavBar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
