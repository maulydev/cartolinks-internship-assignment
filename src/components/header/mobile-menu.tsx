"use client";

import React from "react";
import { Home, Image, Video, Wand2, PenTool, Triangle, Folder, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { theme, setTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden shadow-md px-4 py-3 space-y-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="md:hidden flex justify-between px-4 gap-4 text-gray-600 dark:text-gray-300">
        <Home size={20} />
        <Image size={20} />
        <Video size={20} />
        <Wand2 size={20} />
        <PenTool size={20} />
        <Triangle size={20} />
        <Folder size={20} />
      </div>
      <div className="flex flex-wrap gap-x-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm">
        <button className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg">
          Gallery
        </button>
        <button className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg">
          Support
        </button>
        <div className="flex items-center gap-x-6 pt-2">
          <button>
            <Bell size={20} className="text-gray-700 dark:text-gray-200" />
          </button>

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
      </div>
    </div>
  );
};

export default MobileMenu;
