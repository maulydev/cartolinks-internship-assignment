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
} from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { key: "home", icon: Home, path: "/" },
  { key: "image", icon: Image, path: "/image" },
  { key: "video", icon: Video, path: "/video" },
  { key: "wand", icon: Wand2, path: "/wand" },
  { key: "pen", icon: PenTool, path: "/pen" },
  { key: "triangle", icon: Triangle, path: "/triangle" },
  { key: "folder", icon: Folder, path: "/folder" },
];

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 rounded-3xl p-2 gap-x-1">
      {navItems.map(({ key, icon: Icon, path }) => (
        <Link
          key={key}
          href={path}
          className={`transition-colors cursor-pointer p-4 rounded-2xl ${
            pathname === path
              ? "bg-white dark:bg-blue-500"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          <Icon size={20} />
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
