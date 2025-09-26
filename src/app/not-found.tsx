"use client";

import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
      <SearchX size={120} className="text-gray-400 dark:text-gray-600" />

      <h1 className="mt-4 text-6xl font-bold text-gray-800 dark:text-gray-100">
        404
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Page not found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
