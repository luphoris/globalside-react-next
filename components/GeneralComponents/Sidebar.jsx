"use client";
import { createContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <aside className="h-screen w-1/12">
      <nav className="h-full flex flex-col bg-sky-600 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-end">
          <button
            // onClick={setIsExpanded(false)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          ></button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>
        <div>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
          </svg>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  return (
    <li
      className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    ${
      active
        ? "bg-gradient-to-tr from-cyan-50 to-cyan-200"
        : "hover:bg-indigo-50 text-gray-600"
    }
`}
    >
      {icon}
      <span>{text}</span>
    </li>
  );
}
