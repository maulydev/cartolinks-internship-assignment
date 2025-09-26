"use client";

import React from "react";
import { Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationsDrawer from "./notifications-drawer";

const RightActions = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const links = [
    { href: "/gallery", label: "Gallery" },
    { href: "/support", label: "Support" },
  ];

  return (
    <div className="hidden lg:flex items-center gap-4">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-4 py-2 rounded-xl text-sm transition-colors
            ${
              pathname === href
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
        >
          {label}
        </Link>
      ))}

      <NotificationsDrawer />

      {/* Dark Mode Toggle */}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-gray-700" />
        )}
      </button>

      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300" />
    </div>
  );
};

export default RightActions;
