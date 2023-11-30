'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import LandingPage from "./page";
import DetailedPage from "./detailedPage";
import { usePathname, useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <html lang="en">
      {/* <Sidebar children={children}> */}
      <body className={inter.className}>
        {pathname === "/" && <LandingPage />}
        {pathname.startsWith("/landingPage/:id") && <DetailedPage />}
        {children}
      </body>
      {/* </Sidebar> */}
    </html>
  );
}
