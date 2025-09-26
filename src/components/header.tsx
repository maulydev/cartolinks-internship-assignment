"use client";

import React, { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white/50 dark:bg-gray-900/60 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Left: Logo + Username */}
        <div className="flex items-center gap-x-4">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold">
            K
          </div>
          <span className="hidden lg:block font-medium text-gray-700 dark:text-gray-200">
            benevolentnimblebat
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-8 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
          <Home size={20} />
          <Image size={20} />
          <Video size={20} />
          <Wand2 size={20} />
          <PenTool size={20} />
          <Triangle size={20} />
          <Folder size={20} />
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm">
            Gallery
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm">
            Support
          </button>

          <Bell size={20} className="text-gray-700 dark:text-gray-200" />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
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

              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
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
      )}
    </header>
  );
};

export default Header;
