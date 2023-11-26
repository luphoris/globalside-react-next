import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarItem } from "@/components/GeneralComponents/Sidebar";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Sidebar children={children}> */}
      <body className={inter.className}>{children}</body>
      {/* </Sidebar> */}
    </html>
  );
}
