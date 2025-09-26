"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Image,
  Video,
  Wand2,
  PenTool,
  Triangle,
  Folder,
  Bell,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import NotificationsDrawer from "./notifications-drawer";

interface MobileMenuProps {
  isOpen: boolean;
}

const navItems = [
  { key: "home", icon: Home, path: "/" },
  { key: "image", icon: Image, path: "/image" },
  { key: "video", icon: Video, path: "/video" },
  { key: "wand", icon: Wand2, path: "/wand" },
  { key: "pen", icon: PenTool, path: "/pen" },
  { key: "triangle", icon: Triangle, path: "/triangle" },
  { key: "folder", icon: Folder, path: "/folder" },
];

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/support", label: "Support" },
];

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden shadow-md px-2 py-3 space-y-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      {/* Top nav icons */}
      <div className="flex justify-between px-2 gap-2 text-gray-600 dark:text-gray-300">
        {navItems.map(({ key, icon: Icon, path }) => (
          <Link
            key={key}
            href={path}
            className={`p-3 rounded-xl transition-colors ${
              pathname === path
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Icon size={14} />
          </Link>
        ))}
      </div>

      {/* Bottom links with active state */}
      <div className="flex flex-wrap gap-x-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex-1 px-3 py-2 text-center rounded-lg transition-colors ${
              pathname === href
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {label}
          </Link>
        ))}

        <div className="flex items-center gap-x-6 pt-2">
          <NotificationsDrawer />

          {/* Dark mode toggle */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
