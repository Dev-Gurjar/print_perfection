import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/Navbar";

export const Gfont = EB_Garamond({ weight: '400',subsets: ["latin"], variable: '--Gfont' });

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
      <body>
        <ClerkProvider>
          <NavBar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
