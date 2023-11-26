import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarItem } from "@/components/GeneralComponents/Sidebar";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <main className="App">
      <Home>
        <Sidebar></Sidebar>
      </Home>
    </main>
  );
}
{
  /* <Sidebar>
  <SidebarItem
    icon={
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 18 20"
      >
        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
      </svg>
    }
    active
    text={"Dashboard"}
  />
</Sidebar>
<Home>{...children}</Home> */
}
