"use client";

import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="size-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 flex items-center justify-center">
        <p className="text-xl text-gray-900 font-bold">B</p>
      </div>
      <span className="hidden lg:block font-medium text-gray-700 dark:text-gray-200">
        benevolentnimblebat
      </span>
    </div>
  );
};

export default Logo;
