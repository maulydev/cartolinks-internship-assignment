"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import RightActions from "./right-actions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Logo />
        <DesktopNav />
        <RightActions />

        <button
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
